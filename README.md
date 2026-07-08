a

---

## 🌐 การนำขึ้นระบบออนไลน์ / โฮสติ้ง (Deployment Guide)

เนื่องจากระบบนี้เป็นเว็บไซต์ประเภท **Static Web Application** (ทำงานบน Browser และบันทึกข้อมูลจำลองไว้ที่ LocalStorage) คุณจึงสามารถนำไปอัปโหลดขึ้นโฮสติ้งฟรีเพื่อใช้งานจริงหรือแชร์ให้ผู้อื่นทดลองใช้งานได้อย่างง่ายดาย:

### 1. โฮสต์ด้วย Netlify (แนะนำ - ง่ายที่สุด)
1. สมัครใช้งานเว็บ [Netlify](https://www.netlify.com/)
2. ไปที่หน้าหลักของ Dashboard เลื่อนลงมายังส่วน **Drag and drop your site folder here**
3. ลากโฟลเดอร์โครงการ `AI Agent` (ที่มีไฟล์ `index.html`, `app.js`, `styles.css`) ไปวาง
4. เสร็จสิ้น! คุณจะได้รับลิงก์ URL (เช่น `https://random-name.netlify.app`) สำหรับส่งให้ผู้ใช้จองคลาสเรียนได้ทันที

### 2. โฮสต์ด้วย GitHub Pages
1. สร้าง Repository ใหม่บน GitHub และอัปโหลดไฟล์โครงการขึ้นไป
2. ไปที่เมนู **Settings** > **Pages** ของ Repository นั้นๆ
3. ในส่วน **Build and deployment** > ให้เลือก Source เป็น **Deploy from a branch** และเลือกสาขาหลัก (เช่น `main`)
4. กดบันทึก ระบบจะสร้าง URL ฟรีให้คุณภายใน 1-2 นาที

---

## 📂 โครงสร้างไฟล์ในโครงการ

- **[index.html](file:///Users/phatcharin/Documents/AI%20Agent/index.html)** - โครงสร้างหลักของหน้าต่างระบบ ส่วนแสดงผล Login และส่วนการจอง
- **[styles.css](file:///Users/phatcharin/Documents/AI%20Agent/styles.css)** - ดีไซน์สไตล์ระดับพรีเมียม (Dark Glassmorphism) และปฏิทินตอบสนอง
- **[app.js](file:///Users/phatcharin/Documents/AI%20Agent/app.js)** - ตรรกะเบื้องหลังทั้งหมด ระบบบันทึกผู้ใช้, ปฏิทินกรองวัน, กฎการจองและหักเครดิต
- **[start.command](file:///Users/phatcharin/Documents/AI%20Agent/start.command)** - สคริปต์สั้นดับเบิ้ลคลิกเปิดโปรเจกต์ทันทีสำหรับ macOS
- **[start.sh](file:///Users/phatcharin/Documents/AI%20Agent/start.sh)** - สคริปต์เปิดรันโปรเจกต์ผ่าน Terminal
- **[walkthrough.md](file:///Users/phatcharin/Documents/AI%20Agent/walkthrough.md)** - รายงานบันทึกสรุปการแก้ไขระบบ
- **[implementation_plan.md](file:///Users/phatcharin/Documents/AI%20Agent/implementation_plan.md)** - รายละเอียดและโครงร่างฟังก์ชันในการพัฒนาระบบ
- **[task.md](file:///Users/phatcharin/Documents/AI%20Agent/task.md)** - เช็คลิสต์รายการงานที่สมบูรณ์แล้ว�อ (เบอร์โทรและอีเมล)

### 3. มุมมองผู้ดูแลระบบ (Admin View)
- **Students & Packages**: แสดงตารางรายชื่อผู้เรียนทั้งหมดในระบบ พร้อมสิทธิ์การปรับแต่ง/เพิ่มเครดิต (Adjust Credits) ได้ตามต้องการ
- **All Sessions**: สรุปตารางคลาสเรียนทั้งหมด และดูรายชื่อนักเรียนที่จองในคลาสนั้นๆ ได้ทันที
- **Data Export**: ปุ่มส่งออกข้อมูลแต่ละตาราง (Users, Sessions, Bookings, Packages) ออกมาเป็นไฟล์ **CSV (UTF-8 BOM)** เพื่อนำไปเปิดใน Microsoft Excel หรือนำไปวางลงใน Google Sheets
- **Database Utilities**: ปุ่มรีเซ็ตข้อมูลทั้งหมดกลับเป็นข้อมูลตั้งต้นเพื่อใช้ทดสอบใหม่

---

## 🌐 การนำขึ้นระบบออนไลน์ / โฮสติ้ง (Deployment Guide)

เนื่องจากระบบนี้เป็นเว็บไซต์ประเภท **Static Web Application** (ทำงานบน Browser และบันทึกข้อมูลจำลองไว้ที่ LocalStorage) คุณจึงสามารถนำไปอัปโหลดขึ้นโฮสติ้งฟรีเพื่อใช้งานจริงหรือแชร์ให้ผู้อื่นทดลองใช้งานได้อย่างง่ายดาย:

### 1. โฮสต์ด้วย Netlify (แนะนำ - ง่ายที่สุด)
1. สมัครใช้งานเว็บ [Netlify](https://www.netlify.com/)
2. ไปที่หน้าหลักของ Dashboard เลื่อนลงมายังส่วน **Drag and drop your site folder here**
3. ลากโฟลเดอร์โครงการ `AI Agent` (ที่มีไฟล์ `index.html`, `app.js`, `styles.css`) ไปวาง
4. เสร็จสิ้น! คุณจะได้รับลิงก์ URL (เช่น `https://random-name.netlify.app`) สำหรับส่งให้ผู้ใช้จองคลาสเรียนได้ทันที

### 2. โฮสต์ด้วย GitHub Pages
1. สร้าง Repository ใหม่บน GitHub และอัปโหลดไฟล์โครงการขึ้นไป
2. ไปที่เมนู **Settings** > **Pages** ของ Repository นั้นๆ
3. ในส่วน **Build and deployment** > ให้เลือก Source เป็น **Deploy from a branch** และเลือกสาขาหลัก (เช่น `main`)
4. กดบันทึก ระบบจะสร้าง URL ฟรีให้คุณภายใน 1-2 นาที

---

## 📂 โครงสร้างไฟล์ในโครงการ

- **[index.html](file:///Users/phatcharin/Documents/AI%20Agent/index.html)** - โครงสร้างหลักและหน้าต่าง Popup/Modal
- **[styles.css](file:///Users/phatcharin/Documents/AI%20Agent/styles.css)** - ดีไซน์สไตล์ระดับพรีเมียม (Dark Glassmorphism) และรองรับ Responsive บนสมาร์ทโฟน
- **[app.js](file:///Users/phatcharin/Documents/AI%20Agent/app.js)** - ตรรกะเบื้องหลังทั้งหมด ระบบจัดการสิทธิ์การจอง และระบบจัดเก็บข้อมูลลง LocalStorage
- **[start.sh](file:///Users/phatcharin/Documents/AI%20Agent/start.sh)** - สคริปต์รันโปรเจกต์ด้วยคำสั่งสั้นๆ
