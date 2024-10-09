function loginLoad() {
    const usernameField = document.getElementById("username"); // เลือกฟิลด์ username
    const passwordField = document.querySelector("input[name='password']"); // เลือกฟิลด์ password
    const clearButton = document.querySelector("input[type='reset']"); // เลือกปุ่ม Reset
    const loginError = document.getElementById("loginError"); // เลือกตำแหน่งสำหรับแสดงข้อความแจ้งเตือน

    usernameField.addEventListener('input', function() { // เคลียร์ข้อความแจ้งเตือนเมื่อเริ่มพิมพ์ในฟิลด์ username
        loginError.innerText = ''; // ลบข้อความแจ้งเตือน
    });

    passwordField.addEventListener('input', function() {
        loginError.innerText = ''; 
    });

    clearButton.addEventListener('click', function() {
        loginError.innerText = ''; 
    });
}

function checkLogin() {
    const username = document.getElementById("username").value; // ดึงค่าจากฟิลด์ username
    const password = document.querySelector("input[name='password']").value;

    const registeredUser = { // ข้อมูลผู้ใช้ที่ลงทะเบียน (เปลี่ยน "your_username" และ "your_password" เป็นข้อมูลจริง)
        username: "your_username", 
        password: "your_password"  
    };

    const loginError = document.getElementById("loginError"); // ตำแหน่งสำหรับแสดงข้อความแจ้งเตือน
    loginError.innerText = ''; // ลบข้อความแจ้งเตือนเก่าทิ้ง

    // ตรวจสอบว่าชื่อผู้ใช้และรหัสผ่านตรงกับข้อมูลที่ลงทะเบียนไว้หรือไม่
    if (username === registeredUser.username && password === registeredUser.password) {
        return true; 
    } else {
        loginError.innerText = "Username or password is incorrect. Please try again."; // แสดงข้อความแจ้งเตือนเมื่อชื่อผู้ใช้หรือรหัสผ่านผิด
        return false; 
    }
}			