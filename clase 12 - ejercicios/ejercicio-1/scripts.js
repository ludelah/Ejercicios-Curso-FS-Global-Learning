const MAX_NAME_LENGTH = 30


const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmpw = document.getElementById("confirm-pw");
const birthday = document.getElementById("birthday");
const checkbox = document.getElementById("newsletter-checkbox");

const button = document.querySelector("button");

const validate = () => {
    
    let isValid = true

    isValid = firstName.value.length < MAX_NAME_LENGTH
    isValid = firstName.value.length > 0
    isValid = !containsNumbers(firstName.value)
    
    isValid = lastName.value.length < MAX_NAME_LENGTH
    isValid = lastName.value.length > 0
    isValid = !containsNumbers(lastName.value)
    
    isValid = containsNumbers(password.value)
    IsValid = password.value === confirmpw.value

    debug();
    console.log("----------")

    console.log(`is valid? : ${isValid}`)

    return isValid
}

function debug() {
    firstName.value.length < MAX_NAME_LENGTH ?    console.log("") : console.log(`ERROR: el nombre no puede superar el tamaño máximo de ${MAX_NAME_LENGTH}`)
    firstName.value.length > 0 ?                  console.log("") : console.log("ERROR: el nombre no debe estar vacío")
    !(containsNumbers(firstName.value)) ?         console.log("") : console.log("ERROR: el nombre no debe contener números")
    lastName.value.length < MAX_NAME_LENGTH ?     console.log("") : console.log(`ERROR: el apellido no puede superar el tamaño máximo de ${MAX_NAME_LENGTH}`)
    lastName.value.length > 0 ?                   console.log("") : console.log(`ERROR: el apellido no debe estar vacío`)
    !(containsNumbers(lastName.value)) ?          console.log("") : console.log(`ERROR: el apellido no debe contener números`)
    containsNumbers(password.value) ?             console.log("") : console.log("ERROR: la contraseña debe contener números")
    password.value === confirmpw.value ?          console.log("")  : console.log("ERROR: las contraseñas deben coincidir")
}

button.addEventListener("click", () => {
    if (validate())
    {
        window.alert(`Gracias por ceder tus datos ${firstName.value}`)
    }
    else
    {
        window.alert("ERROR: Verifique los campos")
    }
})

window.addEventListener("change", validate);

function containsNumbers(str)
{
    const regex = /[0-9]/g;
    return regex.test(str);
}