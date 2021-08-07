var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

// var size = window.innerWidth;
var step = 80;
// var dpr = window.devicePixelRatio;
var number = 320;

canvas.width = number ;
canvas.height = number ;
context.scale(2, 2);

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;

  if(leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);    
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
    context.stroke();
} //This function takes an init x,y location and then draws a line from there 
  //The line is then drawn to the entire width and height
  
draw(0, 0, number, number);

//TEST
