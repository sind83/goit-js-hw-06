function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesArea = document.querySelector("div#boxes");
const createBtn = document.querySelector('[data-create]');
const removeBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');
const controls = document.querySelectorAll("div#controls");
const inpMin = input.getAttribute('min');
const inpMax = input.getAttribute('max');


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
  if (input.value < parseInt(inpMin) || input.value > parseInt(inpMax)) {
    return alert(`Entered value should be in range: ${inpMin} - ${inpMax}`);
  } else {
    const amount = input.value;
    const boxes = Array.from({ length: amount }, createBox);

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.width = ` ${size + (10 * i)}px`;
      boxes[i].style.height = `${size + (10 * i)}px`;
    }
    // console.log(boxes, boxes[0].style.width);
    boxesArea.append(...boxes);
  }
});

removeBtn.addEventListener("click", () => {
    boxesArea.innerHTML = '';
});
