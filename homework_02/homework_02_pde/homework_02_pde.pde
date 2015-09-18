PImage bg;
int grid = 50; // grid size
int i;
int[ ] coords = {
    150,0,175,135,170,160,180,170,215,140,190,140,175,0,150,0
  };
void setup(){
  size(650,506);
  smooth(8);
  background(#E0D8C5);
  bg=loadImage("creative_coding_hw_02.jpg");
  
}
void draw(){
  background(bg);
  for (int i = 0; i < width; i+=grid) {
  line (i, 0, i, height);
  stroke(0);
  strokeWeight(1);
}
  for (int i = 0; i < height; i+=grid) {
  line (0, i, width, i);
  stroke(0);
}
  beginShape();
  fill(255,255,255,0);
  strokeWeight(10);
  stroke(10);
  curveVertex(175,0);
  curveVertex(175,0);
  curveVertex(175,100);
  curveVertex(75,125);
  curveVertex(75,250);
  curveVertex(85,400);
  curveVertex(200,400);
  curveVertex(350,410);
  curveVertex(362,315);
  curveVertex(450,305);
  curveVertex(452,385);
  curveVertex(500,385);
  curveVertex(500,440);
  curveVertex(515,470);
  curveVertex(515,485);
  curveVertex(625,485);
  curveVertex(625,350);
  curveVertex(550,350);
  curveVertex(550,250);
  curveVertex(575,250);
  curveVertex(575,275);
  curveVertex(625,275);
  curveVertex(625,160);
  curveVertex(515,160);
  curveVertex(515,95);
  curveVertex(490,115);
  curveVertex(520,0);
  curveVertex(520,0);
  endShape();
    beginShape();
  fill(216,57,41,129);
  noStroke();
  curveVertex(150, 0); // the first control point
  curveVertex(150, 0); // is also the start point of curve
  curveVertex(175, 135);
  curveVertex(170, 160);
  curveVertex(180, 170);
  curveVertex(215, 140);
  curveVertex(175, 0);
  curveVertex(150, 0); // the last point of curve
  curveVertex(150, 0); // is also the last control point
  endShape();
  pushMatrix();
  fill(47,122,177,127);
  translate(185,37.5);
  rotate(radians(-5));
  rect(0,0,55,167.5,5);
  popMatrix();
}  