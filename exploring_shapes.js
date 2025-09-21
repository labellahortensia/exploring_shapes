let nb = 30;
let rot = 5;
let dim = 350;
let f = 0.5;


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate (width/2, height/2); //places x,y on the center of the cancas instead of top left
  rotate(mouseX); //rotates shapes as you move the mouse
  noFill();
  stroke(255);
  for (let i= 0; i<nb; i=i+1){
    f = map(i,0,nb-1,1,0.2); //maps the size of the squares to make them smaller as they go out
    square(0,0, f * dim);
    rotate(rot);
  }
}