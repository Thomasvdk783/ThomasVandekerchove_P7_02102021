"use strict";
/////////////////////////////////////////

// fetch initialization //
export default async function dataRecipes() {
  const responseJSON = await fetch("../../Data/ApiRecipes.json");
  const responseJS = await responseJSON.json();
  const recipes = responseJS.recipes;

  // Show Recipes
  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    let showIngredients;
    arrIngredients.forEach(function (ing) {
      const ingredient = ing.ingredient;
      const quantity = ing.quantity;
      const unit = ing.unit;
      showIngredients = `<ul class="show-ingredient"><li>${ingredient} : ${quantity} ${unit}</li></ul>`;
    });

    const containerRecipes = document.getElementById("list-recipes");
    const recipeCard = `<section class="card-recipe">
            <figure>
              <img src="medias/food.jpg" alt="" />
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
                    ${showIngredients}
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
