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
    ctx.fillStyle = "#4ECDC4"
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  function draw() {
    clear();
    circle(x, y, 15);
    if (x + dx + 15 > WIDTH || x + dx - 15 < 0)
      dx = - dx;
    if (y + dy + 15 > HEIGHT || y + dy - 15 < 0)
      dy = - dy;
   
    x += dx;
    y += dy;
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
}