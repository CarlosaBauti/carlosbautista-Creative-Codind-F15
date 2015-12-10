  void setup(){ 
  size(960,594);
  smooth(12);
  
  
  }
  void draw(){
  background(0);
  
  pushMatrix();
  translate(0,0);
  fill(75,25,100);
  rect (0,0,width*0.5,height);
  line(0,0,40,40);
  popMatrix();
  
  pushMatrix();
  translate(width*0.5,height/2);
  //rotate(2*PI);
  fill(120,10,150);
  rect (0,0,width*0.5,height/2);
  line(0,0,40,40);
  popMatrix();
  
  pushMatrix();
  translate(width*0.75,height/2);
  rotate(-PI/2);
  fill(255,255,150);
  rect (0,0,height/2,width*0.25);
  line(0,0,40,40);
  popMatrix();
  
  pushMatrix();
  translate(width*0.75,height/4);
  rotate(-PI);
  fill(100,30,150);
  rect (0,0,width/4,height*0.25);
  line(0,0,40,40);
  popMatrix();
  
  pushMatrix();
  translate(((width/2)+(width/8)),height/4);
  rotate(-3*PI/2);
  fill(180,0,150);
  rect (0,0,height/4,width/8);
  line(0,0,40,40);
  popMatrix();
  
  pushMatrix();
  translate(((width/2)+(width/8)),((height/4)+height/8));
  rotate(2*PI);
  fill(200,30,200);
  rect (0,0,width/8,height/8);
  line(0,0,40,40);
  popMatrix();
  
  //pushMatrix();
  //translate(width*0.75,height/4);
  ////rotate(-PI/2);
  //fill(50,255,150);
  //rect (0,0,height/4,width*0.25);
  //line(0,0,40,40);
  //popMatrix();
  //translate(width*0.75,height*0.5);
  //rotate(-PI/2);
  //fill(255,255,100);
  //rect (0,0,width/2,height/2);
  //line(0,0,40,40);

  
   }
  //for (int i=0; i<height; i++){
  // line(0,(displaceVert*i),width*0.5,(displaceVert*i));
  //}