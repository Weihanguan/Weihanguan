document.addEventListener('mousemove', function (e) {
    const layer = document.getElementById('bgLayer');

    const x = e.clientX / window.innerWidth; // 0 ~ 1
    const y = e.clientY / window.innerHeight;

    const moveX = (x - 0.5) * 40;
    const moveY = (y - 0.5) * 40;

    layer.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) scale(1.05)`;
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // 阻止默认提交行为

        const username = form.username.value.trim();
        const password = form.password.value;

        if (!username || !password) {
            alert("请输入用户名和密码");
            return;
        }

        if (password === '123456') {
            // 登录成功，跳转 main.html
            setTimeout(() => {
                window.location.href = '../main.html';
            }, 500);
        } else {
            alert("账号或密码错误");
        }
    });
});