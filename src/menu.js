import carpaccio from "./assets/carpaccio.jpg";
import arrosto from "./assets/arrosto.jpg";
import cozze from "./assets/cozze.jpg";
import fritto from "./assets/fritto.jpg";
import linguine from "./assets/linguine.jpg";
import paella from "./assets/paella.jpg";
import polpo from "./assets/polpo.jpg";
import risotto from "./assets/risotto.jpg";
import vitelloTonnato from "./assets/vitello_tonnato.jpg";

const menuArray = [
  {
    name: "Carpaccio of raw meat",
    description:
      "Morbi cursus arcu eget ipsum dapibus, eget eleifend sapien venenatis. Ut vel sagittis neque, et aliquam est. Aenean blandit sit amet lacus sed volutpat.",
    imageURL: carpaccio,
    price: "12,00",
  },
  {
    name: "Mussel peppered",
    description:
      "Quisque volutpat nibh a maximus aliquet. Vivamus nec tellus augue. Praesent fermentum lacus vel erat tempor condimentum. Morbi at mollis quam, a hendrerit lectus.",
    imageURL: cozze,
    price: "10,00",
  },
  {
    name: "Veal with tuna sauce",
    description:
      "Morbi scelerisque tellus dignissim semper sollicitudin. Suspendisse fermentum lacinia tristique. Vivamus tincidunt gravida urna ac mattis. Nam rutrum lectus ut nisi imperdiet, ut vulputate neque.",
    imageURL: vitelloTonnato,
    price: "8,50",
  },
  {
    name: "Paella",
    description:
      "Vestibulum enim sem, auctor nec nunc et, euismod interdum ipsum. Nullam euismod dui cursus, luctus turpis id, ornare eros. Nunc auctor pharetra ligula, nec pellentesque.",
    imageURL: paella,
    price: "18,00",
  },
  {
    name: "Seafood linguine",
    description:
      "Morbi eleifend libero enim. Nulla tristique rutrum elit, elementum tristique sapien bibendum vel. Nam lacus justo, hendrerit at luctus blandit, sollicitudin pretium eros.",
    imageURL: linguine,
    price: "16,00",
  },
  {
    name: "Porcini mushroom risotto",
    description:
      "Mauris quis purus ex. Pellentesque sit amet purus vitae ex fermentum dictum blandit vel velit. Nam vel nulla et sem imperdiet dapibus. Duis quis odio.",
    imageURL: risotto,
    price: "12,50",
  },
  {
    name: "Braised veal roast",
    description:
      "Proin efficitur elementum turpis sed vulputate. Donec in facilisis erat, at venenatis orci. Sed et erat eu turpis faucibus mollis. Ut sed purus aliquam nunc.",
    imageURL: arrosto,
    price: "14,00",
  },
  {
    name: "Mixed fried fish",
    description:
      "Curabitur congue nisl diam, non dapibus ligula sagittis id. Curabitur eget tempus est, ac rutrum dui. Ut volutpat pellentesque convallis. Sed vel sem ac dui.",
    imageURL: fritto,
    price: "18,00",
  },
  {
    name: "Octopus with potatoes and olives",
    description:
      "Sed bibendum placerat magna et bibendum. Ut quis euismod est. Phasellus ornare consectetur lectus, et luctus nunc scelerisque et. Vivamus ut commodo diam. Ut tristique.",
    imageURL: polpo,
    price: "20,00",
  },
];

export const menu = function () {
  window.scrollTo(0, 0);
  let container = document.createElement("div");
  let title = document.createElement("h1");
  title.textContent = "Menu";

  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container", "container");

  for (let dish of menuArray) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img class="dish-img" src="${dish.imageURL}" alt="${dish.name}">
   <p class="dish-name">${dish.name}</p>
   <div class="dish-description">${dish.description}</div>
   <div class="price">$ ${dish.price}</div>`;
    menuContainer.appendChild(card);
  }

  container.appendChild(title);
  container.appendChild(menuContainer);
  return container;
};

// <div class="card">
//   <img class="dish-img" src="https://images.pexels.com/photos/5949893/pexels-photo-5949893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
//   <p class="dish-name">Title</p>
//   <div class="dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
//   <div class="price">12,50</div>
// </div>
