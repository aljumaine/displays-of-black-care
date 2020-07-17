function setup() {
  createCanvas(800, 800);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
 background(mouseY / 2&4, 100, 100);

fill(360 - mouseY / 5, 200, 100,);
rect(360, 360, mouseX +3, mouseX +6);
}