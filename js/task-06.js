const input = document.querySelector("input");
input.addEventListener("blur", (event)=>{
    const length = event.target.value.length;
    const maxLength = parseInt(input.getAttribute("data-length"))
    if (length == maxLength){
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else{
        input.classList.remove("valid");
        input.classList.add("invalid");
    }

});