"use strict";
//defining variables
/*let id: number = 5;
let company: string = "Account Number";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 30];
let sds: string[] = ["hi", "Hello"];
let anny: any[] = ["Nyakallo", 1, false];

const concatenateValues = (a: string, b: string): string => {
    return a + b ;
}

console.log(concatenateValues("Hello", "World"));
console.log(concatenateValues(5, 15));*/
const User = {
    id: 2,
    name: "Nyakallo",
    greet(message) {
        console.log(message);
    }
};
//if (!User.age) {
//    console.log("No Age Of the User");
//} else {
//    console.log(User.age);
//}
User.greet("Hello");
