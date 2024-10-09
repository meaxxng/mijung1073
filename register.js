document.addEventListener('DOMContentLoaded', function() { // เมื่อหน้าเว็บโหลดเสร็จจะเริ่มฟังก์ชันนี้

    function validateForm() { // ฟังก์ชันสำหรับตรวจสอบฟอร์มก่อนการส่ง
        const form = document.forms['myRegister']; // เข้าถึงฟอร์มด้วยชื่อ 'myRegister'
        const password = form['password'].value; // ดึงค่ารหัสผ่านจากฟอร์ม
        const retypePassword = form['retype_password'].value; // ดึงค่าการยืนยันรหัสผ่านจากฟอร์ม
        let errorMessage = document.getElementById("errormsg"); // ตำแหน่งสำหรับแสดงข้อความแจ้งเตือน
        errorMessage.innerText = ''; // ลบข้อความแจ้งเตือนเก่าทิ้ง

        for (let i = 0; i < form.length; i++) {  // ตรวจสอบว่ามีฟิลด์ที่บังคับกรอกว่างอยู่หรือไม่
            if (form[i].required && form[i].value === '') { // เช็คฟิลด์ที่บังคับกรอกว่ามีค่าว่างไหม
                errorMessage.innerText = "Please complete all required fields"; // แสดงข้อความแจ้งเตือนถ้าข้อมูลไม่ครบ
                form[i].focus(); // โฟกัสฟิลด์แรกที่ยังไม่ได้กรอก
                return false; // หยุดการส่งฟอร์ม
            }
        }

        if (password !== retypePassword) {  // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกันมั้ย
            errorMessage.innerText = "Password incorrect. Please verify and try again."; // แจ้งเตือนถ้ารหัสผ่านไม่ตรงกัน
            form['retype_password'].focus(); // โฟกัสไปที่ช่องยืนยันรหัสผ่าน
            return false; // หยุดการส่งฟอร์ม
        }

        return true; // หากตรวจสอบผ่านทั้งหมด ให้ส่งฟอร์มได้
    }

    const form = document.getElementById('myRegister'); // เข้าถึงฟอร์มโดยใช้ id 'myRegister'
    form.onsubmit = function() {
        return validateForm(); 
    };
});