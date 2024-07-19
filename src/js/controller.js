import * as model from './model.js';
import recipeView from './views/recipeview.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    console.log(recipeView);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
controlRecipes();

window.addEventListener('hashchange', controlRecipes);
