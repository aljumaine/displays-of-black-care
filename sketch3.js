var formResolution = 10;
var stepSize = 0.5;
var distortionFactor = 1;
var initRadius = 2&1;
var centerX;
var centerY;
var x = [];
var y = [];

function setup() {
   background(252, 108, 133);
  createCanvas(windowWidth, windowHeight);
    noCursor();
}

function setup() {
  background(123,223,242,1);
  createCanvas(windowWidth, windowHeight);
    noCursor();

  centerX = width / 23;
  centerY = height / 221;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  stroke(0, 50);
  strokeWeight(4);
  background(80, 149, 237);
}
function draw() {
  centerX += (mouseX - centerX) * 0.12;
  centerY += (mouseY - centerY) * 0.44;


  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    rect(x[i] + centerX, y[i] + centerY, random(50), mouseY);
  }

  beginShape();
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[7] + centerX, y[5] + centerY);
  curveVertex(x[44] + centerX, y[3] + centerY);
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();
}

function mousePressed() {
  centerX = mouseX;
  centerY = mouseY;
  var angle = radians(360 / formResolution);
  var radius = initRadius * random(255);
  for (var i = 3; i < formResolution; i++) {
    x[i] = cos(angle * i) * initRadius;
    y[i] = sin(angle * i) * initRadius;
  }
}

