var color = []; 
var yosup = new Array(random(255)); 
var x = [];
var y = [];


function setup() {
   background(252, 108, 133);
  createCanvas(windowWidth, windowHeight);
    noCursor(); 
}

function draw() {
  background(mouseY/2, 149, 237);
  strokeWeight(20);
  stroke(252, random(55)&2, 133);
  ellipse(mouseY, random(30)+mouseX+2%2, mouseX, mouseY);
  stroke(240);
  fill(mouseY, mouseX,)
  rect(mouseY, mouseX, 2&5, mouseY);
    line(mouseX, mouseY, random(3*4), 5&3);
      translate(width / 2, height / 2);
      rotate(PI / 3.0);
        ellipse(mouseY, mouseX*random(66), random(3*4), 4&3);
          line(mouseY, mouseX+99, random(23), 4&3);
            ellipse(mouseX, mouseY/44, random(11*2), 3&3);
              rotate(PI / 1);
               translate(width / 2&1, height&1 / 2);
                rect(mouseY, mouseX+1&2, random(3/4), 3&3);
                 rect(mouseX, mouseY+2, random(6*6), 3&3);
                  rect(mouseY, mouseX*44, random(7+7), 2&3)
                    translate(width / mouseX, height / 2);
                      rotate(TWO_PI / 3.0);
                        rect(mouseX, -26, 52, mouseY);
                          rotate(PI / 3.0);
                            ellipse(mouseY, mouseX*random(10), random(3*4), 4&3);
                              rotate(TWO_PI / 3.0);
                                rect(mouseX, -26, 52, mouseY);
                                line(mouseY, mouseX+99, random(23), 4&3);
                                  rotate(TWO_PI / 3.0);
                                    rect(mouseX, -26, 52, mouseY);
                                      line(mouseY, mouseX&9, random(23), 5&2);
                                        ellipse(mouseX, mouseY/44, random(11*2), 8&7);
                                          rotate(PI / 7.0);
                                           translate(width / 2&1, height&1 / 2);
                                            rect(mouseY, mouseX+1&2, random(3*4), 9&3)
                                              ellipseMode(CENTER); 
                                                fill(255); 
                                                  rotate(TWO_PI / 3.0);
                                                    rect(mouseX, -26, 52, mouseY); 
                                                      ellipse(50, 50, 30, 30); 
                                                        ellipseMode(CENTER); 
                                                          fill(random(55)); 
                                                           ellipse(50, 50, 30, 30); 
                                                            rotate(TWO_PI / 3.0);
                                                              rect(mouseX, -26, 52, mouseY);
                                                                ellipse(0, 50, 33, 33); 
                                                                  fill(random(55));  
                                                                    ellipse(50, 50, 30, 30); 
                                                                      rotate(TWO_PI / 3.0);
                                                                        push(); 
                                                                          strokeWeight(10&1);
                                                                            fill(204, 153, 0);
                                                                              rect(mouseX, 50, mouseY&2, random(23)); 
                                                                                push(); 
                                                                                  stroke(0, 3&3, mouseX);
                                                                                    ellipse(mouseY, 33&2, mouseX); 
                                                                                      pop(); 
                                                                                          pop(); 
                                                                                            ellipse(100, 50, 33, 33); 
                                

                                                                                            

        }
