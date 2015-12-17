
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  frameRate(15)
  background(255);
  drawRect(windowHeight*2,windowWidth*2);
}

function drawRect(ancho,alto){
  if(alto>10){
    alto *=0.5;
    console.log(alto);
    // ancho*=0.5;
    theta=PI/2;
    push();
    translate(alto,0);
    console.log(alto);
    rotate(theta);
    stroke(200);
    fill(random(50),random(255),random(220));
    rect (0,0,alto,ancho);
    // line(0,0,40,40);
    drawRect(alto,ancho);
    pop();
    
    push();
    translate(alto/2,0);
    console.log(alto);
    rotate(theta);
    stroke(255);
    fill(random(255),5,random(252));
    rect (0,0,ancho,alto/2);
    // line(0,0,40,40);
    // drawRect(alto,ancho);
    pop();
    
  }
};