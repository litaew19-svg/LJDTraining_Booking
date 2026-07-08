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
        invalidSessionTime: "End time must be after start time!",

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
        invalidSessionTime: "結束時間必須晚於開始時間！",

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
    { User_ID: "U001", Name: "Phatcharin Admin", Role: "Admin", Email: "phatcharin@example.com", Phone: "081-000-0000" },
    { User_ID: "U002", Name: "Somchai Trainer", Role: "Trainer", Email: "somchai.pt@example.com", Phone: "082-000-0000" },
    { User_ID: "U003", Name: "Kanya Student", Role: "Student", Email: "kanya@example.com", Phone: "083-000-0000" },
    { User_ID: "U004", Name: "Anan Student", Role: "Student", Email: "anan@example.com", Phone: "084-000-0000" }
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
    { Package_ID: "P001", Student_ID: "U003", Total_Slots: 10, Remaining_Slots: 7 },
    { Package_ID: "P002", Student_ID: "U004", Total_Slots: 5, Remaining_Slots: 4 }
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
    selectedDateStr: "" // Filter sessions list by specific date (e.g. "2026-07-10")
};

// ==========================================
// 4. DATABASE SERVICE (localStorage layer)
// ==========================================
const defaultSettings = {
    Group_Trial_Price: 300,
    Group_Normal_Price: 600,
    Group_Min_Participants: 2,
    PT_Price_1: 1800,
    PT_Price_10: 1450,
    PT_Price_20: 1350
};

const db = {
    get: (key) => JSON.parse(localStorage.getItem(`LJD_pt_${key}`)),
    set: (key, data) => localStorage.setItem(`LJD_pt_${key}`, JSON.stringify(data)),

    init: (force = false) => {
        if (force || !localStorage.getItem("LJD_pt_users")) {
            db.set("users", defaultUsers);
            db.set("sessions", defaultSessions);
            db.set("bookings", defaultBookings);
            db.set("packages", defaultPackages);
            db.set("settings", defaultSettings);
        }
        if (!localStorage.getItem("LJD_pt_settings")) {
            db.set("settings", defaultSettings);
        }
    },

    users: {
        list: () => db.get("users") || [],
        save: (list) => db.set("users", list),
        get: (id) => db.users.list().find(u => u.User_ID === id)
    },
    sessions: {
        list: () => db.get("sessions") || [],
        save: (list) => db.set("sessions", list),
        get: (id) => db.sessions.list().find(s => s.Session_ID === id)
    },
    bookings: {
        list: () => db.get("bookings") || [],
        save: (list) => db.set("bookings", list),
        get: (id) => db.bookings.list().find(b => b.Booking_ID === id),
        filterBySession: (sessionId) => db.bookings.list().filter(b => b.Session_ID === sessionId && b.Status === "Confirmed"),
        filterByStudent: (studentId) => db.bookings.list().filter(b => b.Student_ID === studentId)
    },
    packages: {
        list: () => db.get("packages") || [],
        save: (list) => db.set("packages", list),
        getByStudent: (studentId) => db.packages.list().find(p => p.Student_ID === studentId)
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
    document.getElementById("lbl-btn-login").textContent = getT("btnSignIn");
    document.getElementById("lbl-demo-accounts").textContent = getT("demoAccounts");
    document.getElementById("lbl-reg-name").textContent = getT("regName");
    document.getElementById("lbl-reg-email").textContent = getT("regEmail");
    document.getElementById("lbl-reg-phone").textContent = getT("regPhone");
    document.getElementById("lbl-btn-register").textContent = getT("btnCreateAccount");

    // Student labels
    document.getElementById("lbl-student-credits-title").textContent = getT("remainingCredits");
    document.getElementById("lbl-next-session-title").textContent = getT("nextSession");
    document.getElementById("lbl-available-sessions-title").textContent = getT("bookSessionTitle");
    document.getElementById("btn-filter-all").textContent = getT("all");
    document.getElementById("btn-filter-1on1").textContent = getT("oneOnOne");
    document.getElementById("btn-filter-group").textContent = getT("groupClass");
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
    document.getElementById("lbl-tab-settings").textContent = getT("tabSettings");

    document.getElementById("lbl-manage-students-title").textContent = getT("manageStudents");
    document.getElementById("lbl-btn-add-student").textContent = getT("addStudentBtn");

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
    document.getElementById("lbl-create-session-modal-title").textContent = getT("createSessionModalTitle");
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

    document.getElementById("lbl-user-modal-title").textContent = getT("addUserModalTitle");
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
    const remSlots = pkg ? pkg.Remaining_Slots : 0;
    const totSlots = pkg ? pkg.Total_Slots : 0;

    document.getElementById("student-credits-value").textContent = remSlots;
    document.getElementById("student-total-slots").textContent = `/ ${totSlots}`;
    document.getElementById("student-package-details").textContent = pkg
        ? `${getT("packageIdLbl")}: ${pkg.Package_ID}`
        : `${getT("packageIdLbl")}: None`;

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

    const availSessionsList = document.getElementById("student-available-sessions-list");
    let availableSessions = sessions.filter(s => s.Status !== "Finished");

    // Filter by calendar date
    if (state.selectedDateStr) {
        availableSessions = availableSessions.filter(s => s.Date === state.selectedDateStr);
    }

    // Filter type
    if (state.filterStudentSessions === "1on1") {
        availableSessions = availableSessions.filter(s => s.Class_Type === "1 on 1");
    } else if (state.filterStudentSessions === "group") {
        availableSessions = availableSessions.filter(s => s.Class_Type === "Group Class");
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

            // Price rules display
            const settings = db.settings.get();
            let priceText = "";
            if (s.Class_Type === "1 on 1") {
                priceText = `${settings.PT_Price_1} NT`;
            } else {
                const studentGroupBookingsCount = db.bookings.list().filter(b => b.Student_ID === state.currentStudentId && b.Status === "Confirmed" && db.sessions.get(b.Session_ID)?.Class_Type === "Group Class").length;
                if (studentGroupBookingsCount === 0) {
                    priceText = `${settings.Group_Trial_Price} NT (Trial) / ${settings.Group_Normal_Price} NT`;
                } else {
                    priceText = `${settings.Group_Normal_Price} NT`;
                }
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
                        <div class="session-detail-row">
                            <span>${state.language === "zh-tw" ? "費用:" : "Price:"}</span>
                            <strong>${priceText}</strong>
                        </div>
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
                    <div class="session-card-footer">
                        <button class="btn btn-secondary" onclick="openParticipantsModal('${s.Session_ID}')">
                            <i class="fa-solid fa-users"></i> ${getT("viewParticipants")}
                        </button>
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
    const tabs = ["students", "sessions", "export", "settings"];
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
            const creditsText = pkg
                ? `<strong>${pkg.Remaining_Slots}</strong> / ${pkg.Total_Slots}`
                : `<span class="text-muted">-</span>`;

            let roleClass = "badge-role-student";
            if (u.Role === "Admin") roleClass = "badge-role-admin";
            if (u.Role === "Trainer") roleClass = "badge-role-trainer";

            const actions = u.Role === "Student"
                ? `<button class="btn btn-secondary btn-sm" onclick="openEditPackageModal('${u.User_ID}')"><i class="fa-solid fa-pen-to-square"></i> ${state.language === 'zh-tw' ? '加額/修改' : 'Adjust Credits'}</button>`
                : `<span class="text-muted">-</span>`;

            return `
                <tr>
                    <td><strong>${u.User_ID}</strong></td>
                    <td>${u.Name}</td>
                    <td>${u.Email}</td>
                    <td>${u.Phone || "-"}</td>
                    <td><span class="badge-role ${roleClass}">${u.Role}</span></td>
                    <td>${creditsText}</td>
                    <td class="cell-actions">${actions}</td>
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
                    <td>
                        <button class="btn btn-secondary btn-sm" onclick="openParticipantsModal('${s.Session_ID}')">
                            <i class="fa-solid fa-eye"></i> ${getT("viewParticipants")}
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
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
    }
}

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

    // Check if student has remaining slots (only if it is a 1 on 1 class)
    const packages = db.packages.list();
    const studentPackage = packages.find(p => p.Student_ID === state.currentStudentId);
    if (session.Class_Type === "1 on 1") {
        if (!studentPackage || studentPackage.Remaining_Slots <= 0) {
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

    // Deduct remaining slots only if it is a 1 on 1 class
    if (session.Class_Type === "1 on 1" && studentPackage) {
        studentPackage.Remaining_Slots -= 1;
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

    // Cancel the booking (we will just set status to Cancelled)
    booking.Status = "Cancelled";
    db.bookings.save(bookings);

    // Refund credit to student package
    const packages = db.packages.list();
    const studentPackage = packages.find(p => p.Student_ID === booking.Student_ID);
    if (studentPackage) {
        studentPackage.Remaining_Slots = Math.min(studentPackage.Total_Slots, studentPackage.Remaining_Slots + 1);
        db.packages.save(packages);
    }

    // Restore session status to Available if it was full
    const sessions = db.sessions.list();
    const session = sessions.find(s => s.Session_ID === booking.Session_ID);
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
document.getElementById("btn-open-create-session").addEventListener("click", () => {
    // Set trainers choices dynamically
    const selectTrainer = document.getElementById("session-trainer");
    const trainers = db.users.list().filter(u => u.Role === "Trainer");

    selectTrainer.innerHTML = trainers.map(t => `<option value="${t.User_ID}">${t.Name}</option>`).join("");
    // Default trainer
    selectTrainer.value = state.currentTrainerId;

    // Disallow Trainer from scheduling for other Trainers
    if (state.currentUser && state.currentUser.Role === "Trainer") {
        selectTrainer.disabled = true;
    } else {
        selectTrainer.disabled = false;
    }

    // Set default date to today
    const dateInput = document.getElementById("session-date");
    const today = new Date().toISOString().substring(0, 10);
    dateInput.value = today;

    // Default start time
    document.getElementById("session-start").value = "10:00";
    document.getElementById("session-end").value = "11:00";

    openModal("modal-create-session");
});

document.getElementById("btn-close-create-session").addEventListener("click", () => closeModal("modal-create-session"));
document.getElementById("btn-cancel-create-session").addEventListener("click", () => closeModal("modal-create-session"));

document.getElementById("session-class-type").addEventListener("change", (e) => {
    const capacityInput = document.getElementById("session-capacity");
    if (e.target.value === "1 on 1") {
        capacityInput.value = 1;
        capacityInput.setAttribute("max", "1");
    } else {
        capacityInput.value = 3;
        capacityInput.setAttribute("max", "100"); // Standard is 3 but can change
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

    // Check for trainer session overlap on the same day
    const overlap = sessions.some(s => {
        if (s.Trainer_ID !== trainerId || s.Date !== date || s.Status === "Finished") return false;
        return s.Start_Time < end && s.End_Time > start;
    });

    if (overlap) {
        showToast(state.language === "zh-tw" ? "該時段已有排課，請選擇其他時間！" : "Trainer already has a session scheduled during this time!", "error");
        return;
    }

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
});


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
    document.getElementById("form-user").reset();
    document.getElementById("package-fields").style.display = "block"; // default shown
    openModal("modal-user");
});

document.getElementById("btn-close-user").addEventListener("click", () => closeModal("modal-user"));
document.getElementById("btn-cancel-user").addEventListener("click", () => closeModal("modal-user"));

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

    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const phone = document.getElementById("user-phone").value;
    const role = document.getElementById("user-role").value;

    const users = db.users.list();
    const newUserId = generateId("U", users, "User_ID");

    const newUser = {
        User_ID: newUserId,
        Name: name,
        Role: role,
        Email: email,
        Phone: phone
    };

    users.push(newUser);
    db.users.save(users);

    // Package setup if student
    if (role === "Student") {
        const total = parseInt(document.getElementById("package-total").value) || 0;
        const remaining = parseInt(document.getElementById("package-remaining").value) || 0;

        const packages = db.packages.list();
        const newPkgId = generateId("P", packages, "Package_ID");

        const newPkg = {
            Package_ID: newPkgId,
            Student_ID: newUserId,
            Total_Slots: total,
            Remaining_Slots: remaining
        };
        packages.push(newPkg);
        db.packages.save(packages);
    }

    showToast(getT("userCreatedSuccess"), "success");
    closeModal("modal-user");
    renderAdminView();
});


// modal: Adjust Credits slots
window.openEditPackageModal = function (studentId) {
    const student = db.users.get(studentId);
    if (!student) return;

    const pkg = db.packages.getByStudent(studentId);

    document.getElementById("edit-pkg-student-id").value = studentId;
    document.getElementById("edit-pkg-student-name").textContent = student.Name;
    document.getElementById("edit-pkg-total").value = pkg ? pkg.Total_Slots : 10;
    document.getElementById("edit-pkg-remaining").value = pkg ? pkg.Remaining_Slots : 10;

    openModal("modal-package-edit");
};

document.getElementById("btn-close-package-edit").addEventListener("click", () => closeModal("modal-package-edit"));
document.getElementById("btn-cancel-package-edit").addEventListener("click", () => closeModal("modal-package-edit"));

document.getElementById("form-package-edit").addEventListener("submit", (e) => {
    e.preventDefault();

    const studentId = document.getElementById("edit-pkg-student-id").value;
    const total = parseInt(document.getElementById("edit-pkg-total").value);
    const remaining = parseInt(document.getElementById("edit-pkg-remaining").value);

    const packages = db.packages.list();
    const pkgIndex = packages.findIndex(p => p.Student_ID === studentId);

    if (pkgIndex !== -1) {
        packages[pkgIndex].Total_Slots = total;
        packages[pkgIndex].Remaining_Slots = remaining;
    } else {
        // Create new one if somehow missing
        const newPkgId = generateId("P", packages, "Package_ID");
        packages.push({
            Package_ID: newPkgId,
            Student_ID: studentId,
            Total_Slots: total,
            Remaining_Slots: remaining
        });
    }

    db.packages.save(packages);
    showToast(getT("creditsUpdatedSuccess"), "success");
    closeModal("modal-package-edit");
    renderAdminView();
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

// Switch Student Class Available Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");

        state.filterStudentSessions = e.target.getAttribute("data-filter");
        renderStudentView();
    });
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
window.clearDateFilter = function() {
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
    
    if (!identifier) {
        showToast(getT("invalidEmail"), "error");
        return;
    }

    const users = db.users.list();
    const user = users.find(u => u.Email === identifier || u.Phone === identifier);

    if (user) {
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

    const users = db.users.list();
    
    // Check if email or phone already exists
    const exists = users.some(u => u.Email === email || u.Phone === phone);
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
        Phone: phone
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

// ==========================================
// 13. INITIALIZATION RUN
// ==========================================
applyLanguage(); // Boot application
