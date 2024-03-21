//If statement

let year = prompt("In which year was js ecma developed?");
if (year == 2015) alert("your are right");

let accessAllowed;
let age = prompt("How old are you?", "");
if(age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

//Boolean conversion

//let result = condition ? value1 : value2;

let age = prompt("how old are you?")
let accessAllowed = (age > 18) ? true : false

alert(accessAllowed);

//Multiple ?

let age = prompt("age?", 18);

let message = (age < 3) ? "hi, baby!" :
(age < 18) ? "hello!" : 
(age < 100) ? "Greetings!" :
"What an unusual age!";

alert(message);

//Non-traditional us of ?
