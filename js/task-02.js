const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

// const elements = ingredients.map(option => {
//   const ingredient = document.createElement('li');
//   ingredient.textContent = option;

//   return ingredient
// });

// ingredientsEl.append(...elements);


const makeIngredientsLists = options => {
  return options.map(option => {
    const ingredient = document.createElement('li');
    ingredient.textContent = option;
    
    return ingredient
  });
};

const elements = makeIngredientsLists(ingredients);
ingredientsEl.append(...elements);