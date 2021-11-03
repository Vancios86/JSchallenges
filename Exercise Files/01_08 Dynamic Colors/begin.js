/*
  WRITE YOUR SOLUTION HERE
*/

function changeColor(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

const makeItBlue = changeColor("blue");
const makeItPink = changeColor("pink");
const makeItGreen = changeColor("green");

document.querySelector("#blue").addEventListener("click", makeItBlue);

document.querySelector("#pink").addEventListener("click", makeItPink);

document.querySelector("#green").addEventListener("click", makeItGreen);
