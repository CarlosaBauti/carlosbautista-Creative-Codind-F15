

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  drawRect(100,100)
}

function drawRect(ancho,alto){
  push();
  translate(0,0);
  fill(75,25,100);
  rect (0,0,ancho,alto);
  console.log(ancho);
  line(0,0,40,40);
  pop();
};