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

//interface and types
interface UserInterface {
    id: number;
    name: string;
    age?: number;  //? makes the age optional so the user is not required to enter it
}


const User: UserInterface = {
    id: 2,
    name: "Nyakallo",
    
};

console.log(User.age);