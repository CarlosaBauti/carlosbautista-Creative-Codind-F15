var theta;

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(255);
  frameRate(30);
  stroke(0);
  var firstRot=(mouseY/windowHeight)*120;
  theta=radians(firstRot);
  translate(windowWidth*0.5,height);
  line(0,0,0,-100);
  translate(0,-100);
  branch(180);
}
function branch(h){
  h *=0.66;
  if (h>2){
    push();
    rotate(noise(theta));
    line(0,0,0,-h);
    translate(0,-h);
    branch(h);
    pop();
    
    push();
    rotate(-theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h);
    pop();
  }
}