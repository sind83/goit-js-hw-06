let counterValue = 0;
const spanValue = document.querySelector("span#value");

const decBtn = document.querySelectorAll('button[data-action="decrement"]');
const incBtn = document.querySelectorAll('button[data-action="increment"]');

decBtn.addEventListener("click", ()=>{
    counterValue-=1;
    return spanValue.textContent=counterValue.toString();
});
incBtn.addEventListener("click", ()=>{
    counterValue+=1;
    return spanValue.textContent=counterValue.toString();
});