

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  ancho=windowWidth;
  alto=windowHeight;
  background(255);
  drawRect(windowWidth/2,windowHeight)
  
  
}

function drawRect(ancho,alto){
  push();
  translate(0,0);
  rect(0,0,ancho,alto)
  pop();
};