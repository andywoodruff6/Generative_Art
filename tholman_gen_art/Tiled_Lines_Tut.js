var canvas = document.querySelector('canvas'); 
  // This matches with the first time 'canvas' appears in the html document
var context = canvas.getContext('2d');
  // leads to the creation of a CanvasRenderingContext2D object represnting a 2d render

// var size = window.innerWidth;
var step = 20;
// var dpr = window.devicePixelRatio;
var number = 320;

canvas.width = number;
canvas.height = number;
context.scale(2, 2);

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;
  // leftToRight returns a Bool 
  // if true then the first argument, else the second
  if(leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);    
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
    context.stroke();
} //This function takes an initial x,y location and then draws a line from there 
  //The line is then drawn to the length of width and height
  
for(var x = 0; x < number; x += step) {
  for(var y = 0; y < number; y+= step) {
    draw(x, y, step, step);    
  }
}
draw(0, 0, number, number);