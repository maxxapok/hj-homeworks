'use strict';
const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    PI = Math.PI;
canvas.style.background = 'black';
const count = Math.random() * (400 - 200) + 200;

function showStars(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < count; ++i) {
        ctx.beginPath();
        const radius = Math.random() * (1.1 - 0) + 0,
            x = Math.random() * (300 - 0) + 0,
            y = Math.random() * (150 - 0) + 0;
        ctx.globalAlpha = Math.random() * (1 - 0.8) + 0.8;
        const colorsArr = ['#ffffff', '#ffe9c4', '#d4fbff'];
        ctx.fillStyle = colorsArr[Math.floor(Math.random() * colorsArr.length)];
        ctx.arc(x, y, radius, 0, 2 * PI);
        ctx.fill();
        // ctx.closePath();
    }
}

canvas.addEventListener('click', showStars);
// document.addEventListener('DOMContentLoaded', showStars);
showStars();