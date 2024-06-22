const form = document.getElementById("form");
const btn = document.getElementById("btn");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstError = document.querySelector(".firstNameError");
const lastError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const firstEmpty = document.querySelector(".firstNameEmpty");
const lastEmpty = document.querySelector(".lastNameempty");
const emailEmpty = document.querySelector(".not_email");
const passwordEmpty = document.querySelector(".passwordempty");





form.addEventListener("submit",(e) => {
    e.preventDefault();
   if (firstName.value === "") {
    firstError.classList.remove("hidden")
    firstEmpty.classList.remove("hidden")
   }
   if (lastName.value === "") {
    lastError.classList.remove("hidden")
    lastEmpty.classList.remove("hidden")
   }
   if (password.value === "") {
    passwordError.classList.remove("hidden")
    passwordEmpty.classList.remove("hidden")
   }
   if (firstName.value.length > 0) {
    firstError.classList.add("hidden")
    firstEmpty.classList.add("hidden")
   }
    if (lastName.value.length > 0) {
    lastError.classList.add("hidden")
    lastEmpty.classList.add("hidden")
   }
   if (password.value.length > 0) {
    passwordError.classList.add("hidden")
    passwordEmpty.classList.add("hidden")
   }


   if  (isEmail(email.value.trim())) {
    emailError.classList.add("hidden")
    emailEmpty.classList.add("hidden")
        
 }else {
   emailError.classList.remove("hidden")
   emailEmpty.classList.remove("hidden")
 }

 
 })
 function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
 
 
 

