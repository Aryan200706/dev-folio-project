const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

nameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";

let valid = true;

if(name === ""){
nameError.textContent = "Name cannot be empty";
valid = false;
}

let emailPattern = /.+@.+\..+/;

if(email === ""){
emailError.textContent = "Email cannot be empty";
valid = false;
}
else if(!emailPattern.test(email)){
emailError.textContent = "Enter valid email";
valid = false;
}

if(message.length < 5){
messageError.textContent = "Message must be at least 5 characters";
valid = false;
}

if(valid){
console.log("Form submitted successfully!");
alert("Form submitted successfully!");
form.reset();
}

});