# แผนการปรับปรุงระบบแจ้งเตือนทางอีเมล (Email Notification System Plan)

แผนงานนี้มีวัตถุประสงค์เพื่อเพิ่มระบบส่งการแจ้งเตือนทางอีเมล (Email Notification) แบบสองภาษา (**English & Traditional Chinese**) ผ่าน Google Apps Script (GmailApp/MailApp) สองกรณีดังนี้:
1. **เมื่อมีคนจองคลาส**: ส่งอีเมลแจ้งเตือนไปยัง Personal Trainer ของคลาสนั้นๆ พร้อมรายละเอียดคลาสและผู้จอง
2. **เมื่อมีคนขอเพิ่มเครดิต**: ส่งอีเมลแจ้งเตือนไปยัง Admin ทุกคนเพื่อแจ้งรายละเอียดการขอซื้อ/เพิ่มเครดิต

---

## User Review Required

> [!NOTE]
> ระบบแจ้งเตือนนี้จะใช้ฟังก์ชัน `MailApp.sendEmail` ของ Google Apps Script ในการส่งอีเมล ซึ่งจะถูกส่งออกจากบัญชี Google ของเจ้าของ Web App (หรือสิทธิ์การรัน Web App) ไปยังอีเมลของ Trainer และ Admin ตามข้อมูลในชีต

> [!WARNING]
> การจัดส่งอีเมลต้องอาศัยข้อมูลอีเมลที่ถูกต้องของ Trainer และ Admin ในชีต/ระบบ หากกรอกอีเมลผิดหรือไม่มีข้อมูล ระบบจะข้ามการส่งอีเมลและทำงานต่อโดยไม่ส่งผลกระทบต่อการทำงานหลัก

---

## Proposed Changes

### [Backend] Google Apps Script

#### [MODIFY] [Code.gs](file:///Users/phatcharin/Documents/AI%20Agent/Code.gs)
- ปรับปรุงฟังก์ชัน `doPost(e)`:
  - เพิ่มการรองรับ `action: "sendCreditRequestEmail"` เพื่อส่งอีเมลแจ้งแอดมินเมื่อมีนักเรียนส่งคำขอเครดิต
  - ในส่วนของ `action: "saveData"`: ก่อนที่จะอัปเดตข้อมูล Bookings ลงชีต จะเปรียบเทียบกับข้อมูล Bookings เก่าในระบบเพื่อตรวจจับว่ามี **การจองใหม่ที่เป็น Confirmed** หรือไม่
  - หากพบการจองใหม่ ระบบจะค้นหารายละเอียดคลาสเรียนจาก `Sessions` (ค้นหาชื่อเทรนเนอร์และอีเมลจาก `Users` ใน Payload) และค้นหาข้อมูลผู้เรียน จากนั้นจะส่งอีเมลหาเทรนเนอร์โดยอัตโนมัติ
  - เพิ่มฟังก์ชันตัวช่วย `sendEmailHtml(to, subject, htmlBody)` และการสร้าง HTML Template แบบสองภาษาสำหรับอีเมลแจ้งเตือนให้สวยงามและน่าเชื่อถือ (Premium Bilingual Design)

---

### [Frontend] Client Web App

#### [MODIFY] [app.js](file:///Users/phatcharin/Documents/AI%20Agent/app.js)
- ปรับปรุงในส่วน Event Listener ของฟอร์มซื้อแพ็กเกจ `#form-buy-package`:
  - หลังจากบันทึกประวัติการขอเพิ่มเครดิต (Purchase Request) ใน Local Storage เรียบร้อยแล้ว ให้ทำการเรียก API ส่งข้อมูลแจ้งเตือนไปยัง Apps Script ด้วย `action: "sendCreditRequestEmail"`
  - ส่งข้อมูลชื่อนักเรียน, ประเภทเครดิต, จำนวนเครดิต, ราคารวม และรายชื่อผู้ใช้ปัจจุบันเพื่อให้อีเมลสามารถค้นหาอีเมลของ Admin ได้

---

## Verification Plan

### Automated/Manual Tests
- **ขั้นตอนการจองคลาส**:
  1. ล็อกอินเข้าใช้งานด้วยบัญชีนักเรียน (Student)
  2. กดจองคลาส (เช่น คลาสของ Somchai Trainer)
  3. ตรวจสอบใน Log หรือการส่งออกอีเมลจริงว่ามีอีเมลส่งไปยัง `somchai.pt@example.com` พร้อมรายละเอียด
- **ขั้นตอนการขอเพิ่มเครดิต**:
  1. ล็อกอินเข้าใช้งานด้วยบัญชีนักเรียน (Student)
  2. กดขอซื้อเครดิต (เช่น ซื้อ 10 Sessions)
  3. ตรวจสอบใน Log หรือการส่งออกอีเมลจริงว่ามีอีเมลแจ้งเตือนหาแอดมิน `phatcharin@example.com` พร้อมราคาและจำนวนเครดิต
