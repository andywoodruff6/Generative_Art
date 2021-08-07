var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);   
    context.stroke();
} //This function takes an init x,y location and then draws a line from there 
  //The line is then drawn to the entire width and height
  
draw(0, 0, size, size);