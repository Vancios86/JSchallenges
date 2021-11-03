/*
  WRITE YOUR SOLUTION HERE
*/
const clockNode = document.querySelector("#clock");

function clock() {

  return setInterval(() => {
    let date = new Date();
    let timer = date.toLocaleTimeString();
    clockNode.textContent = timer;
  }, 1000);


}

clock();