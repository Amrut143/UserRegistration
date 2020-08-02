const prompt = require('prompt-sync')();

let namePattern = RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = RegExp("^[0-9a-zA-Z]+([-_+.][0-9a-zA-Z]+)*@[0-9A-Za-z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{3})*$");
let phonePattern = RegExp("^([+]?[0-9]{2}[ ]?)([6-9]{1})([0-9]{9})$");

function checkPattern(input, inputPattern) {
		 return inputPattern.test(input);
}

function validateFirstName(){
    let firstName = prompt("Enter First Name: ");
    if(!checkPattern(firstName, namePattern)){
        console.log("Enter Valid First Name");
			getFirstName();
    }
}

function validateLastName(){
    let lastName = prompt("Enter Last Name: ");
    if(!checkPattern(lastName, namePattern)){
        console.log("Enter Valid Last Name");
			getLastName();
    }
}

function validateEmail(){
    let email = prompt("Enter Email: ");
    if(!checkPattern(email, emailPattern)){
        console.log("Enter Valid Email");
			getEmail();
    }
}

function validatePhoneNumber(){
    let phone = prompt("Enter Phone Number: ");
    if(!checkPattern(phone, phonePattern)){
        console.log("Enter Valid Phone Number");
        validatePhoneNumber();
    }
}

validateFirstName();
validateLastName();
validateEmail();
validatePhoneNumber();
