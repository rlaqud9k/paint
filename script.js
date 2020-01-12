var canvas = document.querySelector("#jsCanvas");
var ctx = canvas.getContext("2d");
canvas.strokeStyle  =  ' # 666 ' ; 
canvas.lineWidth  =  9 ;
let start = false;

function xyFinder(event){
  var x = event.offsetX;
  var y = event.offsetY;
  if(!start){     
    ctx.beginPath();
    ctx.moveTo(x, y);
  }else{
    ctx.lineTo(x, y);
    ctx.stroke();
  }
 
  
  console.log(x, y, start);
}
function mDown(x, y){
  start = true;
}
function mUp(e){
  start = false;
}
function mOut(e){
  start = false;
}
canvas.addEventListener("mousemove", xyFinder);
canvas.addEventListener("mousedown", mDown);
canvas.addEventListener("mouseup", mUp);
canvas.addEventListener("mouseout", mOut);