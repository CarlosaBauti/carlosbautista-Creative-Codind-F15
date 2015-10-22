var finalPos =[];


function setup() {
  createCanvas(windowWidth,windowHeight);
  finalPos.push(2);
  finalPos.push(3);
  }

function draw() {
  background(255);
  stroke(0);
  
  for(var i=0; i< finalPos.length; i++){
    (finalPos[i]);
    line(windowWidth*0.5, height,windowWidth*0.5,windowHeight*0.75);
  }
  
}