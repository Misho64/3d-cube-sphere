function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
  stroke(32, 8, 64);
}

function draw() {
  background(255, 200, 220);
  orbitControl();

  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();
      rotateZ(zAngle);
      rotateX(xAngle);
      translate(0, 300, 0);
      box(20);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
