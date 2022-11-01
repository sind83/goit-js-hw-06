function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesArea = document.querySelector("div#boxes");
const createBtn = document.querySelectorAll("button")[0];
const removeBtn = document.querySelectorAll("button")[1];
const input = document.querySelectorAll("input");
const controls = document.querySelectorAll("div#controls")

// console.log(createBtn, removeBtn);
const size = (30);
const createBox = () => {
    
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

  return box
}



createBtn.addEventListener("click", () => {
  const amount = input[0].value;
  console.log(input[0].value);
  createBox(amount);
  const boxes = Array.from({ length: amount }, createBox);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.width = ` ${size+(10 * i)}px`;
    boxes[i].style.height = `${size + (10 * i)}px`;
  }
console.log(boxes, boxes[0].style.width);
const fragment = document.createDocumentFragment();
  
  fragment.append(...boxes);
  console.log(boxes);
  console.log(fragment);
boxesArea.append(fragment);
});

removeBtn.addEventListener("click", () => {
  while (boxesArea.lastChild) {
    boxesArea.removeChild(boxesArea.lastChild)
  }
});
