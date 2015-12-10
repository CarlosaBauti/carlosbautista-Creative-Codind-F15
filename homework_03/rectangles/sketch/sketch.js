
  var posX2;
  var posY2;
  var theta;
  var posX2 = width;
  var trans1=((posX2)/2);
  var trans2=((posY2)/2);
  var rot;
  
 function setup(){ 
  createCanvas(960,594);
  smooth(12);
}

function draw(){
  posX2=width/2;
  posY2=height;
  background(0);
  
  push();
  translate(0,0);
  fill(75,25,100);
  rect (0,0,posX2,posY2);
  line(0,0,40,40);
  pop();
  rot = PI/2;
  createRect(400, rot/4);
  anotherFunct();
}

function anotherFunct(){
  
  var a;
  var b;
  var c;
  
}

  function createRect(rectWidth, angle) {
    rectWidth *= 0.5;
    println(rectWidth);
    posY2=height;
    theta =- firstRot;
    var firstRot=-PI/2;
    var initialState= PI/2;
    
    if (rectWidth >10){
        push();
        translate(100,100);
        rotate(initialState-theta);
        fill(255,255,150);
        rect (0,0,posX2,posY2);
        line(0,0,40,40);
        pop();
    }
}