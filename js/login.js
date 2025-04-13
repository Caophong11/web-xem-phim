function login(event) {
    event.preventDefault();
    let username = document.getElementById('login_user').value.trim();
    let password = document.getElementById('login_password').value.trim();
    let Login_Message = document.getElementById('Login_Message');

    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
    console.log(users);

    let storedUser = users[username];

    if (storedUser && storedUser.password === password) {
        alert("Đăng nhập thành công!!!")
        window.location.href = 'index.html';
    } else {
        Login_Message.innerText = "Tài khoản hoặc mật khẩu đã tồn tại";
        Login_Message.style.color = 'red';
    }
}
