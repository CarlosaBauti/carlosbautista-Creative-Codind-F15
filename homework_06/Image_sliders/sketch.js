var img;
var dupSlider;
var dupSlidertwo;


function preload() {
  /*preloads the image to avoid delay*/
  img = loadImage("data/images/clip_art_bg.png");
}
function setup() {
  /* making two different sliders*/
  createCanvas(windowWidth, windowHeight);
    dupSlider = createSlider(0,windowWidth-75,0);
    dupSlider.position(0,71);
    
    dupSlidertwo = createSlider(0,windowHeight-71,0);
    dupSlidertwo.position(0,142);
    
}
function draw(){
  background(255);
  /*Creating a nested loop to fill the background*/
  
    for(var i=0; i<width; i+=75){
    for(var j=0; j<height; j+=71){
      image(img,i,j);
    }
  }

  var r = dupSlider.value();
  var g = dupSlidertwo.value();

  
  if (r<width){if(g<height){
    tint(255,255,255,255);
    image(img,r,g);
    }
  }

}