const prompt = require('prompt-sync')();

let namePattern = RegExp("^[A-Z]{1}[A-Za-z]{2}");

function checkPattern(input, inputPattern) {
		return inputPattern.test(input);
}

function getFirstName(){
    let firstName = prompt("Enter First Name: ");
    if(!checkPattern(firstName, namePattern)){
        console.log("Enter Valid First Name");
        getFirstName();
    }
    return;
}

function getLastName(){
    let lastName = prompt("Enter Last Name: ");
    if(!checkPattern(lastName, namePattern)){
        console.log("Enter Valid Last Name");
        getLastName();
    }
    return
}

getFirstName();
getLastName();
