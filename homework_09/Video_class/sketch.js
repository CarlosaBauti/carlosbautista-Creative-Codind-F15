/*
 * @name Video Canvas
 * @description <p>Load a video with multiple formats and draw it to the canvas.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var space;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop(); // set the video to loop and start playing
  space.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  space.volume(0.5);//we set the volume to 0 because we don't want
                  //sound
}

function draw() {
  background(150);
  space.loadPixels();
  space.showControls();
  // image(space,windowWidth/2-320,windowHeight/2-240); // draw the video frame to canvas
  filter('GRAY');
  // image(space,150,150); // draw a second copy to canvas
  for (var y=0; y<height; y+=25) {
    for (var x=0; x<width; x+=25) {
      var i = y * width + x;
      var darkness = (255 - space.pixels[i*4 % (space.pixels.length / 4)])/255;
      var radius = darkness*25;//stepSize * darkness;
      fill(
        space.pixels[i % space.pixels.length],
        space.pixels[i*2 % space.pixels.length],
        space.pixels[i*3 % space.pixels.length]
      );
      ellipse(x, y, radius, radius);
    }
  }
}