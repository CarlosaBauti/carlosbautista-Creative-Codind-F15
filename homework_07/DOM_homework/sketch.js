var img1;
var h1;
var canvas;

function setup() {

  img1 = createImg("http://cbautistadesign.com/images/fulls/07.jpg");
  text = createDiv('Photography Portfolio');
  text.position(50, 50);
  text.style("font-family: 'Montserrat', sans-serif;");
  text.style("background-color", "#FFFFFF");
  text.style("color", "#999999");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
  canvas = createCanvas(windowWidth, windowHeight/3);

  img1.position(190, 50);
  canvas.position(0, windowHeight);
}

function draw() {
  noStroke();
  background(255, 100, 100,255);
  fill(180, 200, 40);
  strokeWeight(6);
  stroke(180, 100, 240);
}