/*const event = new Promise ((resolve, reject) => {
    let name = "Nyakall0";
    if (name == "Nyakallo") {
        resolve();
    } else {
        reject();
    }
});

event.then((name) => {
    console.log(name)
})
.catch((err) => {
    console.log(err);
})*/

// fetching api data 

const axios = require("axios");

const data = axios.get("https://cat-fact.hersokuapp.com/facts");

data.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Promise resolved");
});