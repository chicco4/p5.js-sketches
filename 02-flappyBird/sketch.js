var bird;

function setup() {
  createCanvas(400, 600);
  mouseX = undefined;
  mouseY = undefined;
  bird = new Bird();
}

function draw() {
  background("grey");
  bird.show();
}

function Bird() {
  this.y = width / 2;
  this.x = 25;

  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 20, 20);
  };
}
