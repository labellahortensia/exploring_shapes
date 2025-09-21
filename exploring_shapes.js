let nb = 30;  //number of squares
let rot = 5; //rotation angle of the squares    
let dim = 350; //size of the biggest square
let f = 0.5; //size factor of the squares
let fmin = 0.5; //minimum size of the squares
let sliderNb, sliderRot, sliderFmin;


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  sliderNb = createSlider(1, 100, nb, 1);
  sliderRot = createSlider(0, 45, rot);
  sliderFmin = createSlider(0.1, 1, fmin, 0.05);
}

function draw() {
    nb = sliderNb.value();
    rot = sliderRot.value();
    fmin = sliderFmin.value();
    
  background(0);
  translate (width/2, height/2); //places x,y on the center of the cancas instead of top left
  
  noFill();
  stroke(255);
  for (let i= 0; i<nb; i=i+1){
    f = map(i,0,nb-1,1,fmin); //maps the size of the squares to make them smaller as they go out
    square(0,0, f * dim);
    rotate(rot);
  }
}