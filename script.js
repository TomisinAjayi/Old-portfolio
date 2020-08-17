var yourName = document.getElementById("inputName");
var yourEmail = document.getElementById("inputEmail");
var submitButton = document.getElementById("submit");
var errorMessage = document.getElementById("errormsg");
//submitButton.disabled = "true";

function validateForm() {
    if (yourName.value === "" || yourEmail.value === "") {
        errorMessage.style.display = "block";
        //submitButton.disabled = "true";
    } else {
        errorMessage.style.display = "none";
        //submitButton.disabled = "";
    }
}