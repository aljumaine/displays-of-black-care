var partytime = 12*15;
var x = [];
var y = [];


function setup() {
  background(123,223,242,1);
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noFill();
  console.log("Hallo");
}

function draw(){
  rect(mouseX, mouseY, random(255), partytime&19);
  ellipse(mouseX, mouseY, partytime&7, mouseY);
  line(mouseX, mouseY, mouseX, mouseY)
}




