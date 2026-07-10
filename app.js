/* -------------------------------------------------------------
 * LJD Training Booking Platform Core Logic
 * Handles localization, mock DB (localStorage), views and bookings
 * ------------------------------------------------------------- */

// ==========================================
// 1. LOCALIZATION SYSTEM (EN / ZH-TW)
// ==========================================
const translations = {
    en: {
        appName: "LJD Training",
        viewAs: "View As:",
        student: "Student",
        trainer: "Trainer",
        admin: "Admin",

        // Student View
        remainingCredits: "Remaining Credits",
        nextSession: "Your Next Session",
        noUpcoming: "No sessions booked yet",
        bookSessionTitle: "Book a Training Session",
        all: "All",
        oneOnOne: "1 on 1",
        groupClass: "Group Class",
        myBookings: "My Bookings",
        bookBtn: "Book Class",
        cancelBtn: "Cancel",
        bookedSuccess: "Successfully booked!",
        cancelledSuccess: "Booking cancelled and credit refunded.",
        noCredits: "No credits remaining in your package!",
        alreadyBooked: "You have already booked this session!",
        sessionFull: "This session is full!",
        creditsTotalSuffix: "sessions remaining",
        packageIdLbl: "Package ID",

        // Trainer View
        trainerTitle: "Trainer Dashboard",
        trainerSubtitle: "Manage your schedule and view class participants",
        createSessionBtn: "Create Session",
        myScheduleTitle: "My Teaching Schedule",
        summary: "Summary",
        totalSessions: "Total Sessions",
        oneOnOneClasses: "1 on 1 Classes",
        groupClasses: "Group Classes",
        viewParticipants: "View Participants",
        noParticipants: "No students registered yet",
        participantsListTitle: "Participants List",
        createSessionModalTitle: "Create Class Session",
        formTrainer: "Trainer",
        formClassType: "Class Type",
        formCapacity: "Max Capacity (Max 3 for Group)",
        formDate: "Date",
        formStartTime: "Start Time",
        formEndTime: "End Time",
        formSaveSession: "Save Session",
        formCancel: "Cancel",
        sessionCreatedSuccess: "Session created successfully!",
        sessionUpdatedSuccess: "Session updated successfully!",
        editSessionModalTitle: "Edit Class Session",
        editClassBtn: "Edit Class",
        cannotEditFinishedClass: "Cannot edit a finished class!",
        cannotReduceCapacityBelowBookings: "Cannot reduce capacity below the number of registered students!",
        editSessionLockedWarning: "Trainer and Class Type are locked because students have already booked this session.",
        invalidSessionTime: "End time must be after start time!",
        editUserModalTitle: "Edit Member Account",
        userUpdatedSuccess: "User account updated successfully!",
        userDeletedSuccess: "User account deleted successfully!",
        deleteUserConfirm: "Are you sure you want to delete this account? This action cannot be undone.",
        cannotDeleteSelf: "You cannot delete your own active account!",
        cannotDeleteStudentWithBookings: "Cannot delete this student because they have active session bookings!",
        cannotDeleteTrainerWithSessions: "Cannot delete this trainer because they have scheduled classes!",
        ptCreditsTitle: "1-on-1 PT Credits",
        groupCreditsTitle: "Group Class Credits",
        buyPtPackageBtn: "Buy PT Package",
        buyGroupPackageBtn: "Buy Group Package",
        buyPackageModalTitle: "Purchase Class Credits",
        creditTypeLbl: "Credit Type",
        selectPackageOptionLbl: "Select Package Option",
        totalCostLbl: "Total Cost",
        payAndAddCreditsBtn: "Add Credit",
        packagePurchasedSuccess: "Purchase request submitted! Credits will be added once approved by Admin.",
        thGroupCredits: "Group Credits",
        formGroupTotalSlots: "Total Group Purchased Slots",
        formGroupRemainingSlots: "Remaining Group Slots",
        lblTabRequests: "Credit Requests",
        lblManageRequestsTitle: "Manage Credit Requests",
        thReqStudent: "Student",
        thReqType: "Credit Type",
        thReqSlots: "Slots Requested",
        thReqPrice: "Total Price",
        thReqDate: "Request Date",
        thReqStatus: "Status",
        thReqActions: "Actions",
        requestApprovedMsg: "Purchase request approved successfully! Credits added to student account.",
        requestRejectedMsg: "Purchase request has been rejected.",

        // Admin View
        adminTitle: "Admin Management Console",
        tabStudents: "Students & Packages",
        tabSessions: "All Sessions",
        tabExport: "Data Export",
        manageStudents: "Manage Students",
        addStudentBtn: "Add New Student",
        thId: "ID",
        thName: "Name",
        thEmail: "Email",
        thPhone: "Phone",
        thRole: "Role",
        thCredits: "Credits Remaining",
        thActions: "Actions",
        thTrainer: "Trainer ID",
        thType: "Type",
        thCapacity: "Capacity",
        thDateTime: "Date & Time",
        thStatus: "Status",
        thBookings: "Booked Students",
        manageSessionsBookings: "Manage Sessions & Bookings",

        // Export & Database
        exportUsersTitle: "1. Users Table (Google Sheet tab 1)",
        exportUsersDesc: "Contains all users, phone numbers, emails, and roles.",
        exportSessionsTitle: "2. Sessions Table (Google Sheet tab 2)",
        exportSessionsDesc: "Contains list of sessions, capacity, status, dates, and times.",
        exportBookingsTitle: "3. Bookings Table (Google Sheet tab 3)",
        exportBookingsDesc: "Contains references between booked sessions and students.",
        exportPackagesTitle: "4. Student Packages Table (Google Sheet tab 4)",
        exportPackagesDesc: "Contains purchased package limits and remaining credits.",
        btnExportCsv: "Export CSV",
        dbMgmtTitle: "Database Utilities",
        btnDbReset: "Reset database to default sample data",
        dbResetSuccess: "Database has been reset to default values.",

        // Modals general
        addUserModalTitle: "Add New Student",
        formFullName: "Full Name",
        formEmail: "Email Address",
        formPhone: "Phone Number",
        formRole: "Role",
        formPackageHeader: "Training Package Setup",
        formTotalSlots: "Total Purchased Slots",
        formRemainingSlots: "Remaining Slots",
        btnSaveMember: "Save Member",
        adjustCreditsModalTitle: "Adjust Student Package Credits",
        studentNameDisplay: "Student Name",
        btnSaveCredits: "Save Credits",
        userCreatedSuccess: "User created successfully!",
        creditsUpdatedSuccess: "Credits updated successfully!",

        // Table values & states
        statusAvailable: "Available",
        statusFull: "Full",
        statusFinished: "Finished",
        statusConfirmed: "Confirmed",
        statusCancelled: "Cancelled",

        // Login & Registration
        loginIdentifier: "Email or Phone Number",
        btnSignIn: "Sign In",
        demoAccounts: "Demo Accounts:",
        regName: "Full Name",
        regEmail: "Email Address",
        regPhone: "Phone Number",
        btnCreateAccount: "Create Account",
        loginSuccess: "Successfully logged in!",
        loginFailed: "User not found. Please register or verify spelling!",
        logoutSuccess: "Logged out successfully.",
        invalidEmail: "Please enter a valid email or phone number!",
        lblPassword: "Password",
        lblPasswordPlaceholder: "Enter your password",
        lblPasswordMinLength: "Password must be at least 4 characters long!",
        passwordWrong: "Incorrect password! Please try again.",
        adminUserPasswordLbl: "Password (leave blank to keep current)",
        adminUserPasswordRequiredLbl: "Password",

        // Settings tab & Pricing
        tabSettings: "Settings",
        settingsTitle: "Package & Pricing Settings",
        settingsSubtitle: "Manage class rates, pricing packages, and session rules.",
        settingsGroupClassTitle: "Group Class Settings",
        settingsPtTitle: "1-on-1 PT Pricing Packages",
        setGroupTrial: "First Trial Price (NT)",
        setGroupNormal: "Normal Class Price (NT)",
        setGroupMin: "Min Participants to Start",
        setPt1: "1 Class Package Price (NT)",
        setPt10: "10 Classes Package Price / Class (NT)",
        setPt20: "20 Classes Package Price / Class (NT)",
        btnSaveSettings: "Save Settings",
        settingsUpdatedSuccess: "Pricing settings updated successfully!",

        // Calendar & Legend
        studentCalendarTitle: "Monthly Class Calendar",
        trainerCalendarTitle: "Monthly Teaching Calendar",
        legendAvailable: "Available Class",
        legendBooked: "Your Booking",
        legendSelected: "Selected Day",
        legendTeaching: "Teaching Day",
        legendTrainerSelected: "Selected Day",
        cancellation24hError: "You can only cancel bookings at least 24 hours in advance!"
    },
    "zh-tw": {
        appName: "LJD 訓練中心",
        viewAs: "切換角色:",
        student: "學員",
        trainer: "教練",
        admin: "管理員",

        // Student View
        remainingCredits: "剩餘堂數",
        nextSession: "您的下一堂課程",
        noUpcoming: "目前無已預約的課程",
        bookSessionTitle: "預約個人/團體課程",
        all: "全部",
        oneOnOne: "1 對 1 私人課",
        groupClass: "團體課",
        myBookings: "我的預約紀錄",
        bookBtn: "立即預約",
        cancelBtn: "取消預約",
        bookedSuccess: "預約成功！",
        cancelledSuccess: "已取消預約，堂數已退回。",
        noCredits: "您的剩餘堂數不足！",
        alreadyBooked: "您已經預約過此課程！",
        sessionFull: "該課程已額滿！",
        creditsTotalSuffix: "堂剩餘課程",
        packageIdLbl: "方案 ID",

        // Trainer View
        trainerTitle: "教練管理後台",
        trainerSubtitle: "管理您的課程排程並查看學員名單",
        createSessionBtn: "新增課程時段",
        myScheduleTitle: "我的授課課表",
        summary: "數據統計",
        totalSessions: "總開課堂數",
        oneOnOneClasses: "1 對 1 私人課",
        groupClasses: "團體課",
        viewParticipants: "查看學員名單",
        noParticipants: "尚無學員預約",
        participantsListTitle: "預約學員名單",
        createSessionModalTitle: "新增開課時段",
        formTrainer: "授課教練",
        formClassType: "課程類型",
        formCapacity: "最大容納人數 (團體課上限 3 人)",
        formDate: "上課日期",
        formStartTime: "開始時間",
        formEndTime: "結束時間",
        formSaveSession: "儲存開課",
        formCancel: "取消",
        sessionCreatedSuccess: "課程時段已成功建立！",
        sessionUpdatedSuccess: "課程時段已成功更新！",
        editSessionModalTitle: "編輯開課時段",
        editClassBtn: "編輯課程",
        cannotEditFinishedClass: "無法編輯已結束的課程！",
        cannotReduceCapacityBelowBookings: "最大容納人數不能低於目前已預約的學員人數！",
        editSessionLockedWarning: "由於已有學員預約，授課教練與課程類型已被鎖定。",
        invalidSessionTime: "結束時間必須晚於開始時間！",
        editUserModalTitle: "編輯成員帳號",
        userUpdatedSuccess: "用戶帳號已成功更新！",
        userDeletedSuccess: "用戶帳號已成功刪除！",
        deleteUserConfirm: "您確定要刪除此帳號嗎？此操作將無法復原。",
        cannotDeleteSelf: "您無法刪除自己目前登入的帳號！",
        cannotDeleteStudentWithBookings: "無法刪除此學員，因為其有尚未結束/已確認的課程預約！",
        cannotDeleteTrainerWithSessions: "無法刪除此教練，因為其有排定的課程！",
        ptCreditsTitle: "1對1 私人教練課餘額",
        groupCreditsTitle: "團體課餘額",
        buyPtPackageBtn: "購買 PT 方案",
        buyGroupPackageBtn: "購買團體課方案",
        buyPackageModalTitle: "購買課程點數",
        creditTypeLbl: "點數類型",
        selectPackageOptionLbl: "選擇購買方案",
        totalCostLbl: "總計費用",
        payAndAddCreditsBtn: "申請額度",
        packagePurchasedSuccess: "購買請求已送出！管理員審核通過後將自動發放額度。",
        thGroupCredits: "團體課餘額",
        formGroupTotalSlots: "購買總團體課堂數",
        formGroupRemainingSlots: "剩餘團體課堂數",
        lblTabRequests: "額度審核",
        lblManageRequestsTitle: "審核額度購買請求",
        thReqStudent: "學員",
        thReqType: "額度類型",
        thReqSlots: "申請堂數",
        thReqPrice: "總金額",
        thReqDate: "申請時間",
        thReqStatus: "狀態",
        thReqActions: "操作",
        requestApprovedMsg: "額度購買請求已核准！已成功儲值至學員帳戶。",
        requestRejectedMsg: "額度購買請求已被拒絕。",

        // Admin View
        adminTitle: "系統管理主控台",
        tabStudents: "學員與方案管理",
        tabSessions: "所有課程排程",
        tabExport: "數據匯出 (CSV)",
        manageStudents: "學員名單管理",
        addStudentBtn: "新增學員帳號",
        thId: "編號",
        thName: "姓名",
        thEmail: "電子郵件",
        thPhone: "聯絡電話",
        thRole: "權限角色",
        thCredits: "剩餘課堂數",
        thActions: "管理操作",
        thTrainer: "教練編號",
        thType: "課程類型",
        thCapacity: "人數上限",
        thDateTime: "上課日期與時間",
        thStatus: "狀態",
        thBookings: "已預約學員",
        manageSessionsBookings: "排程與預約明細",

        // Export & Database
        exportUsersTitle: "1. 用戶名單 (Users) - 試算表分頁 1",
        exportUsersDesc: "包含所有用戶的帳號編號、姓名、電話、信箱和角色權限。",
        exportSessionsTitle: "2. 課程時段 (Sessions) - 試算表分頁 2",
        exportSessionsDesc: "包含所有的開課時段、類型、人數上限、日期和狀態。",
        exportBookingsTitle: "3. 預約紀錄 (Bookings) - 試算表分頁 3",
        exportBookingsDesc: "包含學員預約特定課程時段的對照關聯紀錄。",
        exportPackagesTitle: "4. 學員方案 (Student Packages) - 試算表分頁 4",
        exportPackagesDesc: "記錄每位學員購買的總堂數以及扣除後的剩餘堂數。",
        btnExportCsv: "匯出 CSV 檔",
        dbMgmtTitle: "資料庫工具",
        btnDbReset: "重設資料庫為預設展示資料",
        dbResetSuccess: "資料庫已成功重設為預設值。",

        // Modals general
        addUserModalTitle: "新增學員帳號",
        formFullName: "真實姓名",
        formEmail: "電子郵件",
        formPhone: "聯絡電話",
        formRole: "權限角色",
        formPackageHeader: "購買課程方案設定",
        formTotalSlots: "購買總堂數",
        formRemainingSlots: "可用剩餘堂數",
        btnSaveMember: "儲存成員",
        adjustCreditsModalTitle: "調整學員可用堂數",
        studentNameDisplay: "學員姓名",
        btnSaveCredits: "儲存堂數",
        userCreatedSuccess: "用戶已成功新增！",
        creditsUpdatedSuccess: "堂數已成功更新！",

        // Table values & states
        statusAvailable: "可預約 (Available)",
        statusFull: "已額滿 (Full)",
        statusFinished: "已結束 (Finished)",
        statusConfirmed: "預約確認 (Confirmed)",
        statusCancelled: "已取消 (Cancelled)",

        // Login & Registration
        loginIdentifier: "電子信箱或手機號碼",
        btnSignIn: "登入",
        demoAccounts: "示範帳號：",
        regName: "真實姓名",
        regEmail: "電子信箱",
        regPhone: "聯絡電話",
        btnCreateAccount: "註冊學員帳號",
        loginSuccess: "登入成功！",
        loginFailed: "找不到用戶，請檢查輸入或進行註冊！",
        logoutSuccess: "已成功登出。",
        invalidEmail: "請輸入有效的信箱或電話！",
        lblPassword: "密碼",
        lblPasswordPlaceholder: "請輸入密碼",
        lblPasswordMinLength: "密碼長度必須至少為 4 個字元！",
        passwordWrong: "密碼錯誤！請再試一次。",
        adminUserPasswordLbl: "密碼 (保留空白以維持原密碼)",
        adminUserPasswordRequiredLbl: "密碼",

        // Settings tab & Pricing
        tabSettings: "設定",
        settingsTitle: "方案與定價設定",
        settingsSubtitle: "管理課堂費率、定價方案與排課規則。",
        settingsGroupClassTitle: "團體課設定",
        settingsPtTitle: "1-on-1 PT 私人課定價方案",
        setGroupTrial: "首次體驗價 (NT)",
        setGroupNormal: "一般單堂價 (NT)",
        setGroupMin: "最少開課人數",
        setPt1: "1 堂私人課單價 (NT)",
        setPt10: "10 堂私人課 package 單價 (NT)",
        setPt20: "20 堂私人課 package 單價 (NT)",
        btnSaveSettings: "儲存設定",
        settingsUpdatedSuccess: "費率設定已成功更新！",

        // Calendar & Legend
        studentCalendarTitle: "每月課程行事曆",
        trainerCalendarTitle: "每月授課行事曆",
        legendAvailable: "可預約課程",
        legendBooked: "已預約課程",
        legendSelected: "選取日期",
        legendTeaching: "授課日",
        legendTrainerSelected: "選取日期",
        cancellation24hError: "必須在開課 1 天（24 小時）前取消預約！"
    }
};

// ==========================================
// 2. DEFAULT SEED DATA STRUCTURES
// ==========================================
const defaultUsers = [
    { User_ID: "U001", Name: "Phatcharin Admin", Role: "Admin", Email: "phatcharin@example.com", Phone: "081-000-0000", Password: "123" },
    { User_ID: "U002", Name: "Somchai Trainer", Role: "Trainer", Email: "somchai.pt@example.com", Phone: "082-000-0000", Password: "123" },
    { User_ID: "U003", Name: "Kanya Student", Role: "Student", Email: "kanya@example.com", Phone: "083-000-0000", Password: "123" },
    { User_ID: "U004", Name: "Anan Student", Role: "Student", Email: "anan@example.com", Phone: "084-000-0000", Password: "123" }
];

const defaultSessions = [
    { Session_ID: "S001", Trainer_ID: "U002", Class_Type: "1 on 1", Max_Capacity: 1, Date: "2026-07-09", Start_Time: "10:00", End_Time: "11:00", Status: "Available" },
    { Session_ID: "S002", Trainer_ID: "U002", Class_Type: "Group Class", Max_Capacity: 3, Date: "2026-07-10", Start_Time: "15:00", End_Time: "16:00", Status: "Available" },
    { Session_ID: "S003", Trainer_ID: "U002", Class_Type: "1 on 1", Max_Capacity: 1, Date: "2026-07-11", Start_Time: "09:00", End_Time: "10:00", Status: "Full" },
    { Session_ID: "S004", Trainer_ID: "U002", Class_Type: "Group Class", Max_Capacity: 3, Date: "2026-07-12", Start_Time: "11:00", End_Time: "12:00", Status: "Available" }
];

const defaultBookings = [
    { Booking_ID: "B001", Session_ID: "S003", Student_ID: "U003", Booking_Date: "2026-07-08 09:00:00", Status: "Confirmed" },
    { Booking_ID: "B002", Session_ID: "S002", Student_ID: "U004", Booking_Date: "2026-07-08 09:15:00", Status: "Confirmed" }
];

const defaultPackages = [
    { Package_ID: "P001", Student_ID: "U003", Total_Slots: 10, Remaining_Slots: 7, Group_Total_Slots: 5, Group_Remaining_Slots: 3 },
    { Package_ID: "P002", Student_ID: "U004", Total_Slots: 5, Remaining_Slots: 4, Group_Total_Slots: 2, Group_Remaining_Slots: 1 }
];

const defaultPurchaseRequests = [
    { Request_ID: "R001", Student_ID: "U003", Type: "pt", Slots: 10, Price: 14500, Request_Date: "2026-07-08 12:00:00", Status: "Pending" },
    { Request_ID: "R002", Student_ID: "U004", Type: "group", Slots: 5, Price: 2700, Request_Date: "2026-07-08 12:15:00", Status: "Pending" }
];

// ==========================================
// 3. APPLICATION STATE MANAGMENT
// ==========================================
let state = {
    language: "en",
    role: "student",
    currentUser: null, // Logged in user object
    currentStudentId: "", // Sets dynamically when logged in as student
    currentTrainerId: "U002", // Default active trainer when in Trainer view
    activeAdminTab: "students",
    filterStudentSessions: "all",
    calendarDate: new Date(), // Selected month in calendar
    selectedDateStr: "", // Filter sessions list by specific date (e.g. "2026-07-10")
    editingSessionId: null, // Stores the ID of the session currently being edited
    editingUserId: null // Stores the ID of the user account currently being edited
};

// ==========================================
// 4. DATABASE SERVICE (localStorage layer)
// ==========================================
const defaultClassTypes = [
    { id: "CT001", name: "1 on 1", defaultCapacity: 1, isSystem: true },
    { id: "CT002", name: "Group Class", defaultCapacity: 3, isSystem: true }
];

const defaultSettings = {
    Group_Trial_Price: 300,
    Group_Normal_Price: 600,
    Group_Min_Participants: 2,
    PT_Price_1: 1800,
    PT_Price_10: 1450,
    PT_Price_20: 1350
};

let isCloudLoading = false;

const db = {
    get: (key) => JSON.parse(localStorage.getItem(`LJD_pt_${key}`)),
    set: (key, data) => {
        localStorage.setItem(`LJD_pt_${key}`, JSON.stringify(data));
        if (!isCloudLoading && ["users", "sessions", "bookings", "packages"].includes(key)) {
            if (typeof saveData === "function") {
                saveData();
            }
        }
    },

    init: (force = false) => {
        const needsInit = force || !localStorage.getItem("LJD_pt_users");
        if (needsInit) {
            const temp = isCloudLoading;
            isCloudLoading = true;
            db.set("users", defaultUsers);
            db.set("sessions", defaultSessions);
            db.set("bookings", defaultBookings);
            db.set("packages", defaultPackages);
            db.set("settings", defaultSettings);
            db.set("purchase_requests", defaultPurchaseRequests);
            db.set("class_types", defaultClassTypes);
            isCloudLoading = temp;

            if (force && typeof saveData === "function") {
                saveData();
            }
        }
    },

    classTypes: {
        list: () => {
            const val = db.get("class_types");
            return Array.isArray(val) ? val : defaultClassTypes;
        },
        save: (list) => db.set("class_types", list),
        get: (id) => db.classTypes.list().find(ct => ct.id === id),
        add: (name, defaultCapacity) => {
            const list = db.classTypes.list();
            const id = generateId("CT", list, "id");
            list.push({ id, name, defaultCapacity: parseInt(defaultCapacity) || 5, isSystem: false });
            db.classTypes.save(list);
            return id;
        },
        delete: (id) => {
            const list = db.classTypes.list();
            const index = list.findIndex(ct => ct.id === id);
            if (index !== -1 && !list[index].isSystem) {
                list.splice(index, 1);
                db.classTypes.save(list);
                return true;
            }
            return false;
        }
    },

    users: {
        list: () => {
            const val = db.get("users");
            return Array.isArray(val) && val.length > 0 ? val : defaultUsers;
        },
        save: (list) => db.set("users", list),
        get: (id) => db.users.list().find(u => u.User_ID === id)
    },
    sessions: {
        list: () => {
            const val = db.get("sessions");
            return Array.isArray(val) ? val : defaultSessions;
        },
        save: (list) => db.set("sessions", list),
        get: (id) => db.sessions.list().find(s => s.Session_ID === id)
    },
    bookings: {
        list: () => {
            const val = db.get("bookings");
            return Array.isArray(val) ? val : defaultBookings;
        },
        save: (list) => db.set("bookings", list),
        get: (id) => db.bookings.list().find(b => b.Booking_ID === id),
        filterBySession: (sessionId) => db.bookings.list().filter(b => b.Session_ID === sessionId && b.Status === "Confirmed"),
        filterByStudent: (studentId) => db.bookings.list().filter(b => b.Student_ID === studentId)
    },
    packages: {
        list: () => {
            const val = db.get("packages");
            return Array.isArray(val) ? val : defaultPackages;
        },
        save: (list) => db.set("packages", list),
        getByStudent: (studentId) => db.packages.list().find(p => p.Student_ID === studentId)
    },
    purchaseRequests: {
        list: () => {
            const val = db.get("purchase_requests");
            return Array.isArray(val) ? val : [];
        },
        save: (list) => db.set("purchase_requests", list),
        get: (id) => db.purchaseRequests.list().find(r => r.Request_ID === id)
    },
    settings: {
        get: () => db.get("settings") || defaultSettings,
        save: (data) => db.set("settings", data)
    }
};

// Initialize DB
db.init();

// Restore Session if it exists
(function restoreSession() {
    const savedUser = localStorage.getItem("LJD_pt_logged_in_user");
    if (savedUser) {
        try {
            state.currentUser = JSON.parse(savedUser);
            state.role = state.currentUser.Role.toLowerCase();
            if (state.role === "student") {
                state.currentStudentId = state.currentUser.User_ID;
            } else if (state.role === "trainer") {
                state.currentTrainerId = state.currentUser.User_ID;
            }
        } catch (e) {
            console.error("Session restore failed", e);
            localStorage.removeItem("LJD_pt_logged_in_user");
        }
    }
})();

// ==========================================
// 5. HELPER FUNCTIONS & UI UTILITIES
// ==========================================
function getT(key) {
    return translations[state.language][key] || key;
}

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = "fa-info-circle";
    if (type === "success") icon = "fa-check-circle";
    if (type === "error") icon = "fa-exclamation-circle";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Auto-remove toast
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px) scale(0.95)";
        setTimeout(() => toast.remove(), 200);
    }, 3000);
}

function generateId(prefix, list, idKey) {
    if (list.length === 0) return `${prefix}001`;
    const ids = list.map(item => parseInt(item[idKey].substring(1)));
    const max = Math.max(...ids);
    return `${prefix}${String(max + 1).padStart(3, '0')}`;
}

// Format date nicely: YYYY-MM-DD to custom display based on language
function formatDateDisplay(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return state.language === 'zh-tw'
        ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 (${d.toLocaleDateString('zh-tw', { weekday: 'short' })})`
        : d.toLocaleDateString('en-US', options);
}

// ==========================================
// 6. LANGUAGE RENDERING ENGINE
// ==========================================
function checkAuthUI() {
    const authScreen = document.getElementById("auth-screen");
    const mainAppContainer = document.getElementById("main-app-container");
    const userStatusBox = document.getElementById("user-status-box");
    const adminRoleSwitcher = document.getElementById("admin-role-switcher");

    if (state.currentUser) {
        authScreen.style.display = "none";
        mainAppContainer.style.display = "block";
        userStatusBox.style.display = "flex";

        let roleLabelText = getT(state.currentUser.Role.toLowerCase());
        document.getElementById("user-display-name").textContent = `${state.currentUser.Name} (${roleLabelText})`;

        if (state.currentUser.Role === "Admin") {
            adminRoleSwitcher.style.display = "flex";
        } else {
            adminRoleSwitcher.style.display = "none";
        }
    } else {
        authScreen.style.display = "flex";
        mainAppContainer.style.display = "none";
        userStatusBox.style.display = "none";
        adminRoleSwitcher.style.display = "none";
    }
}

function applyLanguage() {
    // Run authentication UI check first
    checkAuthUI();

    // Top layout
    document.getElementById("text-role-label").textContent = getT("viewAs");

    // Role tabs
    document.getElementById("btn-role-student").innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${getT("student")}`;
    document.getElementById("btn-role-trainer").innerHTML = `<i class="fa-solid fa-dumbbell"></i> ${getT("trainer")}`;
    document.getElementById("btn-role-admin").innerHTML = `<i class="fa-solid fa-user-gear"></i> ${getT("admin")}`;

    // Login Overlay Elements
    document.getElementById("lbl-login-identifier").textContent = getT("loginIdentifier");
    document.getElementById("lbl-login-password").textContent = getT("lblPassword");
    document.getElementById("login-password").placeholder = getT("lblPasswordPlaceholder");
    document.getElementById("lbl-btn-login").textContent = getT("btnSignIn");
    document.getElementById("lbl-reg-name").textContent = getT("regName");
    document.getElementById("lbl-reg-email").textContent = getT("regEmail");
    document.getElementById("lbl-reg-phone").textContent = getT("regPhone");
    document.getElementById("lbl-reg-password").textContent = getT("lblPassword");
    document.getElementById("register-password").placeholder = getT("lblPasswordPlaceholder");
    document.getElementById("lbl-btn-register").textContent = getT("btnCreateAccount");

    // Student labels
    const ptCreditsTitleEl = document.getElementById("lbl-student-pt-credits-title");
    if (ptCreditsTitleEl) ptCreditsTitleEl.textContent = getT("ptCreditsTitle");
    const groupCreditsTitleEl = document.getElementById("lbl-student-group-credits-title");
    if (groupCreditsTitleEl) groupCreditsTitleEl.textContent = getT("groupCreditsTitle");

    document.getElementById("lbl-next-session-title").textContent = getT("nextSession");
    document.getElementById("lbl-available-sessions-title").textContent = getT("bookSessionTitle");
    const btnFilterAll = document.getElementById("btn-filter-all");
    if (btnFilterAll) btnFilterAll.textContent = getT("all");
    const btnFilter1on1 = document.getElementById("btn-filter-1on1");
    if (btnFilter1on1) btnFilter1on1.textContent = getT("oneOnOne");
    const btnFilterGroup = document.getElementById("btn-filter-group");
    if (btnFilterGroup) btnFilterGroup.textContent = getT("groupClass");
    document.getElementById("lbl-my-bookings-title").textContent = getT("myBookings");

    // Student Calendar Legend
    document.getElementById("lbl-student-calendar-title").textContent = getT("studentCalendarTitle");
    document.getElementById("lbl-legend-available").textContent = getT("legendAvailable");
    document.getElementById("lbl-legend-booked").textContent = getT("legendBooked");
    document.getElementById("lbl-legend-selected").textContent = getT("legendSelected");

    // Trainer labels
    document.getElementById("lbl-trainer-title").textContent = getT("trainerTitle");
    document.getElementById("lbl-trainer-subtitle").textContent = getT("trainerSubtitle");
    document.getElementById("lbl-btn-create-session").textContent = getT("createSessionBtn");
    document.getElementById("lbl-my-schedule-title").textContent = getT("myScheduleTitle");
    document.getElementById("lbl-schedule-summary-title").textContent = getT("summary");
    document.getElementById("lbl-stat-total-sessions").textContent = getT("totalSessions");
    document.getElementById("lbl-stat-1on1-sessions").textContent = getT("oneOnOneClasses");
    document.getElementById("lbl-stat-group-sessions").textContent = getT("groupClasses");

    // Trainer Calendar Legend
    document.getElementById("lbl-trainer-calendar-title").textContent = getT("trainerCalendarTitle");
    document.getElementById("lbl-legend-teaching").textContent = getT("legendTeaching");
    document.getElementById("lbl-legend-trainer-selected").textContent = getT("legendTrainerSelected");

    // Admin labels
    document.getElementById("lbl-admin-title").textContent = getT("adminTitle");
    document.getElementById("lbl-tab-students").textContent = getT("tabStudents");
    document.getElementById("lbl-tab-sessions").textContent = getT("tabSessions");
    document.getElementById("lbl-tab-export").textContent = getT("tabExport");
    document.getElementById("lbl-tab-requests").textContent = getT("lblTabRequests");
    document.getElementById("lbl-tab-settings").textContent = getT("tabSettings");

    document.getElementById("lbl-manage-students-title").textContent = getT("manageStudents");
    document.getElementById("lbl-btn-add-student").textContent = getT("addStudentBtn");

    const btnAdminAddSession = document.getElementById("lbl-btn-admin-add-session");
    if (btnAdminAddSession) {
        btnAdminAddSession.textContent = getT("createSessionBtn");
    }

    document.getElementById("lbl-manage-requests-title").textContent = getT("lblManageRequestsTitle");
    document.getElementById("th-req-student").textContent = getT("thReqStudent");
    document.getElementById("th-req-type").textContent = getT("thReqType");
    document.getElementById("th-req-slots").textContent = getT("thReqSlots");
    document.getElementById("th-req-price").textContent = getT("thReqPrice");
    document.getElementById("th-req-date").textContent = getT("thReqDate");
    document.getElementById("th-req-status").textContent = getT("thReqStatus");
    document.getElementById("th-req-actions").textContent = getT("thReqActions");

    document.getElementById("th-student-name").textContent = getT("thName");
    document.getElementById("th-student-email").textContent = getT("thEmail");
    document.getElementById("th-student-phone").textContent = getT("thPhone");
    document.getElementById("th-student-role").textContent = getT("thRole");
    document.getElementById("th-student-credits").textContent = getT("thCredits");
    document.getElementById("th-student-actions").textContent = getT("thActions");

    document.getElementById("lbl-manage-sessions-title").textContent = getT("manageSessionsBookings");
    document.getElementById("th-session-trainer").textContent = getT("thTrainer");
    document.getElementById("th-session-type").textContent = getT("thType");
    document.getElementById("th-session-capacity").textContent = getT("thCapacity");
    document.getElementById("th-session-datetime").textContent = getT("thDateTime");
    document.getElementById("th-session-status").textContent = getT("thStatus");
    document.getElementById("th-session-bookings").textContent = getT("thBookings");
    document.getElementById("th-session-actions").textContent = getT("thActions");

    // Export labels
    document.getElementById("lbl-export-users-title").textContent = getT("exportUsersTitle");
    document.getElementById("lbl-export-users-desc").textContent = getT("exportUsersDesc");
    document.getElementById("btn-export-users").innerHTML = `<i class="fa-solid fa-file-csv"></i> ${getT("btnExportCsv")}`;

    document.getElementById("lbl-export-sessions-title").textContent = getT("exportSessionsTitle");
    document.getElementById("lbl-export-sessions-desc").textContent = getT("exportSessionsDesc");
    document.getElementById("btn-export-sessions").innerHTML = `<i class="fa-solid fa-file-csv"></i> ${getT("btnExportCsv")}`;

    document.getElementById("lbl-export-bookings-title").textContent = getT("exportBookingsTitle");
    document.getElementById("lbl-export-bookings-desc").textContent = getT("exportBookingsDesc");
    document.getElementById("btn-export-bookings").innerHTML = `<i class="fa-solid fa-file-csv"></i> ${getT("btnExportCsv")}`;

    document.getElementById("lbl-export-packages-title").textContent = getT("exportPackagesTitle");
    document.getElementById("lbl-export-packages-desc").textContent = getT("exportPackagesDesc");
    document.getElementById("btn-export-packages").innerHTML = `<i class="fa-solid fa-file-csv"></i> ${getT("btnExportCsv")}`;

    document.getElementById("lbl-db-mgmt-title").textContent = getT("dbMgmtTitle");
    document.getElementById("lbl-btn-db-reset").innerHTML = `<i class="fa-solid fa-rotate-left"></i> ${getT("btnDbReset")}`;

    // Admin Settings Page translations
    document.getElementById("lbl-settings-title").textContent = getT("settingsTitle");
    document.getElementById("lbl-settings-subtitle").textContent = getT("settingsSubtitle");
    document.getElementById("lbl-settings-group-class-title").innerHTML = `<i class="fa-solid fa-users"></i> ${getT("settingsGroupClassTitle")}`;
    document.getElementById("lbl-set-group-trial").textContent = getT("setGroupTrial");
    document.getElementById("lbl-set-group-normal").textContent = getT("setGroupNormal");
    document.getElementById("lbl-set-group-min").textContent = getT("setGroupMin");
    document.getElementById("lbl-settings-pt-title").innerHTML = `<i class="fa-solid fa-dumbbell"></i> ${getT("settingsPtTitle")}`;
    document.getElementById("lbl-set-pt-1").textContent = getT("setPt1");
    document.getElementById("lbl-set-pt-10").textContent = getT("setPt10");
    document.getElementById("lbl-set-pt-20").textContent = getT("setPt20");
    document.getElementById("lbl-btn-save-settings").textContent = getT("btnSaveSettings");

    // Modals & Form fields translation
    if (state.editingSessionId) {
        document.getElementById("lbl-create-session-modal-title").textContent = getT("editSessionModalTitle");
    } else {
        document.getElementById("lbl-create-session-modal-title").textContent = getT("createSessionModalTitle");
    }
    document.getElementById("lbl-edit-session-warning-text").textContent = getT("editSessionLockedWarning");
    document.getElementById("lbl-form-trainer").textContent = getT("formTrainer");
    document.getElementById("lbl-form-class-type").textContent = getT("formClassType");
    document.getElementById("lbl-form-capacity").textContent = getT("formCapacity");
    document.getElementById("lbl-form-date").textContent = getT("formDate");
    document.getElementById("lbl-form-start").textContent = getT("formStartTime");
    document.getElementById("lbl-form-end").textContent = getT("formEndTime");
    document.getElementById("lbl-btn-submit-session").textContent = getT("formSaveSession");
    document.getElementById("btn-cancel-create-session").textContent = getT("formCancel");

    document.getElementById("lbl-participants-title").textContent = getT("participantsListTitle");
    document.getElementById("btn-close-participants-footer").textContent = getT("formCancel").replace("取消", "關閉").replace("Cancel", "Close");

    if (state.editingUserId) {
        document.getElementById("lbl-user-modal-title").textContent = getT("editUserModalTitle");
    } else {
        document.getElementById("lbl-user-modal-title").textContent = getT("addUserModalTitle");
    }
    document.getElementById("lbl-form-user-name").textContent = getT("formFullName");
    document.getElementById("lbl-form-user-email").textContent = getT("formEmail");
    document.getElementById("lbl-form-user-phone").textContent = getT("formPhone");
    document.getElementById("lbl-form-user-role").textContent = getT("formRole");
    document.getElementById("lbl-form-package-header").textContent = getT("formPackageHeader");
    document.getElementById("lbl-form-total-slots").textContent = getT("formTotalSlots");
    document.getElementById("lbl-form-remaining-slots").textContent = getT("formRemainingSlots");
    document.getElementById("lbl-btn-submit-user").textContent = getT("btnSaveMember");
    document.getElementById("btn-cancel-user").textContent = getT("formCancel");

    document.getElementById("lbl-pkg-modal-title").textContent = getT("adjustCreditsModalTitle");
    document.getElementById("lbl-pkg-student-name-display").textContent = getT("studentNameDisplay");
    document.getElementById("lbl-pkg-total").textContent = getT("formTotalSlots");
    document.getElementById("lbl-pkg-remaining").textContent = getT("formRemainingSlots");
    document.getElementById("lbl-btn-submit-package-edit").textContent = getT("btnSaveCredits");
    document.getElementById("btn-cancel-package-edit").textContent = getT("formCancel");

    // Re-render views to update dynamic components text
    renderCurrentView();
}

// ==========================================
// 7. DASHBOARD RENDERERS
// ==========================================

function renderCurrentView() {
    if (state.role === "student") {
        renderStudentView();
    } else if (state.role === "trainer") {
        renderTrainerView();
    } else if (state.role === "admin") {
        renderAdminView();
    }
}

// RENDER: STUDENT VIEW
function renderStudentView() {
    const student = db.users.get(state.currentStudentId);
    if (!student) return;

    // Render Student monthly calendar
    renderCalendar('student', state.calendarDate);

    // Load student package
    const pkg = db.packages.getByStudent(state.currentStudentId);

    // PT credits
    const remSlots = pkg ? (pkg.Remaining_Slots !== undefined ? pkg.Remaining_Slots : 0) : 0;
    const totSlots = pkg ? (pkg.Total_Slots !== undefined ? pkg.Total_Slots : 0) : 0;
    document.getElementById("student-credits-value").textContent = remSlots;
    document.getElementById("student-total-slots").textContent = `/ ${totSlots}`;
    document.getElementById("student-package-details").textContent = pkg
        ? `${getT("packageIdLbl")}: ${pkg.Package_ID}`
        : `${getT("packageIdLbl")}: None`;

    // Group Class credits
    const groupRemSlots = pkg ? (pkg.Group_Remaining_Slots !== undefined ? pkg.Group_Remaining_Slots : 0) : 0;
    const groupTotSlots = pkg ? (pkg.Group_Total_Slots !== undefined ? pkg.Group_Total_Slots : 0) : 0;
    document.getElementById("student-group-credits-value").textContent = groupRemSlots;
    document.getElementById("student-group-total-slots").textContent = `/ ${groupTotSlots}`;
    document.getElementById("student-group-package-details").textContent = pkg
        ? `${getT("packageIdLbl")}: ${pkg.Package_ID}`
        : `${getT("packageIdLbl")}: None`;

    // Localize header text and button labels
    document.getElementById("lbl-student-pt-credits-title").textContent = getT("ptCreditsTitle");
    document.getElementById("lbl-student-group-credits-title").textContent = getT("groupCreditsTitle");
    document.getElementById("btn-buy-pt-pkg").innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${getT("buyPtPackageBtn")}`;
    document.getElementById("btn-buy-group-pkg").innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${getT("buyGroupPackageBtn")}`;

    // Bind buy button actions
    document.getElementById("btn-buy-pt-pkg").onclick = () => window.openBuyPackageModal("pt");
    document.getElementById("btn-buy-group-pkg").onclick = () => window.openBuyPackageModal("group");

    // List upcoming sessions
    const bookings = db.bookings.list().filter(b => b.Student_ID === state.currentStudentId && b.Status === "Confirmed");
    const sessions = db.sessions.list();

    const bookedSessions = bookings.map(b => {
        const s = sessions.find(sess => sess.Session_ID === b.Session_ID);
        return { booking: b, session: s };
    }).filter(item => item.session !== undefined)
        .sort((a, b) => new Date(`${a.session.Date} ${a.session.Start_Time}`) - new Date(`${b.session.Date} ${b.session.Start_Time}`));

    // Set "Next Session" card
    const nextSessionBox = document.getElementById("next-session-container");
    if (bookedSessions.length > 0) {
        const next = bookedSessions[0];
        const trainer = db.users.get(next.session.Trainer_ID);
        const trainerName = trainer ? trainer.Name : next.session.Trainer_ID;

        nextSessionBox.innerHTML = `
            <div class="upcoming-summary-box">
                <div class="upcoming-left">
                    <span class="upcoming-trainer">${trainerName} (${next.session.Class_Type === "1 on 1" ? getT("oneOnOne") : getT("groupClass")})</span>
                    <span class="upcoming-time">${next.session.Start_Time} - ${next.session.End_Time}</span>
                    <span class="upcoming-date-badge">
                        <i class="fa-regular fa-calendar"></i>
                        <span>${formatDateDisplay(next.session.Date)}</span>
                    </span>
                </div>
                <div class="upcoming-right">
                    <button class="btn btn-danger btn-sm" onclick="cancelBookingAction('${next.booking.Booking_ID}')">
                        <i class="fa-solid fa-calendar-xmark"></i> ${getT("cancelBtn")}
                    </button>
                </div>
            </div>
        `;
    } else {
        nextSessionBox.innerHTML = `
            <div class="no-session-msg" id="msg-no-upcoming">
                <i class="fa-regular fa-calendar-check"></i>
                <p id="lbl-no-upcoming-desc">${getT("noUpcoming")}</p>
            </div>
        `;
    }

    // Sidebar: Complete booking list
    const sidebarBookingsList = document.getElementById("student-bookings-list");
    if (bookedSessions.length > 0) {
        sidebarBookingsList.innerHTML = bookedSessions.map(item => {
            const tr = db.users.get(item.session.Trainer_ID);
            const trName = tr ? tr.Name : item.session.Trainer_ID;
            const typeClass = item.session.Class_Type === "1 on 1" ? "badge-1on1" : "badge-group";
            const typeLabel = item.session.Class_Type === "1 on 1" ? getT("oneOnOne") : getT("groupClass");

            let groupStatusBadgeHtml = "";
            if (item.session.Class_Type === "Group Class") {
                const settings = db.settings.get();
                const minParticipants = settings.Group_Min_Participants || 2;
                const activeBookings = db.bookings.list().filter(b => b.Session_ID === item.session.Session_ID && b.Status === "Confirmed");
                const count = activeBookings.length;
                if (count < minParticipants) {
                    groupStatusBadgeHtml = `<span class="status-badge status-badge-pending" style="display:inline-block; font-size:0.7rem; padding: 0.1rem 0.4rem; border-radius:3px; margin-left:5px;">${state.language === "zh-tw" ? "待成班" : "Pending"}</span>`;
                } else {
                    groupStatusBadgeHtml = `<span class="status-badge status-badge-confirmed" style="display:inline-block; font-size:0.7rem; padding: 0.1rem 0.4rem; border-radius:3px; margin-left:5px;">${state.language === "zh-tw" ? "已成班" : "Confirmed"}</span>`;
                }
            }

            return `
                <article class="booking-item-card">
                    <div class="booking-item-header">
                        <span class="booking-trainer-name">${trName}</span>
                        <div style="display: flex; align-items: center;">
                            <span class="booking-type-indicator ${typeClass}">${typeLabel}</span>
                            ${groupStatusBadgeHtml}
                        </div>
                    </div>
                    <div class="booking-time-display">${item.session.Start_Time} - ${item.session.End_Time}</div>
                    <div class="booking-date-display">${formatDateDisplay(item.session.Date)}</div>
                    <button class="btn btn-danger btn-sm" style="margin-top: 0.5rem" onclick="cancelBookingAction('${item.booking.Booking_ID}')">
                        <i class="fa-solid fa-calendar-xmark"></i> ${getT("cancelBtn")}
                    </button>
                </article>
            `;
        }).join("");
    } else {
        sidebarBookingsList.innerHTML = `
            <div class="no-participants-msg" style="padding: 1.5rem 0">
                <p>${getT("noUpcoming")}</p>
            </div>
        `;
    }

    // Available Sessions Board
    const headerTitle = document.getElementById("lbl-available-sessions-title");
    if (state.selectedDateStr) {
        const clearBtnHtml = `<button class="btn btn-secondary btn-sm" style="display:inline-block; margin-left: 10px; padding: 0.2rem 0.5rem; width: auto;" onclick="clearDateFilter()"><i class="fa-solid fa-xmark"></i> ${state.language === "zh-tw" ? "清除篩選" : "Clear"}</button>`;
        headerTitle.innerHTML = `${getT("bookSessionTitle")} <span style="font-size:0.9rem; font-weight:normal; color:var(--primary-color);">(${formatDateDisplay(state.selectedDateStr)})</span> ${clearBtnHtml}`;
    } else {
        headerTitle.textContent = getT("bookSessionTitle");
    }

    // Render dynamic filter bar
    const filterBar = document.getElementById("student-filter-bar");
    if (filterBar) {
        const classTypes = db.classTypes.list();
        let buttonsHtml = `<button class="filter-btn ${state.filterStudentSessions === 'all' ? 'active' : ''}" data-filter="all" style="width: auto; padding: 0.3rem 1rem; font-size: 0.85rem;">${state.language === 'zh-tw' ? '全部' : 'All'}</button>`;
        classTypes.forEach(ct => {
            let localizedName = ct.name;
            if (state.language === 'zh-tw') {
                if (ct.name === '1 on 1') localizedName = '一對一';
                else if (ct.name === 'Group Class') localizedName = '團體課';
            }
            buttonsHtml += `<button class="filter-btn ${state.filterStudentSessions === ct.name ? 'active' : ''}" data-filter="${ct.name}" style="width: auto; padding: 0.3rem 1rem; font-size: 0.85rem; margin-left: 0.4rem;">${localizedName}</button>`;
        });
        filterBar.innerHTML = buttonsHtml;

        filterBar.querySelectorAll(".filter-btn").forEach(btn => {
            btn.onclick = (e) => {
                state.filterStudentSessions = e.currentTarget.getAttribute("data-filter");
                renderStudentView();
            };
        });
    }

    const availSessionsList = document.getElementById("student-available-sessions-list");
    let availableSessions = sessions.filter(s => {
        if (s.Status === "Finished") return false;
        const alreadyBooked = bookings.some(b => b.Session_ID === s.Session_ID);
        return alreadyBooked || s.Status === "Available";
    });

    // Filter by calendar date
    if (state.selectedDateStr) {
        availableSessions = availableSessions.filter(s => s.Date === state.selectedDateStr);
    }

    // Filter type
    if (state.filterStudentSessions !== "all") {
        availableSessions = availableSessions.filter(s => s.Class_Type === state.filterStudentSessions);
    }

    // Sort chronologically
    availableSessions.sort((a, b) => new Date(`${a.Date} ${a.Start_Time}`) - new Date(`${b.Date} ${b.Start_Time}`));

    if (availableSessions.length > 0) {
        availSessionsList.innerHTML = availableSessions.map(s => {
            const trainer = db.users.get(s.Trainer_ID);
            const trName = trainer ? trainer.Name : s.Trainer_ID;

            const confirmedBookings = db.bookings.filterBySession(s.Session_ID);
            const currentCount = confirmedBookings.length;
            const pct = Math.min(100, Math.round((currentCount / s.Max_Capacity) * 100));

            // Check if already booked
            const alreadyBooked = bookings.some(b => b.Session_ID === s.Session_ID);
            const statusLabel = alreadyBooked
                ? (state.language === "zh-tw" ? "已預約" : "Booked")
                : (s.Status === "Full" ? getT("statusFull") : getT("statusAvailable"));

            const statusClass = alreadyBooked
                ? "status-full"
                : (s.Status === "Full" ? "status-full" : "status-available");

            const isBtnDisabled = alreadyBooked || s.Status === "Full" || (s.Class_Type === "1 on 1" && remSlots <= 0);
            const typeLabel = s.Class_Type === "1 on 1" ? getT("oneOnOne") : getT("groupClass");
            const typeBadgeClass = s.Class_Type === "1 on 1" ? "badge-1on1" : "badge-group";

            // Price rules display (only show for Group Classes)
            let priceRowHtml = "";
            if (s.Class_Type === "Group Class") {
                const settings = db.settings.get();
                let priceText = "";
                const studentGroupBookingsCount = db.bookings.list().filter(b => b.Student_ID === state.currentStudentId && b.Status === "Confirmed" && db.sessions.get(b.Session_ID)?.Class_Type === "Group Class").length;
                if (studentGroupBookingsCount === 0) {
                    priceText = `${settings.Group_Trial_Price} NT (Trial) / ${settings.Group_Normal_Price} NT`;
                } else {
                    priceText = `${settings.Group_Normal_Price} NT`;
                }
                priceRowHtml = `
                    <div class="session-detail-row">
                        <span>${state.language === "zh-tw" ? "費用:" : "Price:"}</span>
                        <strong>${priceText}</strong>
                    </div>
                `;
            }

            return `
                <article class="session-card">
                    <div class="session-card-header">
                        <span class="session-type-badge ${typeBadgeClass}">${typeLabel}</span>
                        <span class="session-status-badge ${statusClass}">${statusLabel}</span>
                    </div>
                    <div class="session-card-body">
                        <div class="session-time-block">
                            <i class="fa-solid fa-clock"></i>
                            <div>
                                <span class="session-time-val">${s.Start_Time} - ${s.End_Time}</span>
                                <div class="session-date-val">${formatDateDisplay(s.Date)}</div>
                            </div>
                        </div>
                        <div class="session-detail-row">
                            <span>${getT("formTrainer")}:</span>
                            <strong>${trName}</strong>
                        </div>
                        ${priceRowHtml}
                        <div class="session-detail-row" style="flex-direction: column; gap: 0.2rem; margin-top: 0.25rem;">
                            <div style="display:flex; justify-content:space-between">
                                <span>${state.language === "zh-tw" ? "預約進度:" : "Capacity:"}</span>
                                <strong>${currentCount} / ${s.Max_Capacity}</strong>
                            </div>
                            <div class="session-capacity-bar-container">
                                <div class="session-capacity-bar" style="width: ${pct}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-card-footer">
                        <button class="btn btn-primary" onclick="bookSessionAction('${s.Session_ID}')" ${isBtnDisabled ? "disabled" : ""}>
                            <i class="fa-solid fa-calendar-plus"></i> ${alreadyBooked ? (state.language === "zh-tw" ? "已在排程中" : "Booked") : getT("bookBtn")}
                        </button>
                    </div>
                </article>
            `;
        }).join("");
    } else {
        availSessionsList.innerHTML = `
            <div class="no-participants-msg" style="grid-column: 1 / -1; background: rgba(255,255,255,0.01); border-radius:12px; border:1px dashed var(--border-color); padding: 4rem;">
                <i class="fa-solid fa-calendar-xmark" style="font-size:2.5rem; color:var(--text-muted); opacity:0.4; margin-bottom:1rem; display:block; text-align:center;"></i>
                <p style="text-align:center;">${state.language === "zh-tw" ? "沒有符合篩選條件的課程時段" : "No sessions available for this filter."}</p>
            </div>
        `;
    }
}

// RENDER: TRAINER VIEW
function renderTrainerView() {
    const trainer = db.users.get(state.currentTrainerId);
    if (!trainer) return;

    // Render Trainer monthly calendar
    renderCalendar('trainer', state.calendarDate);

    const sessions = db.sessions.list().filter(s => s.Trainer_ID === state.currentTrainerId);

    // Summaries
    const totalCount = sessions.length;
    const oneOnOneCount = sessions.filter(s => s.Class_Type === "1 on 1").length;
    const groupCount = sessions.filter(s => s.Class_Type === "Group Class").length;

    document.getElementById("trainer-stat-total").textContent = totalCount;
    document.getElementById("trainer-stat-1on1").textContent = oneOnOneCount;
    document.getElementById("trainer-stat-group").textContent = groupCount;

    // Filter by selected calendar date if active
    let filteredSessions = sessions;
    if (state.selectedDateStr) {
        filteredSessions = sessions.filter(s => s.Date === state.selectedDateStr);
    }

    const scheduleHeader = document.getElementById("lbl-my-schedule-title");
    if (state.selectedDateStr) {
        const clearBtnHtml = `<button class="btn btn-secondary btn-sm" style="display:inline-block; margin-left: 10px; padding: 0.2rem 0.5rem;" onclick="clearDateFilter()"><i class="fa-solid fa-xmark"></i> ${state.language === "zh-tw" ? "清除篩選" : "Clear Filter"}</button>`;
        scheduleHeader.innerHTML = `${getT("myScheduleTitle")} <span style="font-size:0.9rem; font-weight:normal; color:var(--primary-color);">(${formatDateDisplay(state.selectedDateStr)})</span> ${clearBtnHtml}`;
    } else {
        scheduleHeader.textContent = getT("myScheduleTitle");
    }

    filteredSessions.sort((a, b) => new Date(`${a.Date} ${a.Start_Time}`) - new Date(`${b.Date} ${b.Start_Time}`));

    // Render sessions
    const trainerScheduleList = document.getElementById("trainer-sessions-list");
    if (filteredSessions.length > 0) {
        trainerScheduleList.innerHTML = filteredSessions.map(s => {
            const confirmedBookings = db.bookings.filterBySession(s.Session_ID);
            const currentCount = confirmedBookings.length;
            const pct = Math.min(100, Math.round((currentCount / s.Max_Capacity) * 100));

            const typeLabel = s.Class_Type === "1 on 1" ? getT("oneOnOne") : getT("groupClass");
            const typeClass = s.Class_Type === "1 on 1" ? "badge-1on1" : "badge-group";

            const statusLabel = s.Status === "Full" ? getT("statusFull") : (s.Status === "Finished" ? getT("statusFinished") : getT("statusAvailable"));
            const statusClass = s.Status === "Full" ? "status-full" : (s.Status === "Finished" ? "status-finished" : "status-available");

            return `
                <article class="session-card">
                    <div class="session-card-header">
                        <span class="session-type-badge ${typeClass}">${typeLabel}</span>
                        <span class="session-status-badge ${statusClass}">${statusLabel}</span>
                    </div>
                    <div class="session-card-body">
                        <div class="session-time-block">
                            <i class="fa-solid fa-clock"></i>
                            <div>
                                <span class="session-time-val">${s.Start_Time} - ${s.End_Time}</span>
                                <div class="session-date-val">${formatDateDisplay(s.Date)}</div>
                            </div>
                        </div>
                        <div class="session-detail-row" style="flex-direction: column; gap: 0.2rem;">
                            <div style="display:flex; justify-content:space-between">
                                <span>${state.language === "zh-tw" ? "預約名單數:" : "Students Registered:"}</span>
                                <strong>${currentCount} / ${s.Max_Capacity}</strong>
                            </div>
                            <div class="session-capacity-bar-container">
                                <div class="session-capacity-bar" style="width: ${pct}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-card-footer" style="display: flex; gap: 0.5rem;">
                        <button class="btn btn-secondary" style="flex: 1;" onclick="openParticipantsModal('${s.Session_ID}')">
                            <i class="fa-solid fa-users"></i> ${getT("viewParticipants")}
                        </button>
                        ${s.Status !== "Finished" ? `
                        <button class="btn btn-primary" style="flex: 1;" onclick="openEditSessionModal('${s.Session_ID}')">
                            <i class="fa-solid fa-pen-to-square"></i> ${getT("editClassBtn")}
                        </button>
                        ` : ''}
                    </div>
                </article>
            `;
        }).join("");
    } else {
        trainerScheduleList.innerHTML = `
            <div class="no-participants-msg" style="grid-column: 1 / -1; border: 1px dashed var(--border-color); border-radius:12px; padding: 4rem; text-align:center;">
                <i class="fa-solid fa-dumbbell" style="font-size:2.5rem; color:var(--text-muted); opacity:0.4; margin-bottom:1rem; display:block;"></i>
                <p>${state.language === "zh-tw" ? "您目前沒有安排任何開課時段" : "No training sessions created yet."}</p>
            </div>
        `;
    }
}

// RENDER: ADMIN VIEW
function renderAdminView() {
    // Show correct sub-tab contents
    const tabs = ["students", "sessions", "export", "requests", "settings"];
    tabs.forEach(tab => {
        const content = document.getElementById(`admin-tab-content-${tab}`);
        const btn = document.getElementById(`tab-${tab}-btn`);
        if (state.activeAdminTab === tab) {
            content.classList.add("active");
            btn.classList.add("active");
        } else {
            content.classList.remove("active");
            btn.classList.remove("active");
        }
    });

    // Tab 1: Students & Packages
    if (state.activeAdminTab === "students") {
        const users = db.users.list();
        const packages = db.packages.list();
        const tbody = document.getElementById("admin-students-table-body");

        tbody.innerHTML = users.map(u => {
            const pkg = packages.find(p => p.Student_ID === u.User_ID);
            let creditsText = `<span class="text-muted">-</span>`;
            if (u.Role === "Student") {
                const ptRemaining = pkg ? (pkg.Remaining_Slots !== undefined ? pkg.Remaining_Slots : 0) : 0;
                const ptTotal = pkg ? (pkg.Total_Slots !== undefined ? pkg.Total_Slots : 0) : 0;
                const grRemaining = pkg ? (pkg.Group_Remaining_Slots !== undefined ? pkg.Group_Remaining_Slots : 0) : 0;
                const grTotal = pkg ? (pkg.Group_Total_Slots !== undefined ? pkg.Group_Total_Slots : 0) : 0;

                creditsText = `
                    <div style="font-size:0.85rem; line-height: 1.3;">
                        <div>PT: <strong>${ptRemaining}</strong> / ${ptTotal}</div>
                        <div style="color:#34d399;">Group: <strong>${grRemaining}</strong> / ${grTotal}</div>
                    </div>
                `;
            }

            let roleClass = "badge-role-student";
            if (u.Role === "Admin") roleClass = "badge-role-admin";
            if (u.Role === "Trainer") roleClass = "badge-role-trainer";

            let actionButtons = '';
            if (u.Role === "Student") {
                actionButtons += `
                    <button class="btn btn-secondary btn-sm" onclick="openEditPackageModal('${u.User_ID}')" title="${state.language === 'zh-tw' ? '調整堂數' : 'Adjust Credits'}">
                        <i class="fa-solid fa-calculator"></i>
                    </button>
                `;
            }
            actionButtons += `
                <button class="btn btn-secondary btn-sm" onclick="openEditUserModal('${u.User_ID}')" title="${state.language === 'zh-tw' ? '編輯帳號' : 'Edit Account'}">
                    <i class="fa-solid fa-user-pen"></i>
                </button>
            `;
            if (state.currentUser && u.User_ID !== state.currentUser.User_ID) {
                actionButtons += `
                    <button class="btn btn-danger btn-sm" onclick="deleteUserAction('${u.User_ID}')" title="${state.language === 'zh-tw' ? '刪除帳號' : 'Delete Account'}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                `;
            } else {
                actionButtons += `
                    <button class="btn btn-danger btn-sm" disabled title="${state.language === 'zh-tw' ? '無法刪除自己' : 'Cannot delete self'}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                `;
            }

            return `
                <tr>
                    <td><strong>${u.User_ID}</strong></td>
                    <td>${u.Name}</td>
                    <td>${u.Email}</td>
                    <td>${u.Phone || "-"}</td>
                    <td><span class="badge-role ${roleClass}">${u.Role}</span></td>
                    <td>${creditsText}</td>
                    <td class="cell-actions">${actionButtons}</td>
                </tr>
            `;
        }).join("");
    }

    // Tab 2: Sessions & Bookings Monitor
    if (state.activeAdminTab === "sessions") {
        const sessions = db.sessions.list();
        const users = db.users.list();
        const bookings = db.bookings.list();
        const tbody = document.getElementById("admin-sessions-table-body");

        // Sort chronologically
        sessions.sort((a, b) => new Date(`${a.Date} ${a.Start_Time}`) - new Date(`${b.Date} ${b.Start_Time}`));

        tbody.innerHTML = sessions.map(s => {
            const trainer = users.find(u => u.User_ID === s.Trainer_ID);
            const trName = trainer ? trainer.Name : s.Trainer_ID;

            const activeBookings = bookings.filter(b => b.Session_ID === s.Session_ID && b.Status === "Confirmed");
            const bookedNames = activeBookings.map(b => {
                const stud = users.find(u => u.User_ID === b.Student_ID);
                return stud ? stud.Name : b.Student_ID;
            }).join(", ");

            const bookingNamesDisplay = bookedNames || `<span class="text-muted" style="font-style:italic">${state.language === 'zh-tw' ? '無學員預約' : 'No bookings'}</span>`;

            const typeLabel = s.Class_Type === "1 on 1" ? getT("oneOnOne") : getT("groupClass");
            const typeClass = s.Class_Type === "1 on 1" ? "badge-1on1" : "badge-group";

            const statusClass = s.Status === "Full" ? "status-full" : (s.Status === "Finished" ? "status-finished" : "status-available");
            const statusLabel = s.Status === "Full" ? getT("statusFull") : (s.Status === "Finished" ? getT("statusFinished") : getT("statusAvailable"));

            let groupStatusText = "";
            if (s.Class_Type === "Group Class") {
                const settings = db.settings.get();
                const minParticipants = settings.Group_Min_Participants || 2;
                if (activeBookings.length < minParticipants) {
                    groupStatusText = ` <span class="status-badge status-badge-pending" style="font-size: 0.75rem; padding: 0.1rem 0.3rem; border-radius: 3px; margin-left: 5px;">${state.language === "zh-tw" ? "待成班" : "Pending"}</span>`;
                } else {
                    groupStatusText = ` <span class="status-badge status-badge-confirmed" style="font-size: 0.75rem; padding: 0.1rem 0.3rem; border-radius: 3px; margin-left: 5px;">${state.language === "zh-tw" ? "已成班" : "Confirmed"}</span>`;
                }
            }

            return `
                <tr>
                    <td><strong>${s.Session_ID}</strong></td>
                    <td>${trName}</td>
                    <td><span class="session-type-badge ${typeClass}">${typeLabel}</span></td>
                    <td>${activeBookings.length} / ${s.Max_Capacity}</td>
                    <td>
                        <div><strong>${s.Start_Time} - ${s.End_Time}</strong></div>
                        <div class="session-date-val">${formatDateDisplay(s.Date)}</div>
                    </td>
                    <td><span class="session-status-badge ${statusClass}">${statusLabel}</span>${groupStatusText}</td>
                    <td style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${bookedNames}">${bookingNamesDisplay}</td>
                    <td class="cell-actions">
                        <button class="btn btn-secondary btn-sm" onclick="openParticipantsModal('${s.Session_ID}')" title="${state.language === 'zh-tw' ? '檢視學員' : 'View Participants'}">
                            <i class="fa-solid fa-users"></i>
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="openEditSessionModal('${s.Session_ID}')" title="${state.language === 'zh-tw' ? '編輯課程' : 'Edit Class'}">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="deleteSessionAction('${s.Session_ID}')" title="${state.language === 'zh-tw' ? '刪除課程' : 'Delete Class'}">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }

    // Tab 5: Credit Purchase Requests
    if (state.activeAdminTab === "requests") {
        const requests = db.purchaseRequests.list();
        const users = db.users.list();
        const tbody = document.getElementById("admin-requests-table-body");

        if (requests.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 3rem;">
                        <i class="fa-solid fa-circle-check" style="font-size:2rem; opacity:0.3; margin-bottom:0.5rem; display:block;"></i>
                        ${state.language === "zh-tw" ? "沒有待審核的額度請求" : "No credit requests found."}
                    </td>
                </tr>
            `;
        } else {
            // Sort requests: Pending first, then descending by Request_Date
            const sortedRequests = [...requests].sort((a, b) => {
                if (a.Status === "Pending" && b.Status !== "Pending") return -1;
                if (a.Status !== "Pending" && b.Status === "Pending") return 1;
                return new Date(b.Request_Date) - new Date(a.Request_Date);
            });

            tbody.innerHTML = sortedRequests.map(req => {
                const student = users.find(u => u.User_ID === req.Student_ID);
                const studentName = student ? student.Name : `Unknown Student (${req.Student_ID})`;
                const typeLabel = req.Type === "pt" ? "1-on-1 PT" : (state.language === "zh-tw" ? "團體課" : "Group Class");
                const typeColor = req.Type === "pt" ? "var(--primary-color)" : "#34d399";

                let statusBadge = "";
                if (req.Status === "Pending") {
                    statusBadge = `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.2rem 0.5rem; border-radius: 4px;">Pending</span>`;
                } else if (req.Status === "Approved") {
                    statusBadge = `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.2rem 0.5rem; border-radius: 4px;">Approved</span>`;
                } else {
                    statusBadge = `<span class="badge" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 0.2rem 0.5rem; border-radius: 4px;">Rejected</span>`;
                }

                let actionButtons = "";
                if (req.Status === "Pending") {
                    actionButtons = `
                        <div class="action-btn-group" style="display: flex; gap: 5px;">
                            <button class="btn btn-primary btn-sm btn-approve-request" data-id="${req.Request_ID}" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                                <i class="fa-solid fa-check"></i> ${state.language === "zh-tw" ? "核准" : "Approve"}
                            </button>
                            <button class="btn btn-danger btn-sm btn-reject-request" data-id="${req.Request_ID}" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                                <i class="fa-solid fa-xmark"></i> ${state.language === "zh-tw" ? "拒絕" : "Reject"}
                            </button>
                        </div>
                    `;
                } else {
                    actionButtons = `<span style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">-</span>`;
                }

                return `
                    <tr>
                        <td><strong>${studentName}</strong></td>
                        <td><span style="color: ${typeColor}; font-weight: 600;">${typeLabel}</span></td>
                        <td style="text-align: center;"><strong>${req.Slots}</strong></td>
                        <td style="font-family: monospace; font-weight: 600;">NT ${req.Price.toLocaleString()}</td>
                        <td style="font-size: 0.85rem; color: var(--text-muted);">${req.Request_Date}</td>
                        <td>${statusBadge}</td>
                        <td>${actionButtons}</td>
                    </tr>
                `;
            }).join("");

            // Attach action listeners
            tbody.querySelectorAll(".btn-approve-request").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = e.currentTarget.getAttribute("data-id");
                    approvePurchaseRequestAction(id);
                });
            });

            tbody.querySelectorAll(".btn-reject-request").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = e.currentTarget.getAttribute("data-id");
                    rejectPurchaseRequestAction(id);
                });
            });
        }
    }

    // Tab 4: Package & Pricing Settings
    if (state.activeAdminTab === "settings") {
        const settings = db.settings.get();
        document.getElementById("settings-group-trial").value = settings.Group_Trial_Price;
        document.getElementById("settings-group-normal").value = settings.Group_Normal_Price;
        document.getElementById("settings-group-min-users").value = settings.Group_Min_Participants;
        document.getElementById("settings-pt-1").value = settings.PT_Price_1;
        document.getElementById("settings-pt-10").value = settings.PT_Price_10;
        document.getElementById("settings-pt-20").value = settings.PT_Price_20;
        renderAdminClassTypes();
    }
}

function renderAdminClassTypes() {
    const classTypes = db.classTypes.list();
    const tbody = document.getElementById("admin-class-types-table-body");
    if (!tbody) return;

    tbody.innerHTML = classTypes.map(ct => {
        const deleteButton = ct.isSystem
            ? `<span style="font-size:0.8rem; color:var(--text-muted); font-style:italic;">${state.language === 'zh-tw' ? '系統鎖定' : 'System Locked'}</span>`
            : `<button class="btn btn-danger btn-sm" onclick="deleteClassTypeAction('${ct.id}')" title="${state.language === 'zh-tw' ? '刪除此類別' : 'Delete Type'}">
                  <i class="fa-solid fa-trash-can"></i>
               </button>`;

        return `
            <tr>
                <td><strong>${ct.id}</strong></td>
                <td>${ct.name}</td>
                <td>${ct.defaultCapacity}</td>
                <td>${deleteButton}</td>
            </tr>
        `;
    }).join("");
}

window.deleteClassTypeAction = function (id) {
    const confirmMsg = state.language === "zh-tw" ? "確定要刪除此課程類別嗎？" : "Are you sure you want to delete this class type?";
    if (!confirm(confirmMsg)) return;

    const success = db.classTypes.delete(id);
    if (success) {
        showToast(state.language === "zh-tw" ? "課程類別已刪除" : "Class type deleted", "info");
        renderAdminClassTypes();
        renderCurrentView(); // Re-render student dynamic filters or other lists
    }
};

// ==========================================
// 8. ACTIONS & BOOKING ENGINE
// ==========================================

// Action: Book a session (Student perspective)
window.bookSessionAction = function (sessionId) {
    const sessions = db.sessions.list();
    const session = sessions.find(s => s.Session_ID === sessionId);
    if (!session) return;

    // Check if session is available
    if (session.Status === "Full" || session.Status === "Finished") {
        showToast(getT("sessionFull"), "error");
        return;
    }

    // Check if student has remaining slots (based on Class_Type)
    const packages = db.packages.list();
    const studentPackage = packages.find(p => p.Student_ID === state.currentStudentId);
    if (session.Class_Type === "1 on 1") {
        if (!studentPackage || (studentPackage.Remaining_Slots || 0) <= 0) {
            showToast(getT("noCredits"), "error");
            return;
        }
    } else if (session.Class_Type === "Group Class") {
        if (!studentPackage || (studentPackage.Group_Remaining_Slots || 0) <= 0) {
            showToast(getT("noCredits"), "error");
            return;
        }
    }

    // Check if student already has a confirmed booking for this session
    const bookings = db.bookings.list();
    const alreadyBooked = bookings.some(b => b.Session_ID === sessionId && b.Student_ID === state.currentStudentId && b.Status === "Confirmed");
    if (alreadyBooked) {
        showToast(getT("alreadyBooked"), "error");
        return;
    }

    // Create new booking
    const newBookingId = generateId("B", bookings, "Booking_ID");
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

    const newBooking = {
        Booking_ID: newBookingId,
        Session_ID: sessionId,
        Student_ID: state.currentStudentId,
        Booking_Date: timestamp,
        Status: "Confirmed"
    };
    bookings.push(newBooking);
    db.bookings.save(bookings);

    // Deduct remaining slots based on class type
    if (studentPackage) {
        if (session.Class_Type === "1 on 1") {
            studentPackage.Remaining_Slots -= 1;
        } else if (session.Class_Type === "Group Class") {
            studentPackage.Group_Remaining_Slots -= 1;
        }
        db.packages.save(packages);
    }

    // Recalculate session capacity
    const activeBookings = bookings.filter(b => b.Session_ID === sessionId && b.Status === "Confirmed");
    if (activeBookings.length >= session.Max_Capacity) {
        session.Status = "Full";
    }
    db.sessions.save(sessions);

    showToast(getT("bookedSuccess"), "success");
    renderStudentView();
};

// Action: Cancel booking (refund credits)
window.cancelBookingAction = function (bookingId) {
    const bookings = db.bookings.list();
    const bookingIndex = bookings.findIndex(b => b.Booking_ID === bookingId);
    if (bookingIndex === -1) return;

    const booking = bookings[bookingIndex];
    if (booking.Status === "Cancelled") return;

    // Check 24-hour rule
    const sessions = db.sessions.list();
    const session = sessions.find(s => s.Session_ID === booking.Session_ID);
    if (session) {
        const now = new Date();
        const classStart = new Date(`${session.Date} ${session.Start_Time}`);
        const hoursDiff = (classStart - now) / (1000 * 60 * 60);
        if (hoursDiff < 24) {
            showToast(state.language === "zh-tw" ? "無法取消！必須在上課前 24 小時以上取消。" : "Cannot cancel! Cancellations must be made at least 24 hours prior to class start time.", "error");
            return;
        }
    }

    // Cancel the booking (we will just set status to Cancelled)
    booking.Status = "Cancelled";
    db.bookings.save(bookings);

    // Refund credit to student package based on class type
    const packages = db.packages.list();
    const studentPackage = packages.find(p => p.Student_ID === booking.Student_ID);
    if (studentPackage && session) {
        if (session.Class_Type === "1 on 1") {
            studentPackage.Remaining_Slots = Math.min(studentPackage.Total_Slots || 0, (studentPackage.Remaining_Slots || 0) + 1);
        } else if (session.Class_Type === "Group Class") {
            studentPackage.Group_Remaining_Slots = Math.min(studentPackage.Group_Total_Slots || 0, (studentPackage.Group_Remaining_Slots || 0) + 1);
        }
        db.packages.save(packages);
    }

    // Restore session status to Available if it was full
    if (session) {
        const activeBookings = bookings.filter(b => b.Session_ID === session.Session_ID && b.Status === "Confirmed");
        if (activeBookings.length < session.Max_Capacity) {
            session.Status = "Available";
        }
        db.sessions.save(sessions);
    }

    showToast(getT("cancelledSuccess"), "info");
    renderCurrentView();
};

// ==========================================
// 9. MODALS MANAGEMENT
// ==========================================

// Global modal control helpers
function openModal(id) {
    document.getElementById(id).classList.add("active");
}
function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

// modal: Create Session setup
window.openCreateSessionModal = function () {
    state.editingSessionId = null;

    // Set trainers choices dynamically
    const selectTrainer = document.getElementById("session-trainer");
    const trainers = db.users.list().filter(u => u.Role === "Trainer");

    selectTrainer.innerHTML = trainers.map(t => `<option value="${t.User_ID}">${t.Name}</option>`).join("");

    // Set default trainer
    if (state.currentUser && state.currentUser.Role === "Trainer") {
        selectTrainer.value = state.currentTrainerId;
        selectTrainer.disabled = true;
    } else {
        // For Admin or others, select the first trainer as default, and enable dropdown
        if (trainers.length > 0) {
            selectTrainer.value = trainers[0].User_ID;
        } else {
            selectTrainer.value = "";
        }
        selectTrainer.disabled = false;
    }

    // Enable type selection and populate dynamically
    const selectClassType = document.getElementById("session-class-type");
    selectClassType.disabled = false;
    const classTypes = db.classTypes.list();
    selectClassType.innerHTML = classTypes.map(ct => `<option value="${ct.name}">${ct.name}</option>`).join("");
    selectClassType.value = "1 on 1";

    // Set default date to today
    const dateInput = document.getElementById("session-date");
    const today = new Date().toISOString().substring(0, 10);
    dateInput.value = today;

    // Default start time
    document.getElementById("session-start").value = "10:00";
    document.getElementById("session-end").value = "11:00";

    const capacityInput = document.getElementById("session-capacity");
    capacityInput.value = 1;
    capacityInput.setAttribute("max", "1");
    capacityInput.setAttribute("min", "1");

    // Hide warning
    document.getElementById("edit-session-warning").style.display = "none";

    // Set title and button text
    document.getElementById("lbl-create-session-modal-title").textContent = getT("createSessionModalTitle");
    document.getElementById("lbl-btn-submit-session").textContent = getT("formSaveSession");

    openModal("modal-create-session");
};

document.getElementById("btn-open-create-session").addEventListener("click", window.openCreateSessionModal);
const btnAdminCreateSession = document.getElementById("btn-admin-create-session");
if (btnAdminCreateSession) {
    btnAdminCreateSession.addEventListener("click", window.openCreateSessionModal);
}

const closeCreateSessionModal = () => {
    state.editingSessionId = null;
    // Enable fields again on close
    document.getElementById("session-trainer").disabled = false;
    document.getElementById("session-class-type").disabled = false;
    closeModal("modal-create-session");
};
document.getElementById("btn-close-create-session").addEventListener("click", closeCreateSessionModal);
document.getElementById("btn-cancel-create-session").addEventListener("click", closeCreateSessionModal);

document.getElementById("session-class-type").addEventListener("change", (e) => {
    const capacityInput = document.getElementById("session-capacity");
    const classTypes = db.classTypes.list();
    const selectedType = classTypes.find(ct => ct.name === e.target.value);
    if (selectedType) {
        capacityInput.value = selectedType.defaultCapacity;
        if (selectedType.name === "1 on 1") {
            capacityInput.setAttribute("max", "1");
        } else {
            capacityInput.setAttribute("max", "100");
        }
    }
});

document.getElementById("form-create-session").addEventListener("submit", (e) => {
    e.preventDefault();

    const trainerId = document.getElementById("session-trainer").value;
    const type = document.getElementById("session-class-type").value;
    const capacity = parseInt(document.getElementById("session-capacity").value);
    const date = document.getElementById("session-date").value;
    const start = document.getElementById("session-start").value;
    const end = document.getElementById("session-end").value;

    // Validation
    if (start >= end) {
        showToast(getT("invalidSessionTime"), "error");
        return;
    }

    const sessions = db.sessions.list();

    // Check for trainer session overlap on the same day (ignoring current session being edited)
    const overlap = sessions.some(s => {
        if (s.Trainer_ID !== trainerId || s.Date !== date || s.Status === "Finished") return false;
        if (state.editingSessionId && s.Session_ID === state.editingSessionId) return false;
        return s.Start_Time < end && s.End_Time > start;
    });

    if (overlap) {
        showToast(state.language === "zh-tw" ? "該時段已有排課，請選擇其他時間！" : "Trainer already has a session scheduled during this time!", "error");
        return;
    }

    if (state.editingSessionId) {
        // Edit existing session
        const sessionIndex = sessions.findIndex(s => s.Session_ID === state.editingSessionId);
        if (sessionIndex !== -1) {
            const session = sessions[sessionIndex];

            const confirmedBookings = db.bookings.filterBySession(state.editingSessionId);
            const activeBookingsCount = confirmedBookings.length;

            if (capacity < activeBookingsCount) {
                showToast(getT("cannotReduceCapacityBelowBookings"), "error");
                return;
            }

            // Only update trainer and type if there are no bookings
            if (activeBookingsCount === 0) {
                session.Trainer_ID = trainerId;
                session.Class_Type = type;
            }

            session.Max_Capacity = capacity;
            session.Date = date;
            session.Start_Time = start;
            session.End_Time = end;

            // Recalculate status based on bookings and capacity
            if (activeBookingsCount >= session.Max_Capacity) {
                session.Status = "Full";
            } else {
                session.Status = "Available";
            }

            db.sessions.save(sessions);
            showToast(getT("sessionUpdatedSuccess"), "success");

            state.editingSessionId = null;
            // Enable fields again
            document.getElementById("session-trainer").disabled = false;
            document.getElementById("session-class-type").disabled = false;
            closeModal("modal-create-session");
            renderCurrentView();
        }
    } else {
        // Create new session
        const newSessionId = generateId("S", sessions, "Session_ID");

        const newSession = {
            Session_ID: newSessionId,
            Trainer_ID: trainerId,
            Class_Type: type,
            Max_Capacity: capacity,
            Date: date,
            Start_Time: start,
            End_Time: end,
            Status: "Available"
        };

        sessions.push(newSession);
        db.sessions.save(sessions);

        showToast(getT("sessionCreatedSuccess"), "success");
        closeModal("modal-create-session");
        renderCurrentView();
    }
});


// modal: Edit Session setup
window.openEditSessionModal = function (sessionId) {
    const session = db.sessions.get(sessionId);
    if (!session) return;

    if (session.Status === "Finished") {
        showToast(getT("cannotEditFinishedClass"), "error");
        return;
    }

    state.editingSessionId = sessionId;

    // Set trainers choices dynamically
    const selectTrainer = document.getElementById("session-trainer");
    const trainers = db.users.list().filter(u => u.Role === "Trainer");
    selectTrainer.innerHTML = trainers.map(t => `<option value="${t.User_ID}">${t.Name}</option>`).join("");
    selectTrainer.value = session.Trainer_ID;

    // Set other field values
    const selectClassType = document.getElementById("session-class-type");
    const classTypes = db.classTypes.list();
    selectClassType.innerHTML = classTypes.map(ct => `<option value="${ct.name}">${ct.name}</option>`).join("");
    selectClassType.value = session.Class_Type;

    const capacityInput = document.getElementById("session-capacity");
    capacityInput.value = session.Max_Capacity;
    if (session.Class_Type === "1 on 1") {
        capacityInput.setAttribute("max", "1");
    } else {
        capacityInput.setAttribute("max", "100");
    }

    document.getElementById("session-date").value = session.Date;
    document.getElementById("session-start").value = session.Start_Time;
    document.getElementById("session-end").value = session.End_Time;

    // Check bookings
    const confirmedBookings = db.bookings.filterBySession(sessionId);
    const hasBookings = confirmedBookings.length > 0;

    const warningEl = document.getElementById("edit-session-warning");
    if (hasBookings) {
        // Lock fields
        selectTrainer.disabled = true;
        document.getElementById("session-class-type").disabled = true;
        warningEl.style.display = "block";
        capacityInput.setAttribute("min", confirmedBookings.length.toString());
    } else {
        // Unlock fields (but keep trainer locked if user is a Trainer)
        if (state.currentUser && state.currentUser.Role === "Trainer") {
            selectTrainer.disabled = true;
        } else {
            selectTrainer.disabled = false;
        }
        document.getElementById("session-class-type").disabled = false;
        warningEl.style.display = "none";
        capacityInput.setAttribute("min", "1");
    }

    // Set title and button text
    document.getElementById("lbl-create-session-modal-title").textContent = getT("editSessionModalTitle");
    document.getElementById("lbl-btn-submit-session").textContent = getT("formSaveSession");

    openModal("modal-create-session");
};


window.deleteSessionAction = function (sessionId) {
    const confirmMsg = state.language === "zh-tw" ? "確定要刪除此課程嗎？" : "Are you sure you want to delete this session?";
    if (!confirm(confirmMsg)) return;

    const sessions = db.sessions.list();
    const sessionIndex = sessions.findIndex(s => s.Session_ID === sessionId);
    if (sessionIndex === -1) return;

    const session = sessions[sessionIndex];
    const bookings = db.bookings.list();
    const packages = db.packages.list();

    // Find bookings for this session
    const sessionBookings = bookings.filter(b => b.Session_ID === sessionId && b.Status === "Confirmed");

    if (session.Class_Type === "1 on 1") {
        // Refund credits to student packages
        sessionBookings.forEach(booking => {
            const pkg = packages.find(p => p.Student_ID === booking.Student_ID);
            if (pkg) {
                pkg.Remaining_Slots = (pkg.Remaining_Slots || 0) + 1;
            }
        });
        db.packages.save(packages);
    }

    // Delete bookings
    const remainingBookings = bookings.filter(b => b.Session_ID !== sessionId);
    db.bookings.save(remainingBookings);

    // Delete session
    sessions.splice(sessionIndex, 1);
    db.sessions.save(sessions);

    showToast(state.language === "zh-tw" ? "課程已成功刪除" : "Session deleted successfully", "info");
    renderCurrentView();
};


// modal: Participant list details
window.openParticipantsModal = function (sessionId) {
    const session = db.sessions.get(sessionId);
    if (!session) return;

    document.getElementById("participant-session-id").textContent = session.Session_ID;
    document.getElementById("participant-session-time").textContent = `${formatDateDisplay(session.Date)} @ ${session.Start_Time} - ${session.End_Time}`;
    document.getElementById("participant-session-type-lbl").textContent = session.Class_Type === "1 on 1" ? getT("oneOnOne") : getT("groupClass");

    const confirmedBookings = db.bookings.filterBySession(sessionId);
    const users = db.users.list();
    const ul = document.getElementById("participants-list-ul");

    if (confirmedBookings.length > 0) {
        ul.innerHTML = confirmedBookings.map(b => {
            const student = users.find(u => u.User_ID === b.Student_ID);
            const sName = student ? student.Name : b.Student_ID;
            const sPhone = student ? student.Phone : "";
            const sEmail = student ? student.Email : "";

            return `
                <li class="participant-li">
                    <div class="participant-li-left">
                        <span class="participant-name">${sName}</span>
                        <span class="participant-contact">${sPhone} | ${sEmail}</span>
                    </div>
                    <span class="participant-date">${b.Booking_Date.split(" ")[0]}</span>
                </li>
            `;
        }).join("");
    } else {
        ul.innerHTML = `
            <div class="no-participants-msg">
                <i class="fa-regular fa-user" style="font-size:1.8rem; opacity:0.3; margin-bottom:0.5rem; display:block;"></i>
                <p>${getT("noParticipants")}</p>
            </div>
        `;
    }

    openModal("modal-participants");
};

document.getElementById("btn-close-participants").addEventListener("click", () => closeModal("modal-participants"));
document.getElementById("btn-close-participants-footer").addEventListener("click", () => closeModal("modal-participants"));


// modal: Create User Setup
document.getElementById("btn-open-create-user").addEventListener("click", () => {
    state.editingUserId = null;
    document.getElementById("form-user").reset();
    document.getElementById("package-fields").style.display = "block"; // default shown
    document.getElementById("user-role").disabled = false;
    document.getElementById("user-role").value = "Student";

    // Configure password field for new user creation
    document.getElementById("user-password").required = true;
    document.getElementById("user-password").placeholder = "Min 4 characters";
    document.getElementById("lbl-form-user-password").textContent = getT("adminUserPasswordRequiredLbl");

    document.getElementById("lbl-user-modal-title").textContent = getT("addUserModalTitle");
    document.getElementById("lbl-btn-submit-user").textContent = getT("btnSaveMember");
    openModal("modal-user");
});

const closeUserModal = () => {
    state.editingUserId = null;
    document.getElementById("user-role").disabled = false;
    closeModal("modal-user");
};
document.getElementById("btn-close-user").addEventListener("click", closeUserModal);
document.getElementById("btn-cancel-user").addEventListener("click", closeUserModal);

document.getElementById("user-role").addEventListener("change", (e) => {
    const pkgFields = document.getElementById("package-fields");
    if (e.target.value === "Student") {
        pkgFields.style.display = "block";
    } else {
        pkgFields.style.display = "none";
    }
});

document.getElementById("form-user").submitUser = function (e) {
    // Handles save
};

document.getElementById("form-user").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const phone = document.getElementById("user-phone").value.trim();
    const role = document.getElementById("user-role").value;
    const password = document.getElementById("user-password").value;

    const users = db.users.list();

    // Check duplicate email or phone (ignoring the current editing user)
    const duplicate = users.some(u => {
        if (state.editingUserId && u.User_ID === state.editingUserId) return false;
        return u.Email === email || (phone && u.Phone === phone);
    });
    if (duplicate) {
        showToast(state.language === "zh-tw" ? "電子郵件或電話已被其他帳號使用！" : "Email or Phone Number is already in use by another account!", "error");
        return;
    }

    if (state.editingUserId) {
        // Edit existing user
        const userIndex = users.findIndex(u => u.User_ID === state.editingUserId);
        if (userIndex !== -1) {
            const user = users[userIndex];
            const oldRole = user.Role;

            user.Name = name;
            user.Email = email;
            user.Phone = phone;
            user.Role = role;
            if (password) {
                user.Password = password;
            }

            db.users.save(users);

            // Handle package adjustments if role changed
            if (oldRole !== "Student" && role === "Student") {
                // Changed to student: create a default package
                const packages = db.packages.list();
                const pkgExists = packages.some(p => p.Student_ID === state.editingUserId);
                if (!pkgExists) {
                    const newPkgId = generateId("P", packages, "Package_ID");
                    packages.push({
                        Package_ID: newPkgId,
                        Student_ID: state.editingUserId,
                        Total_Slots: 10,
                        Remaining_Slots: 10,
                        Group_Total_Slots: 5,
                        Group_Remaining_Slots: 5
                    });
                    db.packages.save(packages);
                }
            } else if (oldRole === "Student" && role !== "Student") {
                // Changed from student: remove package
                let packages = db.packages.list();
                packages = packages.filter(p => p.Student_ID !== state.editingUserId);
                db.packages.save(packages);
            }

            showToast(getT("userUpdatedSuccess"), "success");
            state.editingUserId = null;
            document.getElementById("user-role").disabled = false;
            document.getElementById("user-password").value = "";
            closeModal("modal-user");
            renderAdminView();
        }
    } else {
        // Create new user (original logic)
        const newUserId = generateId("U", users, "User_ID");

        const newUser = {
            User_ID: newUserId,
            Name: name,
            Role: role,
            Email: email,
            Phone: phone,
            Password: password || "123"
        };

        users.push(newUser);
        db.users.save(users);

        // Package setup if student
        if (role === "Student") {
            const total = parseInt(document.getElementById("package-total").value) || 0;
            const remaining = parseInt(document.getElementById("package-remaining").value) || 0;
            const groupTotal = parseInt(document.getElementById("package-group-total").value) || 0;
            const groupRemaining = parseInt(document.getElementById("package-group-remaining").value) || 0;

            const packages = db.packages.list();
            const newPkgId = generateId("P", packages, "Package_ID");

            const newPkg = {
                Package_ID: newPkgId,
                Student_ID: newUserId,
                Total_Slots: total,
                Remaining_Slots: remaining,
                Group_Total_Slots: groupTotal,
                Group_Remaining_Slots: groupRemaining
            };
            packages.push(newPkg);
            db.packages.save(packages);
        }

        showToast(getT("userCreatedSuccess"), "success");
        document.getElementById("user-password").value = "";
        closeModal("modal-user");
        renderAdminView();
    }
});


// modal: Edit User Setup
window.openEditUserModal = function (userId) {
    const user = db.users.get(userId);
    if (!user) return;

    state.editingUserId = userId;

    document.getElementById("user-name").value = user.Name;
    document.getElementById("user-email").value = user.Email;
    document.getElementById("user-phone").value = user.Phone || "";
    document.getElementById("user-role").value = user.Role;

    // Configure password field for edit mode
    document.getElementById("user-password").required = false;
    document.getElementById("user-password").value = "";
    document.getElementById("user-password").placeholder = state.language === "zh-tw" ? "保留空白以維持原密碼" : "Leave blank to keep current";
    document.getElementById("lbl-form-user-password").textContent = getT("adminUserPasswordLbl");

    // Hide package setup fields for edit mode
    document.getElementById("package-fields").style.display = "none";

    // Disable role change if they have active bookings or sessions
    const roleSelect = document.getElementById("user-role");
    let hasDependency = false;

    if (user.Role === "Student") {
        const bookings = db.bookings.list().filter(b => b.Student_ID === userId && b.Status === "Confirmed");
        if (bookings.length > 0) {
            hasDependency = true;
        }
    } else if (user.Role === "Trainer") {
        const sessions = db.sessions.list().filter(s => s.Trainer_ID === userId && s.Status !== "Finished");
        if (sessions.length > 0) {
            hasDependency = true;
        }
    }

    if (hasDependency) {
        roleSelect.disabled = true;
    } else {
        roleSelect.disabled = false;
    }

    // Update modal title
    document.getElementById("lbl-user-modal-title").textContent = getT("editUserModalTitle");
    document.getElementById("lbl-btn-submit-user").textContent = getT("btnSaveMember");

    openModal("modal-user");
};


// modal: Adjust Credits slots
window.openEditPackageModal = function (studentId) {
    const student = db.users.get(studentId);
    if (!student) return;

    const pkg = db.packages.getByStudent(studentId);

    document.getElementById("edit-pkg-student-id").value = studentId;
    document.getElementById("edit-pkg-student-name").textContent = student.Name;
    document.getElementById("edit-pkg-total").value = pkg ? (pkg.Total_Slots !== undefined ? pkg.Total_Slots : 10) : 10;
    document.getElementById("edit-pkg-remaining").value = pkg ? (pkg.Remaining_Slots !== undefined ? pkg.Remaining_Slots : 10) : 10;
    document.getElementById("edit-pkg-group-total").value = pkg ? (pkg.Group_Total_Slots !== undefined ? pkg.Group_Total_Slots : 5) : 5;
    document.getElementById("edit-pkg-group-remaining").value = pkg ? (pkg.Group_Remaining_Slots !== undefined ? pkg.Group_Remaining_Slots : 5) : 5;

    // Apply translations for the new labels
    document.getElementById("lbl-pkg-group-total").textContent = getT("formGroupTotalSlots");
    document.getElementById("lbl-pkg-group-remaining").textContent = getT("formGroupRemainingSlots");

    openModal("modal-package-edit");
};

document.getElementById("btn-close-package-edit").addEventListener("click", () => closeModal("modal-package-edit"));
document.getElementById("btn-cancel-package-edit").addEventListener("click", () => closeModal("modal-package-edit"));

document.getElementById("form-package-edit").addEventListener("submit", (e) => {
    e.preventDefault();

    const studentId = document.getElementById("edit-pkg-student-id").value;
    const total = parseInt(document.getElementById("edit-pkg-total").value);
    const remaining = parseInt(document.getElementById("edit-pkg-remaining").value);
    const groupTotal = parseInt(document.getElementById("edit-pkg-group-total").value);
    const groupRemaining = parseInt(document.getElementById("edit-pkg-group-remaining").value);

    const packages = db.packages.list();
    const pkgIndex = packages.findIndex(p => p.Student_ID === studentId);

    if (pkgIndex !== -1) {
        packages[pkgIndex].Total_Slots = total;
        packages[pkgIndex].Remaining_Slots = remaining;
        packages[pkgIndex].Group_Total_Slots = groupTotal;
        packages[pkgIndex].Group_Remaining_Slots = groupRemaining;
    } else {
        // Create new one if somehow missing
        const newPkgId = generateId("P", packages, "Package_ID");
        packages.push({
            Package_ID: newPkgId,
            Student_ID: studentId,
            Total_Slots: total,
            Remaining_Slots: remaining,
            Group_Total_Slots: groupTotal,
            Group_Remaining_Slots: groupRemaining
        });
    }

    db.packages.save(packages);
    showToast(getT("creditsUpdatedSuccess"), "success");
    closeModal("modal-package-edit");
    renderAdminView();
});

// Action: Approve Credit Purchase Request (Admin only)
window.approvePurchaseRequestAction = function (requestId) {
    const requests = db.purchaseRequests.list();
    const req = requests.find(r => r.Request_ID === requestId);
    if (!req || req.Status !== "Pending") return;

    req.Status = "Approved";
    db.purchaseRequests.save(requests);

    const packages = db.packages.list();
    const pkgIndex = packages.findIndex(p => p.Student_ID === req.Student_ID);
    const slots = req.Slots;

    if (pkgIndex !== -1) {
        if (req.Type === "pt") {
            packages[pkgIndex].Total_Slots = (packages[pkgIndex].Total_Slots || 0) + slots;
            packages[pkgIndex].Remaining_Slots = (packages[pkgIndex].Remaining_Slots || 0) + slots;
        } else {
            packages[pkgIndex].Group_Total_Slots = (packages[pkgIndex].Group_Total_Slots || 0) + slots;
            packages[pkgIndex].Group_Remaining_Slots = (packages[pkgIndex].Group_Remaining_Slots || 0) + slots;
        }
    } else {
        const newPkgId = generateId("P", packages, "Package_ID");
        const newPkg = {
            Package_ID: newPkgId,
            Student_ID: req.Student_ID,
            Total_Slots: req.Type === "pt" ? slots : 0,
            Remaining_Slots: req.Type === "pt" ? slots : 0,
            Group_Total_Slots: req.Type === "group" ? slots : 0,
            Group_Remaining_Slots: req.Type === "group" ? slots : 0
        };
        packages.push(newPkg);
    }
    db.packages.save(packages);

    showToast(getT("requestApprovedMsg"), "success");
    renderAdminView();
};

// Action: Reject Credit Purchase Request (Admin only)
window.rejectPurchaseRequestAction = function (requestId) {
    const requests = db.purchaseRequests.list();
    const req = requests.find(r => r.Request_ID === requestId);
    if (!req || req.Status !== "Pending") return;

    req.Status = "Rejected";
    db.purchaseRequests.save(requests);

    showToast(getT("requestRejectedMsg"), "success");
    renderAdminView();
};

// Action: Delete user account (Admin only)
window.deleteUserAction = function (userId) {
    if (state.currentUser && userId === state.currentUser.User_ID) {
        showToast(getT("cannotDeleteSelf"), "error");
        return;
    }

    const user = db.users.get(userId);
    if (!user) return;

    // Check if Student has active bookings
    if (user.Role === "Student") {
        const bookings = db.bookings.list().filter(b => b.Student_ID === userId && b.Status === "Confirmed");
        if (bookings.length > 0) {
            showToast(getT("cannotDeleteStudentWithBookings"), "error");
            return;
        }
    }

    // Check if Trainer has scheduled sessions
    if (user.Role === "Trainer") {
        const sessions = db.sessions.list().filter(s => s.Trainer_ID === userId && s.Status !== "Finished");
        if (sessions.length > 0) {
            showToast(getT("cannotDeleteTrainerWithSessions"), "error");
            return;
        }
    }

    // Double check confirmation
    if (confirm(getT("deleteUserConfirm"))) {
        // Remove user
        let users = db.users.list();
        users = users.filter(u => u.User_ID !== userId);
        db.users.save(users);

        // Remove package if it exists
        let packages = db.packages.list();
        packages = packages.filter(p => p.Student_ID !== userId);
        db.packages.save(packages);

        showToast(getT("userDeletedSuccess"), "success");
        renderAdminView();
    }
};



// modal: Buy Package Slots (Student Dashboard)
window.openBuyPackageModal = function (type) {
    const settings = db.settings.get() || defaultSettings;
    const typeInput = document.getElementById("buy-pkg-type");
    const typeText = document.getElementById("buy-pkg-type-text");
    const optionSelect = document.getElementById("buy-pkg-option");
    const priceDisplay = document.getElementById("buy-pkg-total-price");

    typeInput.value = type;

    // Clear previous options
    optionSelect.innerHTML = "";

    // Helper to calculate total price
    function updateTotalPrice() {
        const slots = parseInt(optionSelect.value) || 0;
        let totalCost = 0;

        if (type === "pt") {
            if (slots === 1) totalCost = settings.PT_Price_1;
            else if (slots === 10) totalCost = settings.PT_Price_10 * 10;
            else if (slots === 20) totalCost = settings.PT_Price_20 * 20;
        } else if (type === "group") {
            // Check trial qualification
            const groupBookingsCount = db.bookings.list().filter(b =>
                b.Student_ID === state.currentStudentId &&
                b.Status === "Confirmed"
            ).length;

            const isTrial = (groupBookingsCount === 0);

            const val = optionSelect.value;
            if (val === "1") {
                totalCost = isTrial ? settings.Group_Trial_Price : settings.Group_Normal_Price;
            } else if (val === "1_normal") {
                totalCost = settings.Group_Normal_Price;
            } else if (val === "5") {
                totalCost = isTrial
                    ? (settings.Group_Trial_Price + 4 * settings.Group_Normal_Price)
                    : (5 * settings.Group_Normal_Price);
            } else if (val === "5_normal") {
                totalCost = 5 * settings.Group_Normal_Price;
            } else if (val === "10") {
                totalCost = 10 * settings.Group_Normal_Price;
            } else if (val === "20") {
                totalCost = 20 * settings.Group_Normal_Price;
            }
        }
        priceDisplay.textContent = `NT ${totalCost.toLocaleString()}`;
    }

    if (type === "pt") {
        typeText.textContent = "1-on-1 PT";
        typeText.style.color = "var(--primary-color)";

        // Options
        const opt1 = document.createElement("option");
        opt1.value = "1";
        opt1.textContent = `1 Session (NT ${settings.PT_Price_1.toLocaleString()})`;
        optionSelect.appendChild(opt1);

        const opt10 = document.createElement("option");
        opt10.value = "10";
        opt10.textContent = `10 Sessions (NT ${(settings.PT_Price_10 * 10).toLocaleString()})`;
        optionSelect.appendChild(opt10);

        const opt20 = document.createElement("option");
        opt20.value = "20";
        opt20.textContent = `20 Sessions (NT ${(settings.PT_Price_20 * 20).toLocaleString()})`;
        optionSelect.appendChild(opt20);
    } else {
        typeText.textContent = state.language === "zh-tw" ? "團體課" : "Group Class";
        typeText.style.color = "#34d399";

        // Check trial qualification
        const groupBookingsCount = db.bookings.list().filter(b =>
            b.Student_ID === state.currentStudentId &&
            b.Status === "Confirmed"
        ).length;
        const isTrial = (groupBookingsCount === 0);

        const trialPrice = settings.Group_Trial_Price;
        const normalPrice = settings.Group_Normal_Price;

        const price1 = isTrial ? trialPrice : normalPrice;
        const price5 = isTrial ? (trialPrice + 4 * normalPrice) : (5 * normalPrice);
        const price10 = 10 * normalPrice;
        const price20 = 20 * normalPrice;

        const normalRateLabel = state.language === "zh-tw" ? "一般原價" : "Normal Rate";

        if (isTrial) {
            const opt1Trial = document.createElement("option");
            opt1Trial.value = "1";
            opt1Trial.textContent = `1 Session (NT ${trialPrice.toLocaleString()}) [Trial Price]`;
            optionSelect.appendChild(opt1Trial);
        }

        const opt1Normal = document.createElement("option");
        opt1Normal.value = "1_normal";
        opt1Normal.textContent = `1 Session (NT ${normalPrice.toLocaleString()}) [${normalRateLabel}]`;
        optionSelect.appendChild(opt1Normal);

        if (isTrial) {
            const opt5Trial = document.createElement("option");
            opt5Trial.value = "5";
            opt5Trial.textContent = `5 Sessions (NT ${price5.toLocaleString()}) [Trial Price incl.]`;
            optionSelect.appendChild(opt5Trial);
        }

        const opt5Normal = document.createElement("option");
        opt5Normal.value = "5_normal";
        opt5Normal.textContent = `5 Sessions (NT ${(5 * normalPrice).toLocaleString()}) [${normalRateLabel}]`;
        optionSelect.appendChild(opt5Normal);

        const opt10 = document.createElement("option");
        opt10.value = "10";
        opt10.textContent = `10 Sessions (NT ${price10.toLocaleString()}) [${normalRateLabel}]`;
        optionSelect.appendChild(opt10);

        const opt20 = document.createElement("option");
        opt20.value = "20";
        opt20.textContent = `20 Sessions (NT ${price20.toLocaleString()}) [${normalRateLabel}]`;
        optionSelect.appendChild(opt20);
    }

    // Set translation titles
    document.getElementById("lbl-buy-pkg-title").textContent = getT("buyPackageModalTitle");
    document.getElementById("lbl-buy-pkg-type-display").textContent = getT("creditTypeLbl");
    document.getElementById("lbl-buy-pkg-option").textContent = getT("selectPackageOptionLbl");
    document.getElementById("lbl-buy-pkg-price-label").textContent = getT("totalCostLbl");
    document.getElementById("lbl-btn-submit-buy-package").innerHTML = `<i class="fa-solid fa-credit-card"></i> ${getT("payAndAddCreditsBtn")}`;

    // Handle updates on change
    optionSelect.onchange = updateTotalPrice;

    // Initialize total cost
    updateTotalPrice();

    openModal("modal-buy-package");
};

document.getElementById("btn-close-buy-package").addEventListener("click", () => closeModal("modal-buy-package"));
document.getElementById("btn-cancel-buy-package").addEventListener("click", () => closeModal("modal-buy-package"));

// Form buy package submit handler
document.getElementById("form-buy-package").addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.getElementById("buy-pkg-type").value;
    const slots = parseInt(document.getElementById("buy-pkg-option").value) || 0;

    // Get total cost
    const settings = db.settings.get() || defaultSettings;
    let totalCost = 0;
    if (type === "pt") {
        if (slots === 1) totalCost = settings.PT_Price_1;
        else if (slots === 10) totalCost = settings.PT_Price_10 * 10;
        else if (slots === 20) totalCost = settings.PT_Price_20 * 20;
    } else {
        const groupBookingsCount = db.bookings.list().filter(b =>
            b.Student_ID === state.currentStudentId &&
            b.Status === "Confirmed"
        ).length;
        const isTrial = (groupBookingsCount === 0);
        const optValue = document.getElementById("buy-pkg-option").value;
        if (optValue === "1") totalCost = isTrial ? settings.Group_Trial_Price : settings.Group_Normal_Price;
        else if (optValue === "1_normal") totalCost = settings.Group_Normal_Price;
        else if (optValue === "5") totalCost = isTrial ? (settings.Group_Trial_Price + 4 * settings.Group_Normal_Price) : (5 * settings.Group_Normal_Price);
        else if (optValue === "5_normal") totalCost = 5 * settings.Group_Normal_Price;
        else if (optValue === "10") totalCost = 10 * settings.Group_Normal_Price;
        else if (optValue === "20") totalCost = 20 * settings.Group_Normal_Price;
    }

    // Save purchase request
    const requests = db.purchaseRequests.list();
    const newReqId = generateId("R", requests, "Request_ID");
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 8);
    const newRequest = {
        Request_ID: newReqId,
        Student_ID: state.currentStudentId,
        Type: type,
        Slots: slots,
        Price: totalCost,
        Request_Date: dateStr,
        Status: "Pending"
    };
    requests.push(newRequest);
    db.purchaseRequests.save(requests);

    const successMsg = getT("packagePurchasedSuccess");

    showToast(successMsg, "success");
    closeModal("modal-buy-package");
    renderStudentView();
});


// ==========================================
// 10. TAB & VIEW CONTROL HANDLERS
// ==========================================

// Switch View Role Switcher
document.querySelectorAll(".role-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const btnElem = e.currentTarget;
        document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
        btnElem.classList.add("active");

        state.role = btnElem.getAttribute("data-role");

        // Hide all views, display current one
        document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
        document.getElementById(`view-${state.role}`).classList.add("active");

        renderCurrentView();
    });
});

// Switch Admin Sub-Tabs
document.getElementById("tab-students-btn").addEventListener("click", () => {
    state.activeAdminTab = "students";
    renderAdminView();
});
document.getElementById("tab-sessions-btn").addEventListener("click", () => {
    state.activeAdminTab = "sessions";
    renderAdminView();
});
document.getElementById("tab-export-btn").addEventListener("click", () => {
    state.activeAdminTab = "export";
    renderAdminView();
});
document.getElementById("tab-requests-btn").addEventListener("click", () => {
    state.activeAdminTab = "requests";
    renderAdminView();
});



// Language Switch Event
document.getElementById("lang-select").addEventListener("change", (e) => {
    state.language = e.target.value;
    applyLanguage();
});

// ==========================================
// 11. CSV EXPORTER & DATA UTIL
// ==========================================

function downloadCSV(csvContent, fileName) {
    // Add UTF-8 BOM so Excel opens it with correct encoding (crucial for Chinese/Thai names)
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Convert JSON array of objects to CSV string
function convertToCSV(objArray) {
    if (objArray.length === 0) return "";
    const headers = Object.keys(objArray[0]);
    const rows = objArray.map(obj => {
        return headers.map(header => {
            let val = obj[header] === undefined || obj[header] === null ? "" : obj[header];
            // Escape double quotes
            val = String(val).replace(/"/g, '""');
            // Wrap in quotes if contains commas or newlines
            if (val.includes(",") || val.includes("\n") || val.includes('"')) {
                val = `"${val}"`;
            }
            return val;
        }).join(",");
    });

    return [headers.join(","), ...rows].join("\n");
}

document.querySelectorAll(".btn-export").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const table = e.currentTarget.getAttribute("data-table");
        let data = [];
        let filename = "";

        if (table === "users") {
            data = db.users.list();
            filename = "Users.csv";
        } else if (table === "sessions") {
            data = db.sessions.list();
            filename = "Sessions.csv";
        } else if (table === "bookings") {
            data = db.bookings.list();
            filename = "Bookings.csv";
        } else if (table === "packages") {
            data = db.packages.list();
            filename = "Student_Packages.csv";
        }

        if (data.length > 0) {
            const csv = convertToCSV(data);
            downloadCSV(csv, filename);
            showToast(`${filename} exported successfully!`, "success");
        } else {
            showToast("No data to export!", "error");
        }
    });
});

// Database utilities: Reset
document.getElementById("btn-db-reset").addEventListener("click", () => {
    if (confirm(state.language === "zh-tw" ? "您確定要重設所有資料庫表格並清除預約嗎？" : "Are you sure you want to reset all tables to default sample data?")) {
        db.init(true);
        state.currentUser = null;
        localStorage.removeItem("LJD_pt_logged_in_user");
        showToast(getT("dbResetSuccess"), "success");
        applyLanguage();
    }
});

// ==========================================
// 12. NEW FEATURE IMPLEMENTATIONS (AUTH, CALENDAR & SETTINGS)
// ==========================================

// Calendar Renderer
function renderCalendar(viewType, dateObj) {
    const gridId = `${viewType}-calendar-grid`;
    const monthYearId = `${viewType}-cal-month-year`;

    const gridContainer = document.getElementById(gridId);
    const monthYearDisplay = document.getElementById(monthYearId);
    if (!gridContainer || !monthYearDisplay) return;

    gridContainer.innerHTML = "";

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();

    // Set Header Month Year
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthNamesZh = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    if (state.language === "zh-tw") {
        monthYearDisplay.textContent = `${year}年 ${monthNamesZh[month]}`;
    } else {
        monthYearDisplay.textContent = `${monthNamesEn[month]} ${year}`;
    }

    // Day Headers
    const daysHeaderEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysHeaderZh = ["日", "一", "二", "三", "四", "五", "六"];
    const headers = state.language === "zh-tw" ? daysHeaderZh : daysHeaderEn;

    headers.forEach(h => {
        const headerCell = document.createElement("div");
        headerCell.className = "calendar-cell header-cell";
        headerCell.textContent = h;
        gridContainer.appendChild(headerCell);
    });

    // First day of month
    const firstDay = new Date(year, month, 1).getDay();
    // Number of days in month
    const numDays = new Date(year, month + 1, 0).getDate();

    // Preceding empty cells
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "calendar-cell empty-cell";
        gridContainer.appendChild(emptyCell);
    }

    // Day cells
    const today = new Date();
    const sessions = db.sessions.list();
    const bookings = db.bookings.list();

    for (let day = 1; day <= numDays; day++) {
        const cellDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        const cell = document.createElement("div");
        cell.className = "calendar-cell";

        // Highlight today
        if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
            cell.classList.add("today-cell");
        }

        // Highlight selected
        if (state.selectedDateStr === cellDateStr) {
            cell.classList.add("selected-cell");
        }

        // Add Day number
        const dayNum = document.createElement("span");
        dayNum.className = "cell-day-num";
        dayNum.textContent = day;
        cell.appendChild(dayNum);

        // Find sessions on this day
        const daySessions = sessions.filter(s => s.Date === cellDateStr && s.Status !== "Finished");
        const dotsContainer = document.createElement("div");
        dotsContainer.className = "cell-dots-container";

        if (viewType === "student") {
            let hasAvailable = false;
            let hasBooked = false;

            daySessions.forEach(s => {
                const isBooked = bookings.some(b => b.Session_ID === s.Session_ID && b.Student_ID === state.currentStudentId && b.Status === "Confirmed");
                if (isBooked) {
                    hasBooked = true;
                } else if (s.Status === "Available") {
                    hasAvailable = true;
                }
            });

            if (hasBooked && hasAvailable) {
                cell.classList.add("cell-has-both");
            } else if (hasBooked) {
                cell.classList.add("cell-has-booked");
            } else if (hasAvailable) {
                cell.classList.add("cell-has-available");
            }

            if (hasBooked) {
                const dot = document.createElement("span");
                dot.className = "cell-dot dot-booked";
                dot.title = state.language === "zh-tw" ? "您已預約課程" : "Your Booking";
                dotsContainer.appendChild(dot);
            }
            if (hasAvailable) {
                const dot = document.createElement("span");
                dot.className = "cell-dot dot-available";
                dot.title = state.language === "zh-tw" ? "有可預約課程" : "Available Class";
                dotsContainer.appendChild(dot);
            }
        } else if (viewType === "trainer") {
            const trainerSessions = daySessions.filter(s => s.Trainer_ID === state.currentTrainerId);
            if (trainerSessions.length > 0) {
                cell.classList.add("cell-has-booked");
                const dot = document.createElement("span");
                dot.className = "cell-dot dot-booked";
                dot.title = state.language === "zh-tw" ? "今日有授課" : "Teaching Day";
                dotsContainer.appendChild(dot);
            }
        }

        cell.appendChild(dotsContainer);

        // Day Cell Click listener
        cell.addEventListener("click", () => {
            if (state.selectedDateStr === cellDateStr) {
                state.selectedDateStr = ""; // Clear filter
            } else {
                state.selectedDateStr = cellDateStr; // Filter by date
            }
            renderCurrentView();
        });

        gridContainer.appendChild(cell);
    }
}

// Clear Date Filter Action
window.clearDateFilter = function () {
    state.selectedDateStr = "";
    renderCurrentView();
};

// Calendar Navigation
document.getElementById("btn-student-cal-prev").addEventListener("click", () => {
    state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
    renderCurrentView();
});
document.getElementById("btn-student-cal-next").addEventListener("click", () => {
    state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
    renderCurrentView();
});
document.getElementById("btn-trainer-cal-prev").addEventListener("click", () => {
    state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
    renderCurrentView();
});
document.getElementById("btn-trainer-cal-next").addEventListener("click", () => {
    state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
    renderCurrentView();
});

// Authentication UI Event Listeners
const tabLoginBtn = document.getElementById("tab-login-btn");
const tabRegisterBtn = document.getElementById("tab-register-btn");
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");

tabLoginBtn.addEventListener("click", () => {
    tabLoginBtn.classList.add("active");
    tabRegisterBtn.classList.remove("active");
    formLogin.classList.add("active");
    formRegister.classList.remove("active");
});

tabRegisterBtn.addEventListener("click", () => {
    tabRegisterBtn.classList.add("active");
    tabLoginBtn.classList.remove("active");
    formRegister.classList.add("active");
    formLogin.classList.remove("active");
});

// Submit Login Form
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const identifier = document.getElementById("login-identifier").value.trim();
    const password = document.getElementById("login-password").value;

    if (!identifier) {
        showToast(getT("invalidEmail"), "error");
        return;
    }

    const users = db.users.list();
    const user = users.find(u => {
        const uEmail = u.Email ? String(u.Email).trim().toLowerCase() : "";
        const uPhone = u.Phone ? String(u.Phone).trim() : "";
        const searchId = identifier.toLowerCase();
        return uEmail === searchId || uPhone === searchId;
    });

    if (user) {
        const userPassword = user.Password !== undefined && user.Password !== null ? String(user.Password).trim() : "123";
        if (userPassword !== String(password).trim()) {
            showToast(getT("passwordWrong"), "error");
            return;
        }

        state.currentUser = user;
        state.role = user.Role.toLowerCase();

        if (state.role === "student") {
            state.currentStudentId = user.User_ID;
            document.querySelectorAll(".role-btn").forEach(b => {
                b.classList.remove("active");
                if (b.getAttribute("data-role") === "student") b.classList.add("active");
            });
            document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
            document.getElementById("view-student").classList.add("active");
        } else if (state.role === "trainer") {
            state.currentTrainerId = user.User_ID;
            document.querySelectorAll(".role-btn").forEach(b => {
                b.classList.remove("active");
                if (b.getAttribute("data-role") === "trainer") b.classList.add("active");
            });
            document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
            document.getElementById("view-trainer").classList.add("active");
        } else if (state.role === "admin") {
            document.querySelectorAll(".role-btn").forEach(b => {
                b.classList.remove("active");
                if (b.getAttribute("data-role") === "admin") b.classList.add("active");
            });
            document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
            document.getElementById("view-admin").classList.add("active");
        }

        localStorage.setItem("LJD_pt_logged_in_user", JSON.stringify(user));
        showToast(getT("loginSuccess"), "success");
        document.getElementById("login-password").value = "";
        applyLanguage();
    } else {
        showToast(getT("loginFailed"), "error");
    }
});

// Submit Register Form (Student Registration)
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const phone = document.getElementById("register-phone").value.trim();
    const password = document.getElementById("register-password").value;

    if (password.length < 4) {
        showToast(getT("lblPasswordMinLength"), "error");
        return;
    }

    const users = db.users.list();

    // Check if email or phone already exists
    const exists = users.some(u => {
        const uEmail = u.Email ? String(u.Email).trim().toLowerCase() : "";
        const uPhone = u.Phone ? String(u.Phone).trim() : "";
        return uEmail === email.toLowerCase() || uPhone === phone;
    });
    if (exists) {
        showToast(state.language === "zh-tw" ? "該信箱或電話已被註冊！" : "Email or Phone already registered!", "error");
        return;
    }

    const newUserId = generateId("U", users, "User_ID");
    const newUser = {
        User_ID: newUserId,
        Name: name,
        Role: "Student",
        Email: email,
        Phone: phone,
        Password: password
    };

    users.push(newUser);
    db.users.save(users);

    // Default package for newly registered students (with 0 default slots)
    const packages = db.packages.list();
    const newPkgId = generateId("P", packages, "Package_ID");
    const newPkg = {
        Package_ID: newPkgId,
        Student_ID: newUserId,
        Total_Slots: 0,
        Remaining_Slots: 0
    };
    packages.push(newPkg);
    db.packages.save(packages);

    // Auto login
    state.currentUser = newUser;
    state.role = "student";
    state.currentStudentId = newUserId;
    localStorage.setItem("LJD_pt_logged_in_user", JSON.stringify(newUser));

    // Force student view in UI
    document.querySelectorAll(".role-btn").forEach(b => {
        b.classList.remove("active");
        if (b.getAttribute("data-role") === "student") b.classList.add("active");
    });
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById("view-student").classList.add("active");

    showToast(state.language === "zh-tw" ? "註冊成功並已登入！" : "Registered and logged in successfully!", "success");

    // Clear registration inputs
    document.getElementById("register-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-phone").value = "";
    document.getElementById("register-password").value = "";

    // Reset tabs
    tabLoginBtn.click();

    applyLanguage();
});

// Logout Button Click
document.getElementById("btn-logout").addEventListener("click", () => {
    state.currentUser = null;
    state.role = "student";
    state.currentStudentId = "";
    state.selectedDateStr = "";
    localStorage.removeItem("LJD_pt_logged_in_user");
    showToast(getT("logoutSuccess"), "info");
    applyLanguage();
});

// Admin Pricing settings Form Submit
document.getElementById("form-pricing-settings").addEventListener("submit", (e) => {
    e.preventDefault();
    const settings = {
        Group_Trial_Price: parseInt(document.getElementById("settings-group-trial").value) || 0,
        Group_Normal_Price: parseInt(document.getElementById("settings-group-normal").value) || 0,
        Group_Min_Participants: parseInt(document.getElementById("settings-group-min-users").value) || 2,
        PT_Price_1: parseInt(document.getElementById("settings-pt-1").value) || 0,
        PT_Price_10: parseInt(document.getElementById("settings-pt-10").value) || 0,
        PT_Price_20: parseInt(document.getElementById("settings-pt-20").value) || 0
    };

    db.settings.save(settings);
    showToast(getT("settingsUpdatedSuccess"), "success");
    renderAdminView();
});

// Switch Admin Sub-Tabs listener for Settings tab
document.getElementById("tab-settings-btn").addEventListener("click", () => {
    state.activeAdminTab = "settings";
    renderAdminView();
});

// Admin Class Types Form Submit
document.getElementById("btn-add-class-type").addEventListener("click", () => {
    const nameInput = document.getElementById("new-ct-name");
    const capacityInput = document.getElementById("new-ct-capacity");
    const name = nameInput.value.trim();
    const capacity = parseInt(capacityInput.value) || 5;

    if (!name) {
        showToast(state.language === "zh-tw" ? "請輸入類別名稱！" : "Please enter a class type name!", "error");
        return;
    }

    // Check if name already exists (case-insensitive)
    const list = db.classTypes.list();
    if (list.some(ct => ct.name.toLowerCase() === name.toLowerCase())) {
        showToast(state.language === "zh-tw" ? "此類別名稱已存在！" : "Class type name already exists!", "error");
        return;
    }

    db.classTypes.add(name, capacity);
    nameInput.value = "";
    capacityInput.value = 5;

    showToast(state.language === "zh-tw" ? "已成功新增課程類別" : "Class type added successfully", "success");
    renderAdminClassTypes();
    renderCurrentView();
});

// ==========================================
// 12. GOOGLE SHEETS CLOUD SYNC
// ==========================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxceyCSsZdeMXnhNOB8nkdYFuS0JU2R_QLViBuvjgHruCVjK1YpitMdqHemF44CKGzV/exec";

function saveData() {
    const allData = {
        action: "saveData",
        payload: {
            users: db.users.list(),
            sessions: db.sessions.list(),
            bookings: db.bookings.list(),
            studentPackages: db.packages.list()
        }
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(allData)
    })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            console.log("บันทึกข้อมูลซิงค์ลง Google Sheets สำเร็จ");
        })
        .catch(error => {
            console.error("เกิดข้อผิดพลาดในการซิงค์ฐานข้อมูล:", error);
        });
}

window.loadDataFromCloud = function () {
    isCloudLoading = true;
    return fetch(GOOGLE_SCRIPT_URL)
        .then(response => response.json())
        .then(data => {
            if (data && !data.error) {
                if (data.users && Object.keys(data.users).length > 0) {
                    db.users.save(data.users);
                }
                if (data.sessions && Object.keys(data.sessions).length > 0) {
                    db.sessions.save(data.sessions);
                }
                if (data.bookings && Object.keys(data.bookings).length > 0) {
                    db.bookings.save(data.bookings);
                }
                if (data.studentPackages && Object.keys(data.studentPackages).length > 0) {
                    db.packages.save(data.studentPackages);
                }

                console.log("ดาวน์โหลดข้อมูลฐานข้อมูลล่าสุดเรียบร้อย");
            }
            isCloudLoading = false;
        })
        .catch(error => {
            isCloudLoading = false;
            console.warn("ไม่สามารถดึงข้อมูลจากคลาวด์ได้ กำลังใช้ข้อมูลเก่าในเครื่องสำรอง:", error);
        });
};

// ==========================================
// 13. INITIALIZATION RUN
// ==========================================
// Boot immediately using cached local data
applyLanguage();

// Fetch fresh data from cloud and refresh the application UI when loaded
window.loadDataFromCloud().then(() => {
    applyLanguage();
    renderCurrentView();
});
