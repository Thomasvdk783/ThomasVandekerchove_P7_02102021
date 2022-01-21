"use strict";
/////////////////////////////////////////

// fetch initialization //
export default async function dataRecipes() {
  const responseJSON = await fetch("../../Data/ApiRecipes.json");
  const responseJS = await responseJSON.json();
  const recipes = responseJS.recipes;

  // Show Recipes //
  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    const afficheIngredients = document.querySelectorAll('.ingredients-explication');
    const pIngredient = document.querySelectorAll('.show-ingredient')
    arrIngredients.forEach(function(ing){
      let ingredient = ing.ingredient;
      let quantity = ing.quantity;
      let unit = ing.unit;
      const showIngredient = `<p>${ingredient} : ${quantity} ${unit}</p>`;
      console.log(showIngredient)
      // pIngredient.innerHTML += showIngredient
    })

    const containerRecipes = document.getElementById("list-recipes");
    const recipeCard = `<section class="card-recipe">
            <figure>
              <img src="medias/Recette-pâtes-carbonara-au-thermomix.jpg" alt="" />
            </figure>
            <article class="bottom-part-card-recipe">
              <header class="card-header">
                  <h2>${item.name}</h2>
                  <p class="p-time">
                      <img src="./medias/time.svg" alt="time of recipe">
                      ${item.time}
                  </p>
              </header>
              <article class="ingredients-explication">
                  <p class="show-ingredient"></p>
                  <p>
                      ${item.description}
                  </p>
              </article>
            </article>
          </section>`;

    containerRecipes.innerHTML += recipeCard;
  });
}
dataRecipes();
