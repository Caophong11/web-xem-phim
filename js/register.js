function register(event) {
    event.preventDefault();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirm_password = document.getElementById('confirm_password').value.trim();
    let regMessage = document.getElementById('regMessage')

    let LowerCaseLetter = /[a-z]/g;
    let UpperCaseLetter = /[A-Z]/g;
    let Numbers = /[0-9]/g;

    if (!username || !password || !confirm_password) {
        regMessage.innerText = "Bạn phải nhập hết thông tin!";
        return;
    }
    if (password.length < 8) {
        regMessage.innerText = "Mật khẩu phải có 8 kí tự trở lên";
        return;
    }
    if (!LowerCaseLetter.test(password)) {
        regMessage.innerText = "Mật khẩu phải có kí tự thường";
        return;
    }
    if (!UpperCaseLetter.test(password)) {
        regMessage.innerText = "Mật khẩu phải có kí tự in hoa";
        return;
    }
    if (!Numbers.test(password)) {
        regMessage.innerText = "Mật khẩu phải chứa số"
        return;
    }
    let user = {
        username: username,
        password: password,
        confirm_password: confirm_password,
    };
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};


    if (users[username]) {
        regMessage.innerText = "Tên tài khoản đã tồn tại!";
    } else {
        users[username] = user;
        localStorage.setItem('users', JSON.stringify(users));
        regMessage.innerText = "Đăng ký thành công!"
        regMessage.style.color = 'green';
    }


}


// document.getElementById("")

