var capture;

function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.loop();
  // capture.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  capture.loadPixels();
  var growPx = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=growPx) {
    for (var x=0; x<width; x+=growPx) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*8]) / 255;
      var radius = growPx * darkness;
      rect(x, y, radius, radius);
    }
  }
  capture.updatePixels();
}