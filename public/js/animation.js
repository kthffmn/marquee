function animateBall() {

  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = 4;
  var WIDTH;
  var HEIGHT;
  var ctx;

  init();
   
  function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    return setInterval(draw, 30);
  }
   
  function circle(x,y,r) {
    ctx.fillStyle = "#DC143C"
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  function draw() {
    clear();
    circle(x, y, 10);
    if (x + dx + 7 > WIDTH || x + dx - 7 < 0)
      dx = - dx;
    if (y + dy + 7 > HEIGHT || y + dy - 7 < 0)
      dy = - dy;
   
    x += dx;
    y += dy;
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
}