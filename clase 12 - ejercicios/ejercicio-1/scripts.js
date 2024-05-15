const MAX_NAME_LENGTH = 30;

const allNames = document.querySelectorAll(".name");
const allPasswords = document.querySelectorAll(".password");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmpw = document.getElementById("confirm-pw");
const birthday = document.getElementById("birthday");
const checkbox = document.getElementById("newsletter-checkbox");

const warnings = document.querySelectorAll(".warning")

const button = document.querySelector("button");

//flags
let isFirstNameValid = true;
let isLastNameValid = true;
let isPasswordValid = true;

const validateName = (name) => {
    return name.length < MAX_NAME_LENGTH && name.length > 0 && !containsNumbers(name);
};

const validatePassword = (password, confirmation) => {
    return containsNumbers(password) && password === confirmation;
};

const validate = () => {
    let isValid = true;

    isFirstNameValid = validateName(firstName.value);
    isLastNameValid = validateName(lastName.value);
    isPasswordValid = validatePassword(password.value, confirmpw.value);

    debug();

    console.log("----------");

    isValid = isFirstNameValid && isLastNameValid && isPasswordValid;
    console.log(`is valid? : ${isValid}`);

    return isValid;
};

function debug() {
    firstName.value.length < MAX_NAME_LENGTH ? console.log("") : console.log(`ERROR: el nombre no puede superar el tamaño máximo de ${MAX_NAME_LENGTH}`);
    firstName.value.length > 0 ? console.log("") : console.log("ERROR: el nombre no debe estar vacío");
    !containsNumbers(firstName.value) ? console.log("") : console.log("ERROR: el nombre no debe contener números");
    lastName.value.length < MAX_NAME_LENGTH   ? console.log("")
    : console.log(`ERROR: el apellido no puede superar el tamaño máximo de ${MAX_NAME_LENGTH}`);
    lastName.value.length > 0 ? console.log("") : console.log(`ERROR: el apellido no debe estar vacío`);
    !containsNumbers(lastName.value) ? console.log("") : console.log(`ERROR: el apellido no debe contener números`);
    containsNumbers(password.value) ? console.log("") : console.log("ERROR: la contraseña debe contener números");
    password.value === confirmpw.value ? console.log("") : console.log("ERROR: las contraseñas deben coincidir");

}

const saveData = () => {
    localStorage.setItem('first-name', firstName.value)
    localStorage.setItem('last-name', lastName.value)
    localStorage.setItem('username', username.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('birthday', birthday.value)
    localStorage.setItem('newsletter', checkbox.value)
    console.log(localStorage.getItem('first-name'))
}

button.addEventListener("click", () => {
    if (validate()) {
        saveData()
    } else {
        window.alert("ERROR: Verifique los campos");
    }
});

window.addEventListener("input", validate);

allNames.forEach((name) => {
    name.addEventListener("input", () => {
    if (validateName(name.value)){ 
        name.classList.remove("invalid") 
    } else {
        name.classList.add("invalid");  
    }
    });
});

firstName.addEventListener("change", () => {
        isFirstNameValid ? warnings[0].classList.add("hidden") : warnings[0].classList.remove("hidden")
})

lastName.addEventListener("change", () => {
        isLastNameValid ? warnings[1].classList.add("hidden") : warnings[1].classList.remove("hidden")
})

confirmpw.addEventListener("change", () => {
        isPasswordValid ? warnings[2].classList.add("hidden") : warnings[2].classList.remove("hidden")
})




confirmpw.addEventListener("change", () => {
    if (validatePassword(password.value, confirmpw.value)){
        password.classList.remove("invalid") 
        confirmpw.classList.remove("invalid")
    }
    else {
        password.classList.add("invalid")
        confirmpw.classList.add("invalid")
    } 
})



function containsNumbers(str) {
    const regex = /[0-9]/g;
    return regex.test(str);
}

const dataButton = document.getElementById("showdata")
dataButton.addEventListener("click", () => {
    console.log(window.localStorage.getItem('first-name'))
    console.log(window.localStorage.getItem('last-name'))
    console.log(window.localStorage.getItem('username'))
    console.log(window.localStorage.getItem('password'))
    console.log(window.localStorage.getItem('birthday'))
    console.log(window.localStorage.getItem('newsletter'))
})