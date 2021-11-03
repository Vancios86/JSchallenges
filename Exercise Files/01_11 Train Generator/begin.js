/*
  WRITE YOUR SOLUTION HERE
*/
function* myGenerator() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand central";
}

function nextStation() {
  const stationGenerator = myGenerator();
  const button = document.querySelector("#next-stop");
  button.addEventListener("click", () => {
    let generate = stationGenerator.next();
    document.querySelector("#showStation").innerText = generate.value;
    if (generate.done) {
      button.setAttribute("disabled", true);
      document.querySelector("#showStation").innerHTML = "end of line";
    }
  });
}

nextStation();
