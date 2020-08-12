function setup(){
createCanvas(windowWidth, windowHeight);
noCursor();

colorMode (HSB, 360, 55, 15);
rectMode(CENTER);
noStroke();


}

function draw(){
  background(mouseY / 2, 100, 100);
  fill(360 - mouseY / 5, 100, 100);
  rect(360, 360, mouseX + 4, mouseY + 9);
  rect(355, random(-23) / 44, mouseX + 4, mouseY + 4);
}

function draw(){
  background(mouseY / 2, 100, 100);
  fill(360 - mouseY / 5, 100, 100);
  rect(360, 360, mouseX + 4, mouseY + 2);
}

function draw(){
  background(mouseY / -5, 140, 100);
  fill(360 - mouseY / 5, 199, 100);
  rect(360, 360, mouseX % 4, mouseY + 3);
}

function draw(){

  background(mouseY / 2, 100, 100);
  fill(360 - mouseY / 5, 100, 100);
  ellipse(360, 360, mouseX + 4, mouseY + 4);
}



