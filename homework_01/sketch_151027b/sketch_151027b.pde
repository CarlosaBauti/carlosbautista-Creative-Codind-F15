  float posX1 = 0;
  float posY1 =0;
  float posX2;
  float posY2;
  float theta;
  float trans1=((posX2-posX1)/2);
  float trans2=((posY2-posY1)/2);
  float rectWidth;
  
  void setup(){ 
  size(960,594);
  smooth(12);
}

  void draw(){
  float posX2=width/2;
  float posY2=height;
  background(0);
  
  pushMatrix();
  translate(0,0);
  fill(75,25,100);
  rect (0,0,posX2,posY2);
  line(0,0,40,40);
  popMatrix();
  createRect(width);
  
  //pushMatrix();
  //translate(trans1,trans2);
  ////rotate(2*PI);
  //fill(120,10,150);
  //rect (0,0,width/2,height/2);
  //line(0,0,40,40);
  //popMatrix();
  
  //pushMatrix();
  //translate(width/3,height/2);
  //rotate(-PI/2);
  //fill(255,255,150);
  //rect (0,0,height/2,width/4);
  //line(0,0,40,40);
  //popMatrix();
  
  //pushMatrix();
  //translate(width/3,height/4);
  //rotate(-PI);
  //fill(100,30,150);
  //rect (0,0,width/4,height/4);
  //line(0,0,40,40);
  //popMatrix();
  
  //pushMatrix();
  //translate(((width/2)+(width/8)),height/4);
  //rotate(-3*PI/2);
  //fill(180,0,150);
  //rect (0,0,height/4,width/8);
  //line(0,0,40,40);
  //popMatrix();
  
  //pushMatrix();
  //translate(((width/2)+(width/8)),((height/4)+height/8));
  //rotate(2*PI);
  //fill(200,30,200);
  //rect (0,0,width/8,height/8);
  //line(0,0,40,40);
  //popMatrix();
}
  void createRect(float rectWidth) {
    rectWidth *= 0.5;
    println(rectWidth);
    float posY2=height;
    float firstRot=-PI/2;
    float initialState= PI/2;
    float theta =- firstRot;
    if (rectWidth >10){
        pushMatrix();
        translate(100,100);
        rotate(initialState-theta);
        fill(255,255,150);
        rect (0,0,posX2,posY2);
        line(0,0,40,40);
        popMatrix();
    }
}
  //for (int i=0; i<height; *=10){
  // line(0,(displaceVert*i),width*0.5,(displaceVert*i));
  //}