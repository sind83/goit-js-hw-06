
const form = document.querySelector("form.login-form");

const email = form.querySelector('input[name="email"]');
const password = form.querySelector('input[name="password"]');


form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const formData = {
        email: email.value,
        password: password.value
    };

    if ((formData.email==="") || (formData.password==="")){
        alert("Please fill in all the fields!")
    }else{

        console.log(`e-mail: ${formData.email}, password: ${formData.password}`);
        event.currentTarget.reset();
    }
});
