
function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
  translate(width/2,height);
  branch();
}

function branch(){
  line(0,0,0,-100);
  translate(0,-100);
  
  push();
  rotate(PI/4);
  line(0,0,0,-50);
  translate(0,-50);
  pop();
  
  rotate(-PI/4);
  line(0,0,0,-50);
  translate(0,-50);

  }