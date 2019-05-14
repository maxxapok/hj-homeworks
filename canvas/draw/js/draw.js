'use strict';
const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    BRUSH_RADIUS = 6;

let curves = [],
    undone = [],
    drawing = false,
    weird = false,
    needsRepaint = false;

window.addEventListener("load", function() {

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    }
    window.addEventListener("resize", resize);
    resize();
});


function circle(point) {
    ctx.beginPath();
    ctx.arc(...point, BRUSH_RADIUS / 2, 0, 2 * Math.PI);
    ctx.fill();
}

function smoothCurveBetween(p1, p2) {
    const cp = p1.map((coord, idx) => (coord + p2[idx]) / 2);
    ctx.quadraticCurveTo(...p1, ...cp);
}

function smoothCurve(points) {
    ctx.beginPath();
    ctx.lineWidth = BRUSH_RADIUS;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.moveTo(...points[0]);

    for (let i = 1; i < points.length - 1; i++) {
        smoothCurveBetween(points[i], points[i + 1]);
    }

    ctx.stroke();
}


function makePoint(x, y, reflect = false) {
    return reflect ? [y, x] : [x, y];
};

canvas.addEventListener("mousedown", (evt) => {
    drawing = true;
    weird = evt.shiftKey;
    undone = [];
    const curve = [];

    curve.push(makePoint(evt.offsetX, evt.offsetY, weird));
    curves.push(curve);
    needsRepaint = true;
});

canvas.addEventListener("mouseup", (evt) => {
    drawing = false;
});

canvas.addEventListener("mouseleave", (evt) => {
    drawing = false;
});

canvas.addEventListener("mousemove", (evt) => {
    if (drawing) {
        const point = makePoint(evt.offsetX, evt.offsetY, weird)
        curves[curves.length - 1].push(point);
        needsRepaint = true;
    }
});

canvas.addEventListener("dblclick", (evt) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function repaint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    curves
        .forEach((curve) => {
            circle(curve[0]);

            smoothCurve(curve);
        });
}

function tick() {
    if (needsRepaint) {
        repaint();
        needsRepaint = false;
    }

    window.requestAnimationFrame(tick);
}

tick();