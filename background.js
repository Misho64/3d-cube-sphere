function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  noFill();
  stroke(255, 100);
  strokeWeight(1);
  angleMode(DEGREES);
}

function draw() {
  background(15, 15, 30);
  rotateY(frameCount * 0.2);
  for (let i = 0; i < 200; i++) {
    push();
    rotateX(sin(frameCount * 0.5 + i) * 100);
    translate(200, 0, 0);
    box(5);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
