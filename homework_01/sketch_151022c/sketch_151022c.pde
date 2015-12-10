
   
  size(960,594);
  
  int displaceVert=10;
  int displaceHor=5;
  int displaceDiag=25;

  background(0);
  smooth(8);
  
  pushMatrix();
  fill(75,25,100);
  rect (0,0,width*0.5,height);
  for (int i=0; i<height; i++){
   line(0,(displaceVert*i),width*0.5,(displaceVert*i));
  }
  popMatrix();
  
  pushMatrix();
  fill(0,100,123);
  rect (width*0.5,height*0.5,width*0.5,height*0.5);
  for (int i=0; i<width; i++){
    line((displaceHor*i),0,(displaceHor*i),height); 
  }
  popMatrix();
  
  pushMatrix();
  fill(0,30,200);
  rect (width*0.5,0,width*0.25,height*0.5);
  for (int i=0; i<height; i++){
  line(0,(displaceDiag*i),width*0.5,(displaceDiag*i));
  }
  popMatrix();
  
  pushMatrix();
  fill(50,150,200);
  rect (width*0.75,0,width*0.25,height*0.5);
  for (int i=0; i<height; i++){
   line((displaceVert*i),0,(displaceDiag*i),height);
  }
  popMatrix();


  