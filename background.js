function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
  stroke(160, 100, 255); // لون بنفسجي ناعم
}

function draw() {
  background(0, 0, 0, 0); // خلفية شفافة
  orbitControl();

  for (let z = 0; z < 180; z += 30) {
    for (let x = 0; x < 360; x += 30) {
      push();
      rotateZ(z);
      rotateX(x);
      translate(0, 300, 0);
      box(10); // شكل المكعب
      pop();
    }
  }
}
