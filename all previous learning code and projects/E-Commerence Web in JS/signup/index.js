const form = document.getElementById('form');
const firstnameInput = document.getElementById('firstname-Input');
const emailInput = document.getElementById('email-Input');
const passwordInput = document.getElementById('password-Input');
const repeatpasswordInput = document.getElementById('Repeatpassword-Input');
const errorsElement = document.getElementById('errors');

form.addEventListener('submit', (e) => {
    let errors = [];


    if (firstnameInput) {
        errors = getSignupFormErrors(firstnameInput.value, emailInput.value, passwordInput.value, repeatpasswordInput.value,);
    }
    else {
        errors = getLoginFormErrors(emailInput.value, passwordInput.value,)
    }

    if (errors.length > 0) {
        e.preventDefault()
        errorsElement.innerText = errors.join('. ')
    }
})

function getSignupFormErrors(firstname, email, password, Repeatpassword) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push("first name is required");
        firstnameInput.parentElement.classList.add("incorrect")
    }
    if (email === '' || email == null) {
        errors.push("email is required");
        emailInput.parentElement.classList.add("incorrect")
    }
    if (password === '' || password == null) {
        errors.push("Password is required");
        passwordInput.parentElement.classList.add("incorrect")
    }
    if (Repeatpassword === '' || Repeatpassword == null) {
        errors.push("Repeat Password is required");
        repeatpasswordInput.parentElement.classList.add("incorrect")
    }
    if (password.length < 8) {
        errors.push("password have at least 8 chracters")
        passwordInput.parentElement.classList.add("incorrect");
    }
    if (password !== Repeatpassword) {
        errors.push("Repeat Password doesn't match")
        repeatpasswordInput.parentElement.classList.add("incorrect");
    }

    return errors
}

function getLoginFormErrors(email, password) {
    let errors = []


    if (email === '' || email == null) {
        errors.push("eamil is required");
        emailInput.parentElement.classList.add("incorrect");
    }
    if (password === "" || password == null) {
        errors.push("Password is required");
        passwordInput.parentElement.classList.add("incorrect");
    }

    return errors;
}

const allInputs = [firstnameInput, emailInput, passwordInput, repeatpasswordInput].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            errors.innerText = '';
        }
    })
})

// to view passwrod
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener('change', () => {
    const type = showPassword.checked ? "text" : "password";

    passwordInput.setAttribute("type", type);
    repeatpasswordInput.setAttribute("type", type);
})