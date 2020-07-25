const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    /*console.log(event);*/
    const x = event.offsetX;
    const y = event.offsetY;
    /*console.log(x, y);*/
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {

    /*console.log(event);*/
    painting = true;
}

/*function onMouseUp(event) {
    painting = false;
    stopPainting();
}*/

/*function onMouseLeave(event) {
    painting = false;
}*/

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    /*canvas.addEventListener('mousedown', onMouseDown);*/
    canvas.addEventListener('mousedown', startPainting);
    /*canvas.addEventListener('mouseup', onMouseUp);*/
    canvas.addEventListener('mouseup', stopPainting);
    /*canvas.addEventListener('mouseleave', onMouseLeave);*/
    canvas.addEventListener('mouseleave', stopPainting);
}
