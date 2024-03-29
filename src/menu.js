const menuArray = [
  { name: "a", description: "b", imageURL: "c", price: "d" },
  { name: "aa", description: "b", imageURL: "c", price: "d" },
  { name: "aaa", description: "b", imageURL: "c", price: "d" },
  { name: "aaaa", description: "b", imageURL: "c", price: "d" },
];

export const menu = function () {
  let container = document.createElement("div");
  let title = document.createElement("h1");
  title.textContent = "Menu";

  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container", "container");

  for (let dish of menuArray) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ``;
  }

  container.appendChild(title);
  container.appendChild(menuContainer);
  return container;
};
