/*
  WRITE YOUR SOLUTION HERE
*/

function festivalMenu(menus) {
  let flatMenus = menus.flat();
  let uniqueItems = new Set(flatMenus);

  uniqueItems.forEach((item) => {
    const menuNode = document.querySelector("#combined-menu");
    const listItem = document.createElement("li");
    listItem.innerText = item;
    menuNode.appendChild(listItem);
  });
}

festivalMenu([
  ["oaie", "ciorba"],
  ["oaie"],
  ["carnati", "burgeri", "ciorba"],
  ["fasole", "ciorba"],
]);
