function setup() {
  createCanvas(innerWidth, innerHeight);
  mouseX = undefined;
  mouseY = undefined;
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
