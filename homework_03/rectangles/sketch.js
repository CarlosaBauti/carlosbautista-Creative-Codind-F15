  var firstRot=0;
  var theta=90,
posX2,
posY2,
trans1,
trans2,
rectWidth,
rectHeight;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  posX2=windowWidth;
  posY2=windowHeight;
  firstRot=0;
  theta=-PI/2;
  trans1=windowWidth/2;
  trans2=windowHeight/2;
  background(255);
  frameRate(1);
  
  createRect(trans1, trans2);
  
  
}

function createRect(posX, posY){
  
    push();
    translate(0,0);
    fill(75,25,100);
    rect (0,0,posX2/2,posY2);
    line(0,0,40,40);
    pop();
    
    push();
    translate(trans1,trans2);
      rotate(firstRot);
    fill(100,10,100);
    rect (0,0,posX2,posY2);
    line(0,0,40,40);
    // createRect(trans1, trans2);
    pop();
    
    push();
    translate(trans1+(trans1/2),trans2);
    rotate(theta);
    fill(50,10,200);
    rect (0,0,posX2/2,posY2/2);
    line(0,0,40,40);
    pop();
    
    push();
    translate(trans1+(trans1/2),trans2/2);
    rotate(theta*2);
    fill(120,10,200);
    rect (0,0,posX2/4,posY2/4);
    line(0,0,40,40);
    // createRect(rectWidth, rectHeight);
    pop();
   
    push();
    translate(trans1,trans2/2);
    rotate(theta*4);
    fill(75,25,100);
    rect (0,0,posX2/8,posY2/4);
    line(0,0,40,40);
    pop();
    
    //Create an empty space to run the function
    
    push();
    translate(trans1+(trans1/4),trans2/2);
    rotate(firstRot);
    fill(200,10,200);
    // rect(0,0,windowWidth/8,windowHeight/4);
    // createRect(posX2/8,posY2/4);
    pop();
    
    
  }
  // createRect(trans1, trans2);


// var firstRot=(mouseX/windowWidth)*120;