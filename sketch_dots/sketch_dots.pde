int dragX, dragY, moveX, moveY;

void setup() {
  size(400, 400);
  smooth();
  noCursor();
  background(255); // intentionally in setup so it clears in draw
}

void draw() {
  fill(#29ccd0, 80);
  noStroke();
  ellipse(moveX, moveY, 6, 6);
  
  stroke(255, 80);
  strokeWeight(18);
  line(dragX, 0, dragX, 300);
  line(0, dragY, 300, dragY);
}

void mouseDragged() {
  dragX = mouseX;
  dragY = mouseY;
}

void mouseMoved() {
  moveX = mouseX;
  moveY = mouseY;
}
