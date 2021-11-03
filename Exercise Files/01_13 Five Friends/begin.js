/*
  WRITE YOUR SOLUTION HERE
*/
const getRandomPhotos = async function () {
  let apiCall = await fetch("https://randomuser.me/api?results=5");
  let data = await apiCall.json();
  console.log(data.results);
  const timeline = document.querySelector("#timeline");
  data.results.forEach((element) => {
    const image = document.createElement("img");
    image.src = element.picture.medium;
    timeline.appendChild(image);
  });
};
getRandomPhotos();
