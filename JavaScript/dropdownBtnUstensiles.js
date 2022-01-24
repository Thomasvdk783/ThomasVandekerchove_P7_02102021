//// BTN ustensiles /////

import dataRecipes from "./dataApi.js";

export default function myFunctionUstensiles() {
  const btnAfficheIngredients = document.querySelector(".dropbtn3");
  const dropContent = document.querySelector(".dropdown-content-ustensiles");
  const dropDownIngredient = document.querySelector(".dropdown-ustensiles");

  btnAfficheIngredients.addEventListener("click", function () {
    dropContent.style.display = "block";
    // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
  });
  dataRecipes();
}
myFunctionUstensiles();






// function myFunctionUstensiles() {
//   document.getElementById("myDropdownUstensiles").classList.toggle("show");
// }

// function filterFunctionUstensiles() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInputUstensiles");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdownUstensiles");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
