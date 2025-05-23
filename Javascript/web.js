
let ofs = (e) => {
    let  reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function(e) {
        // 获取文件内容并显示在指定位置
        document.getElementById('fileContent').textContent = e.target.result;
    };
}
//将内容或子元素放到容器中，这里是放到div中，这个时候div里面就有了内容

// 图片轮播
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function changeSlide() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
setInterval(changeSlide, 3000);

//动画延时播放
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ani-ac').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.8}s`;
    });
});


//播放视频
function openModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    modal.style.display = 'flex';
    video.play();
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    video.pause();
    modal.style.display = 'none';
}

// 点击模态框背景关闭
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 获取header元素
    const header = document.getElementById('pageHeader');
    
    // 获取header的高度（包括padding和border）
    const headerHeight = header.offsetHeight;
    
    // 获取图片元素
    const myeee = document.getElementById('conImage');
    
    // 设置图片高度为header高度的3倍
    myeee.style.height = (headerHeight * 3) + 'px';
    myeee.style.marginTop = '-' + (headerHeight*1.5) + 'px';
    // 在控制台输出信息以便调试
    console.log('Header高度:', headerHeight, 'px');
    console.log('图片设置高度:', headerHeight * 3, 'px');
    console.log('图片设置负高度:', '-' + headerHeight, 'px');
    // 可选：监听窗口大小变化，重新计算
    window.addEventListener('resize', function() {
        //如果宽度小于768px，则将图片高度设置100%
    if (window.innerWidth < 768) {
        document.querySelector('.about-me').style.height = '100%';
    }
        
    if (window.innerWidth > 768) {
        const newHeaderHeight = header.offsetHeight;
        myeee.style.marginTop = '-' + newHeaderHeight + 'px';
        myeee.style.height = (newHeaderHeight * 3) + 'px';
        console.log('窗口大小改变，重新设置图片高度:', newHeaderHeight * 3, 'px');
        console.log('窗口大小改变，重新设置图片负高度:', '-' + newHeaderHeight*1.5, 'px');
    }
        
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutMe = document.querySelector(".about-me");
    const contentSection = document.querySelector(".content-section");

    if (aboutMe && contentSection) {
        aboutMe.addEventListener("animationend", function () {
            // 显示 content-section
            contentSection.classList.remove("hide");
            contentSection.style.opacity = "1";
            contentSection.style.visibility = "visible";

            void contentSection.offsetWidth; // 强制 reflow

            // 给每个 .myself 添加动画
            const items = contentSection.querySelectorAll(".myself");
            items.forEach((el, index) => {
                el.style.animation = "ani_active 1s ease forwards";
                el.style.animationDelay = `${index * 0.8}s`;
            });
        });
    }
});

function openWechatModal() {
    document.getElementById("wechatModal").style.display = "block";
}

function closeWechatModal() {
    document.getElementById("wechatModal").style.display = "none";
}

// 给关闭按钮绑定点击事件
document.querySelector(".close-btn").addEventListener("click", closeWechatModal);

// 点击背景也可以关闭
window.addEventListener("click", function (event) {
    const modal = document.getElementById("wechatModal");
    if (event.target === modal) {
        closeWechatModal();
    }
});