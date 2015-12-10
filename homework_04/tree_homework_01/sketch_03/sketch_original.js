var theta,
posX2=windowWidth/2,
posY2=windowHeight;

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(255);
  frameRate(30);
  push();
  translate(0,0);
  fill(75,25,100);
  rect (0,0,posX2,posY2);
  line(0,0,40,40);
  pop();
  createRect(width);
  
}
function branch(h){
  h *=0.66;
  println(h);
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


var firstRot=(mouseX/windowWidth)*120;