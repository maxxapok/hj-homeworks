'use strict';

const canvas = document.getElementById('wall'),
    ctx = canvas.getContext('2d'),
    crosses = [],
    circles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function getRandomFloat(min, max) {
    const rand = Math.random() * (max - min) + min;
    return rand;
}

function getRandomTimeFunction(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

const timeFunctions = [
    function nextPoint(x, y, time) {
        return {
            x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
            y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
        };
    },
    function nextPoint(x, y, time) {
        return {
            x: x + Math.sin((x + (time / 10)) / 100) * 5,
            y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
        }
    }
];

function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.size = getRandomFloat(0.1, 0.6);
    this.timeFunction = getRandomTimeFunction(timeFunctions);
}

function Сross(x, y) {
    this.x = x;
    this.y = y;
    this.size = getRandomFloat(0.1, 0.6);
    this.timeFunction = getRandomTimeFunction(timeFunctions);
    this.angle = getRandomInteger(0, 360) * Math.PI / 180;
    this.speed = getRandomFloat(-0.2, 0.2);
}

const countObjectsOneType = getRandomInteger(25, 100);

for (let i = 0; i < countObjectsOneType; i++) {
    const arcX = getRandomInteger(0, window.innerWidth);
    const arcY = getRandomInteger(0, window.innerHeight);

    const circle = new Circle(arcX, arcY);
    circles.push(circle);

    const crossX = getRandomInteger(0, window.innerWidth);
    const crossY = getRandomInteger(0, window.innerHeight);

    const cross = new Сross(crossX, crossY);
    crosses.push(cross);
}

const start = Date.now();

const timer = setInterval(function() {
    const timePassed = Date.now() - start;
    draw(timePassed);
}, 50);

function draw(timePassed) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < countObjectsOneType; i++) {
        const coordСircle = circles[i].timeFunction(circles[i].x, circles[i].y, timePassed);

        ctx.beginPath();
        ctx.arc(coordСircle.x, coordСircle.y, 12 * circles[i].size, 0, Math.PI * 2, false);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5 * circles[i].size;
        ctx.stroke();
        ctx.closePath();

        const coordСross = crosses[i].timeFunction(crosses[i].x, crosses[i].y, timePassed);
        ctx.beginPath();
        ctx.translate(coordСross.x, coordСross.y);
        ctx.rotate(crosses[i].angle);
        ctx.moveTo(0 - 10 * crosses[i].size, 0);
        ctx.lineTo(0 + 10 * crosses[i].size, 0);
        ctx.moveTo(0, 0 - 10 * crosses[i].size);
        ctx.lineTo(0, 0 + 10 * crosses[i].size);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5 * crosses[i].size;
        ctx.stroke();

        ctx.rotate(-crosses[i].angle);
        ctx.translate(-coordСross.x, -coordСross.y);

        crosses[i].angle += crosses[i].speed;
        ctx.closePath();
    }
}