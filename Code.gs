// Google Apps Script Web App for LJD Training Booking Platform
// Supports reading/writing to Google Sheets (4 tabs) and Cloudflare Turnstile anti-spam verification

var SHEET_USERS = "Users";
var SHEET_SESSIONS = "Sessions";
var SHEET_BOOKINGS = "Bookings";
var SHEET_PACKAGES = "Student Packages";

// GET REQUEST: Returns all data as JSON
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    var users = readSheetData(ss, SHEET_USERS);
    var sessions = readSheetData(ss, SHEET_SESSIONS);
    var bookings = readSheetData(ss, SHEET_BOOKINGS);
    var studentPackages = readSheetData(ss, SHEET_PACKAGES);
    
    var result = {
      users: users,
      sessions: sessions,
      bookings: bookings,
      studentPackages: studentPackages
    };
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// POST REQUEST: Updates data in sheets
// POST REQUEST: Updates data in sheets
function doPost(e) {
  try {
    var postData = JSON.parse(e.postData.contents);
    var action = postData.action;
    var payload = postData.payload;
    var token = postData.captchaToken;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (action === "sendCreditRequestEmail") {
      var studentName = payload.studentName || "Student";
      var creditType = payload.creditType || "Credits";
      var slots = payload.slots || 0;
      var price = payload.price || 0;
      
      // Find admin emails
      var adminEmails = [];
      if (payload.users) {
        for (var i = 0; i < payload.users.length; i++) {
          if (payload.users[i].Role === "Admin" && payload.users[i].Email) {
            adminEmails.push(payload.users[i].Email);
          }
        }
      }
      
      // Fallback: search Users sheet if not found in payload
      if (adminEmails.length === 0) {
        var usersData = readSheetData(ss, SHEET_USERS);
        for (var i = 0; i < usersData.length; i++) {
          if (usersData[i].Role === "Admin" && usersData[i].Email) {
            adminEmails.push(usersData[i].Email);
          }
        }
      }
      
      if (adminEmails.length > 0) {
        var recipient = adminEmails.join(",");
        var emailSubject = "[LJD Training] New Credit Request / 新增點數申請 - " + studentName;
        var emailBody = getCreditRequestEmailHtml(studentName, creditType, slots, price);
        sendEmailHtml(recipient, emailSubject, emailBody);
        return ContentService.createTextOutput(JSON.stringify({ success: true }))
          .setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({ error: "No Admin email found to notify" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    if (action !== "saveData") {
      return ContentService.createTextOutput(JSON.stringify({ error: "Invalid action" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // --- SECURITY & ANTI-SPAM CHECK (Cloudflare Turnstile) ---
    // Enforce CAPTCHA check if a Turnstile Secret Key is configured and a booking is being added
    var secretKey = PropertiesService.getScriptProperties().getProperty("TURNSTILE_SECRET_KEY");
    if (secretKey) {
      var isNewBooking = false;
      var existingBookings = readSheetData(ss, SHEET_BOOKINGS);
      
      // Determine if a new booking is being added
      if (payload.bookings && payload.bookings.length > existingBookings.length) {
        isNewBooking = true;
      } else if (payload.bookings) {
        var existingIds = existingBookings.map(function(b) { return String(b.Booking_ID); });
        for (var i = 0; i < payload.bookings.length; i++) {
          if (existingIds.indexOf(String(payload.bookings[i].Booking_ID)) === -1) {
            isNewBooking = true;
            break;
          }
        }
      }
      
      if (isNewBooking) {
        if (!token) {
          return ContentService.createTextOutput(JSON.stringify({ error: "Verification token is missing. Please solve the CAPTCHA." }))
            .setMimeType(ContentService.MimeType.JSON);
        }
        
        var isHuman = verifyTurnstile(token, secretKey);
        if (!isHuman) {
          return ContentService.createTextOutput(JSON.stringify({ error: "Security check failed. Turnstile token is invalid or expired." }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    
    // --- WRITE DATA TO SHEETS ---
    if (payload.users) {
      writeSheetData(ss, SHEET_USERS, payload.users, ["User_ID", "Username", "Name", "Role", "Email", "Phone", "Password"]);
    }
    if (payload.sessions) {
      writeSheetData(ss, SHEET_SESSIONS, payload.sessions, ["Session_ID", "Trainer_ID", "Date", "Time", "Capacity", "Booked_Count", "Status"]);
    }
    if (payload.bookings) {
      // Detect new confirmed bookings and send email to Personal Trainer
      try {
        var existingBookings = readSheetData(ss, SHEET_BOOKINGS);
        var existingIds = existingBookings.map(function(b) { return String(b.Booking_ID); });
        
        for (var i = 0; i < payload.bookings.length; i++) {
          var b = payload.bookings[i];
          if (b.Status === "Confirmed" && existingIds.indexOf(String(b.Booking_ID)) === -1) {
            var session = null;
            if (payload.sessions) {
              session = payload.sessions.find(function(s) { return String(s.Session_ID) === String(b.Session_ID); });
            }
            if (!session) {
              var sessionsData = readSheetData(ss, SHEET_SESSIONS);
              session = sessionsData.find(function(s) { return String(s.Session_ID) === String(b.Session_ID); });
            }
            
            if (session) {
              var trainer = null;
              if (payload.users) {
                trainer = payload.users.find(function(u) { return String(u.User_ID) === String(session.Trainer_ID); });
              }
              if (!trainer) {
                var usersData = readSheetData(ss, SHEET_USERS);
                trainer = usersData.find(function(u) { return String(u.User_ID) === String(session.Trainer_ID); });
              }
              
              var student = null;
              if (payload.users) {
                student = payload.users.find(function(u) { return String(u.User_ID) === String(b.Student_ID); });
              }
              if (!student) {
                var usersData = readSheetData(ss, SHEET_USERS);
                student = usersData.find(function(u) { return String(u.User_ID) === String(b.Student_ID); });
              }
              
              if (trainer && trainer.Email) {
                var trainerEmail = trainer.Email;
                var trainerName = trainer.Name || "Trainer";
                var studentName = student ? student.Name : "Student";
                var studentEmail = student ? student.Email : "";
                var studentPhone = student ? student.Phone : "";
                var date = session.Date || "";
                if (date && date.indexOf("T") !== -1) {
                  date = date.substring(0, 10);
                }
                var time = session.Time || "";
                
                var emailSubject = "[LJD Training] New Booking Notification / 新課程預約通知 - Class on " + date;
                var emailBody = getBookingEmailHtml(trainerName, studentName, studentEmail, studentPhone, date, time);
                
                sendEmailHtml(trainerEmail, emailSubject, emailBody);
              }
            }
          }
        }
      } catch (err) {
        console.error("Error processing booking email: " + err.toString());
      }
      
      writeSheetData(ss, SHEET_BOOKINGS, payload.bookings, ["Booking_ID", "Student_ID", "Session_ID", "Booking_Time", "Status"]);
    }
    if (payload.studentPackages) {
      writeSheetData(ss, SHEET_PACKAGES, payload.studentPackages, ["Student_ID", "Package_Name", "Total_Credits", "Remaining_Credits", "Expiry_Date"]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper to verify Cloudflare Turnstile token
function verifyTurnstile(token, secret) {
  var url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  var options = {
    method: "post",
    payload: {
      secret: secret,
      response: token
    },
    muteHttpExceptions: true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var resText = response.getContentText();
    var resJson = JSON.parse(resText);
    return resJson.success === true;
  } catch (err) {
    console.error("Turnstile verification API error: " + err.toString());
    return false;
  }
}

// Helper to read data from a sheet dynamically using headers
function readSheetData(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();
  if (lastRow < 2 || lastCol < 1) return [];
  
  var range = sheet.getRange(1, 1, lastRow, lastCol);
  var values = range.getValues();
  
  var headers = values[0].map(function(h) { return String(h).trim(); });
  var data = [];
  
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var obj = {};
    for (var c = 0; c < headers.length; c++) {
      if (headers[c]) {
        obj[headers[c]] = row[c];
      }
    }
    data.push(obj);
  }
  return data;
}

// Helper to write data to a sheet dynamically matching headers
function writeSheetData(ss, sheetName, dataList, expectedHeaders) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  
  sheet.clearContents();
  
  if (dataList.length === 0) {
    // Write headers only
    sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
    return;
  }
  
  // Collect all unique keys from list to use as headers, ensuring expectedHeaders are first
  var itemKeys = {};
  dataList.forEach(function(item) {
    Object.keys(item).forEach(function(k) {
      itemKeys[k] = true;
    });
  });
  
  var headers = [];
  expectedHeaders.forEach(function(h) {
    if (itemKeys[h]) {
      headers.push(h);
      delete itemKeys[h];
    }
  });
  Object.keys(itemKeys).forEach(function(k) {
    headers.push(k);
  });
  
  var sheetValues = [headers];
  
  for (var i = 0; i < dataList.length; i++) {
    var item = dataList[i];
    var row = [];
    for (var j = 0; j < headers.length; j++) {
      var val = item[headers[j]];
      row.push(val === undefined || val === null ? "" : val);
    }
    sheetValues.push(row);
  }
  
  sheet.getRange(1, 1, sheetValues.length, headers.length).setValues(sheetValues);
}

// Helper to send HTML email
function sendEmailHtml(to, subject, htmlBody) {
  try {
    if (!to) {
      console.warn("No email address provided for subject: " + subject);
      return;
    }
    MailApp.sendEmail({
      to: to,
      subject: subject,
      htmlBody: htmlBody
    });
    console.log("Email sent successfully to: " + to);
  } catch (e) {
    console.error("Failed to send email to " + to + ": " + e.toString());
  }
}

// HTML Template for Booking Notification to Trainer (English & Chinese)
function getBookingEmailHtml(trainerName, studentName, studentEmail, studentPhone, date, time) {
  return '<div style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff; color: #333333;">' +
    '<div style="text-align: center; border-bottom: 2px solid #10b981; padding-bottom: 15px; margin-bottom: 20px;">' +
      '<h2 style="color: #10b981; margin: 0; font-size: 22px;">LJD Training</h2>' +
      '<p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Class Booking Notification / 新課程預約通知</p>' +
    '</div>' +
    '<p style="font-size: 15px; line-height: 1.5; color: #4b5563;">Hello <strong>' + trainerName + '</strong> / 您好,</p>' +
    '<p style="font-size: 15px; line-height: 1.5; color: #4b5563;">A student has successfully booked a session with you. Here are the booking details:<br><span style="color: #6b7280; font-size: 13px;">（學員已成功預約您的課程。預約詳情如下：）</span></p>' +
    '<div style="background-color: #f9fafb; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 4px;">' +
      '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151; width: 180px;">Student / 學員姓名:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + studentName + '</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Contact Email / 聯絡信箱:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + (studentEmail || "N/A") + '</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Contact Phone / 聯絡電話:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + (studentPhone || "N/A") + '</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Date / 日期:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + date + '</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Time / 時間:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + time + '</td>' +
        '</tr>' +
      '</table>' +
    '</div>' +
    '<p style="font-size: 14px; line-height: 1.5; color: #4b5563;">Please prepare for the session accordingly. If you need to reschedule or contact the student, please use the details provided above.<br><span style="color: #6b7280; font-size: 13px;">（請做好相應的課前準備。如需調整時間或聯絡學員，請使用上方提供的聯絡資訊。）</span></p>' +
    '<hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0 15px 0;" />' +
    '<div style="text-align: center; font-size: 12px; color: #9ca3af;">' +
      'This is an automated notification from the LJD Training Booking Platform. / 此為系統自動發送的通知。' +
    '</div>' +
  '</div>';
}

// HTML Template for Credit Request Notification to Admin (English & Chinese)
function getCreditRequestEmailHtml(studentName, creditType, slots, price) {
  var displayCreditType = creditType;
  if (creditType.indexOf("1-on-1") !== -1 || creditType.indexOf("1對1") !== -1) {
    displayCreditType = "1對1 私人教練課餘額 / 1-on-1 PT Credits";
  } else if (creditType.indexOf("Group") !== -1 || creditType.indexOf("團體") !== -1) {
    displayCreditType = "團體課餘額 / Group Class Credits";
  }
  
  return '<div style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff; color: #333333;">' +
    '<div style="text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 20px;">' +
      '<h2 style="color: #3b82f6; margin: 0; font-size: 22px;">LJD Training</h2>' +
      '<p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Credit Request Notification / 額度購買申請通知</p>' +
    '</div>' +
    '<p style="font-size: 15px; line-height: 1.5; color: #4b5563;">Hello <strong>Admin</strong> / 您好 管理員,</p>' +
    '<p style="font-size: 15px; line-height: 1.5; color: #4b5563;">A student has submitted a new credit purchase request that requires your review and approval:<br><span style="color: #6b7280; font-size: 13px;">（學員已提交新的額度購買申請，需要您的審核與批准：）</span></p>' +
    '<div style="background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 4px;">' +
      '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151; width: 180px;">Student Name / 學員姓名:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + studentName + '</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Credit Type / 點數類型:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + displayCreditType + '</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Sessions/Slots / 申請堂數:</td>' +
          '<td style="padding: 6px 0; color: #4b5563;">' + slots + ' Sessions / ' + slots + ' 堂</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="padding: 6px 0; font-weight: bold; color: #374151;">Total Cost / 總計金額:</td>' +
          '<td style="padding: 6px 0; color: #3b82f6; font-weight: bold;">NT$ ' + price.toLocaleString() + '</td>' +
        '</tr>' +
      '</table>' +
    '</div>' +
    '<p style="font-size: 14px; line-height: 1.5; color: #4b5563;">Please log in to the <strong>LJD Training Booking Platform</strong> as an Admin, navigate to the <strong>Credit Requests</strong> tab, and action this request (Approve/Reject).<br><span style="color: #6b7280; font-size: 13px;">（請以管理員身份登入 LJD Training 預約平台，前往「額度審核」分頁進行相應的處理（批准/拒絕）。）</span></p>' +
    '<hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0 15px 0;" />' +
    '<div style="text-align: center; font-size: 12px; color: #9ca3af;">' +
      'This is an automated notification from the LJD Training Booking Platform. / 此為系統自動發送的通知。' +
    '</div>' +
  '</div>';
}
