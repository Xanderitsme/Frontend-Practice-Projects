const canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

canvas.style.border = '2px solid black';

context.lineWidth = 2;

context.beginPath();
context.moveTo(200, 80);
context.lineTo(80, 300);
context.lineTo(320, 300);
context.lineTo(200, 80);

context.stroke();
