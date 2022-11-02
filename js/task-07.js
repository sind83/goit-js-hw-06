const fontSize = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

text.style.fontSize = `${fontSize.value}px`;

fontSize.addEventListener("input", ({target}) =>{
    text.style.fontSize = `${target.value}px`;
   
});