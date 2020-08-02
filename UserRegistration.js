const prompt = require('prompt-sync')();

let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const name = prompt('Enter first name:: ');
let checkFirstName = firstNameRegex.test(name);

if(checkFirstName == true)
   console.log(`Hey ${name}`);
else
   console.log("Enter valid name");
