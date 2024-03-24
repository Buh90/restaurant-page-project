import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import "./style.css";

const mainContent = document.getElementById("content");
const navButtons = Array.from(document.querySelectorAll("button"));

mainContent.innerHTML = home();

for (const btn of navButtons) {
  btn.addEventListener("click", function () {
    console.log(btn.textContent);
    switch (btn.textContent) {
      case "Home":
        mainContent.innerHTML = home();
        break;
      case "Menu":
        mainContent.innerHTML = menu();
        break;
      case "Contact":
        mainContent.innerHTML = contact();
        break;
      default:
        break;
    }
  });
}
