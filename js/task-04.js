let counterValue = 0;
const spanValue = document.querySelector("span#value");

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", ()=>{
    counterValue-=1;
    return spanValue.textContent=counterValue.toString();
});
buttons[1].addEventListener("click", ()=>{
    counterValue+=1;
    return spanValue.textContent=counterValue.toString();
});