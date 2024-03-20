/*function myDisplay(some) {
    document.getElementById("demo").innerHTML = "I love you!";
}*/

/*function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplay(result);*/

//function myCalculator(num1, num2, myCallback) {
    //let sum = num1 + num2;
    //myCallback(sum);
//}

//myCalculator(5, 10, myDisplay);

/*setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}*/

/*let myPromise = new Promise((myResolve, myReject) => {
    myResolve();
    myReject();
})

myPromise.then(
    (value) => {
        console.log("successful");
    },
    (erroe) => {
        console.log("error");
    }
)*/

function myDisplay(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
    if(x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    (value) => {
        myDisplay(value);
    },
    (error) => {
        myDisplay(error);
    }
);