const user = document.querySelector("span#name-output");
const typingUser = document.querySelector("input#name-input");

typingUser.addEventListener("input", (event)=>{
    let inputValue = event.target.value;
    
    if (inputValue =='') {
        inputValue = "Anonymous";
    }
    user.textContent = inputValue;

});