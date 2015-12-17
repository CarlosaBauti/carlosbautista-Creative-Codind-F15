
var radius = 250.0;
var angle = 0.0;
var x=0, y=0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  smooth= 24;
}
function draw(){
  
  // translate(250,250);
  angle = (second() / 59.0) * TWO_PI;
  x = cos(angle)* radius;
  y = sin(angle)* radius;

  // push();
  //   translate(windowWidth/4,windowHeight/4);
  //   line(x,y,x,y);
  //   rotate(noise(x),0);
  //   stroke(150);
  //   fill(100,100,100,10);
  //   triangle(windowWidth/2,windowHeight/2,x,y,y,x);
    
    
  //   beginShape();
  //   fill(100,100,100,10);
  //   stroke(10);
  //   vertex(windowWidth/2,windowHeight/2);
  //   vertex(x,y);
  //   vertex(y,x);
  //   vertex(y,y);
    
  //   endShape();
  // pop();

  push();
    
    translate(windowWidth/4,windowHeight/4);
    rotate(y/4,0);
    stroke(200);
    fill(30,30,30,5);
    triangle(0,0,y,x,noise(y),y);
    
    
    beginShape();
    fill(190,190,190,2);
    stroke(200);
    vertex(windowWidth/2*x,windowHeight/2);
    vertex(noise(y),x);
    vertex(noise(x),y);
    vertex(y,noise(x));
    endShape(CLOSE);

  pop();
  
}