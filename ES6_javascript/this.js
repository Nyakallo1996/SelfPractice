let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage();