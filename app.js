const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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

/*function onMouseDown(event) {

    console.log(event);
    painting = true;
}*/

/*function onMouseUp(event) {
    painting = false;
    stopPainting();
}*/

/*function onMouseLeave(event) {
    painting = false;
}*/

function handleColorClick(event) {
    //console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    //console.log(color);
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    //console.log(event);
    //console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = 'Fill';
    } else {
        filling = true;
        mode.innerText = 'Paint';
    }
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    /*canvas.addEventListener('mousedown', onMouseDown);*/
    canvas.addEventListener('mousedown', startPainting);
    /*canvas.addEventListener('mouseup', onMouseUp);*/
    canvas.addEventListener('mouseup', stopPainting);
    /*canvas.addEventListener('mouseleave', onMouseLeave);*/
    canvas.addEventListener('mouseleave', stopPainting);
}

//console.log(Array.from(colors));

/*Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));*/

/*Array.from(colors).forEach(potato => potato.addEventListener('click', handleColorClick));*/

if(colors) {
    Array.from(colors).forEach(potato => potato.addEventListener('click', handleColorClick));
}

if(range) {
    range.addEventListener('input', handleRangeChange);
}

if(mode) {
    mode.addEventListener('click', handleModeClick);
}