const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul#ingredients");

let list = ingredients.map(element =>{
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  return li;
});

ul.append(...list);
