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
console.log(concatenateValues(5, 15));

//interface and types
interface UserInterface {
    id: number;
    name: string;
    age?: number;  //? makes the age optional so the user is not required to enter it
    greet(message: string): void;
}


const User: UserInterface = {
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

//Unions and intersactions

//Using Unions
type IDFielsType = String | number;

const printID = (id: IDFielsType ) => {
    console.log("ID: " + id);
} 

printID(1234562);

//intersactions 
interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
    console.log("contract signed by " + employee.name + "with email " + employee.email);
}

signContract({name: "Nyakallo", creditScore: 800, id: 34, email: "Nyakallo@gmail.com"})

//Enums
enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "no user",
    WrongCredentials = "wrongcredentials",
    internal = "internal"
}

const printErrorMsg = (error: LoginError) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    } else if (error == LoginError.NoUser) {
        console.log("No user was found");
    }
}

printErrorMsg(LoginError.Unauthorized);*/

//Generic types
