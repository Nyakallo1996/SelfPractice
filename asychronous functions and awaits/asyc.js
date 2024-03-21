/*function saySomething(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("something" + x);
    }, 2000);
  });
}
async function talk(x) {
  const words = await saySomething(x);
  console.log(words);
}
talk(2);
talk(4);
talk(8);*/

//Practice exercise 13.3

/*let cnt = 0;
function outputTime(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cnt++;
      resolve(`x value ${val} counter:${cnt}`);
    }, 1000);
  });
}
async function aCall(val) {
  console.log(`ready ${val} counter:${cnt}`);
  const res = await outputTime(val);
  console.log(res);
}
for (let x = 1; x < 4; x++) {
  aCall(x);
}*/

/*function saySomething(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("something" + x);
    }, 2000);
  });
}

async function talk(x) {
  const words = await saySomething(x);
  console.log(words);
}

talk(2);
talk(3);
talk(8);*/

/*let counter = 0;

function startCount(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(counter++);
    }, 2000)
  });
}

async function count(x) {
  const counting = await startCount(x);
  console.log(counting);
}*/

/*let counter = " ";

function letsWork(work) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       counter++;
       resolve(counter + work);

    }, 1000)
  })
}

async function results(x) {
  
}*/

setTimeout(() => {
  console.log("first timeout completed");
}, 2000);

//Using callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = {name: "John", age: "30"};
    callback(data);
  }, 3000);
}

fetchData(function(data) {
  console.log(data);
});

console.log("Data is being fetched...");


//Promises

