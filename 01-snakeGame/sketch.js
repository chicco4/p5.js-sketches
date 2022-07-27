function setup() {
  createCanvas(500, 500);
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
