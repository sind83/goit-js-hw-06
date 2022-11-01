const fontSize = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

fontSize.addEventListener("input", ({target}) =>{
    text.style.fontSize = `${target.value}px`;
   
});