// 预加载图片和音乐
const images = [
'https://cdn.glitch.global/23645e7b-40c3-4265-bbc6-e327e671ff2c/photo1.jpg?v=1719329636343',
'https://cdn.glitch.global/23645e7b-40c3-4265-bbc6-e327e671ff2c/photo2.jpg?v=1719329638032',
'https://cdn.glitch.global/23645e7b-40c3-4265-bbc6-e327e671ff2c/photo3.jpg?v=1719329639873',
'https://cdn.glitch.global/23645e7b-40c3-4265-bbc6-e327e671ff2c/photo4.jpg?v=1719329641487',
'https://cdn.glitch.global/23645e7b-40c3-4265-bbc6-e327e671ff2c/photo5.jpg?v=1719329643046'
];
const audio = new Audio('https://cdn.glitch.global/3d6901d6-b481-4ce6-b4a8-7d7b87cc95b4/music.mp3?v=1716213383323');

function preload() {
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
    audio.load();
}

document.addEventListener('DOMContentLoaded', () => {
    preload();
});

// 照片轮播
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    document.body.style.backgroundImage = `url(${slides[index].src})`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // 每3秒切换一张照片

// 音乐控制
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

musicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = '暂停音乐';
    } else {
        backgroundMusic.pause();
        musicButton.textContent = '播放音乐';
    }
});

// 惊喜按钮
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseButton.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
    if (!surpriseMessage.classList.contains('hidden')) {
        alert('魔法 魔法 我要你永远陪着我  Biu~ Biu~ Biu~');
    }
});
