//// BTN appareil /////
import dataRecipes from "./dataApi.js";

export default function myFunctionAppareils() {
  const btnAfficheIngredients = document.querySelector(".dropbtn2");
  const dropContent = document.querySelector(".dropdown-content-appareil");
  const dropDownIngredient = document.querySelector(".dropdown-appareil");

  btnAfficheIngredients.addEventListener("click", function () {
    dropContent.style.display = "block";
    // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
  });
  dataRecipes();
}
myFunctionAppareils();