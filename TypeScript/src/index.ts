let sales: number = 123_456_78;

//Arrays 
let numbers: number[] = [1, 2, 3];

//Enums
enum Size {Small, Medium, Large};

let mySize: Size = Size.Medium;

console.log(mySize);

//functions
function calculateTax(income: number, taxYear: number) : number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022)