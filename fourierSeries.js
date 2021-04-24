let angle = 0;
let ycords = [];
let sliderVal = document.getElementById("slider");
let inc = 50;
sliderVal.oninput = function () {
  inc = this.value;
  // console.log(inc);
};

//adjust the radius of the circle
let radius = 100;
let amp = document.getElementById("amp");
amp.oninput = function () {
  radius = amp.value;
};

function setup() {
  createCanvas(700, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //mapping the amplitude with the sine wave itself is't that intersting!!
  // radius = map(sin(angle), -1, 1, 100, 200);
  translate(200, height / 2);
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(0, 0, radius);
  const piby4 = 4 / Math.PI;
  // for (i = 0; i < 30; i += 0.2) {
  let x = (radius / 2) * sin(angle);
  let y = (radius / 2) * cos(angle);
  // let x2 = (radius / 4) * Math.cos(angle);
  // let y2 = (radius / 4) * Math.sin(angle);
  ycords.unshift(y);
  //orbiting circle
  fill(255);
  circle(x, y, 10);
  // circle(x2, y2, 30);
  line(0, 0, x, y);
  // }
  beginShape();
  for (i = 0; i < ycords.length; i++) {
    // fill(244);
    noFill();
    vertex(i + 300, ycords[i]);
    endShape();
  }

  if (ycords.length > 300) {
    ycords.pop();
  }
  let mappedInc = Math.floor(map(inc, 1, 50, 1, 20));
  console.log(mappedInc);

  angle += mappedInc;
}
