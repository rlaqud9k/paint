var canvas = document.querySelector("#jsCanvas");

function xyFinder(event){
  var x = event.offsetX;
  var y = event.offsetY;
  console.log(x, y);
}

canvas.addEventListener("mousemove", xyFinder);