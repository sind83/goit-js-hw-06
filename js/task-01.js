const catergories = document.querySelector("ul#categories");
const itemNumber = catergories.children.length;
console.log(`Number of Categories: ${itemNumber}`);

const catList = document.querySelectorAll("li.item");
catList.forEach((element) => {
    const categoryTitle = element.firstElementChild.textContent;
    const numberOfElemens = element.querySelectorAll("li").length
    console.log(`Category: ${categoryTitle}`)
    console.log(`Elements: ${numberOfElemens}`);
});

