const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
const listItem = document.createElement("li");

listItem.textContent = ingredient;

listItem.classList.add("item");

ingredientsList.appendChild(listItem);

console.log(`Ingredient adăugat: ${ingredient}`);
});

