'use strict';

export default function myFunctionIngredients() {
  const btnAfficheIngredients = document.querySelector(".dropbtn1");
  const dropContentIngredients = document.querySelector(".dropdown-content");

  // DATA //
  async function dataRecipes() {
    const responseJSON = await fetch("../../Data/ApiRecipes.json");
    const responseJS = await responseJSON.json();
    const recipes = responseJS.recipes;
    recipes.forEach(item => {
      const arrayIngredients = item.ingredients;
      arrayIngredients.forEach(ing => {
        const ingredientList = ing.ingredient;
        // console.log(ingredientList);
        const showIngredientList = `<ul class="ul-btn-ingredients"><li>${ingredientList}</li></ul>`
        dropContentIngredients.innerHTML += showIngredientList;
      })
    });
  }
  dataRecipes();

  btnAfficheIngredients.addEventListener("click", function () {
    dropContentIngredients.style.display = "block";
    // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
  });
}
myFunctionIngredients();
