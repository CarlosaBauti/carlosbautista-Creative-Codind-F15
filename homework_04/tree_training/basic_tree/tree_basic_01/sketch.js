function setup() {
  createCanvas(600,600)
  background(255)
}

function draw() {
translate(width/2,height);
//The root
line(0,0,0,-100);
translate(0,-100);
 
push();
rotate(PI/4);
//Branch to the right
line(0,0,0,-50);
translate(0,-50);
  push();
    rotate(PI/4);
    line(0,0,0,-25);
  pop();
rotate(-PI/4);
line(0,0,0,-25);
pop();
 
rotate(-PI/4);
//Branch to the left
line(0,0,0,-50);
translate(0,-50);

push();
rotate(PI/4);
line(0,0,0,-25);
pop();
rotate(-PI/4);
line(0,0,0,-25);
}