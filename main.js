
const stepsDiv = document.getElementById('steps');
const nextStep = document.getElementById('next-step');

// console.log(steps, nextStep);

let stepNum = 1;

function random(min, max) {
  return Math.random() * (max - min) + min
}

function getStepText() {
  let ret = "";

  let r = Math.floor(random(0, 2));
  if (r == 0) {
    let r2 = Math.floor(random(0, 4));

    let size = "";
    if (r2 == 0) {
      size = "tiny";
    } else if (r2 == 1) {
      size = "large";
    } else if (r2 == 2) {
      size = "narrow"
    } else {
      size = "circular";
    }

    ret = `Shade in a ${size} area.`;

  } else if (r == 1) {
    let r2 = Math.floor(random(0, 4));

    let type = "";
    if (r2 == 0) {
      type = "soft";
    } else if (r2 == 1) {
      type = "wiggly";
    } else if (r2 == 2) {
      type = "wavey"
    } else {
      type = "a really straight";
    }

    ret = `Draw a ${type} line.`;
  }

  let r3 = Math.floor(random(0, 2));

  let place = "";
  if (r3 == 0) {
    place = "top right";
  } else if (r3 == 1) {
    place = "bottom right";
  } else if (r3 == 2) {
    place = "middle"
  } else if (r3 == 3) {
    place = "top left"
  } else {
    place = "bottom left";
  }

  ret += ` In the ${place}.`;

  return ret;
}

nextStep.onclick = () => {
  // console.log("click");

  let step = document.createElement('div');

  step.innerHTML = `<h2>Step ${stepNum}</h2>`;

  step.innerHTML += `<p>${getStepText()}</p>`

  stepsDiv.append(step);

  stepNum++;
}
