//localStorage.setItem("test", 1);
//console.log(localStorage.getItem("test"));

//for(let i = 0; i < localStorage.length; i++) {
//    let key = localStorage.key(i);
//    console.log(`${key}: ${localStorage.getItem(key)}`);
//}

localStorage.user = JSON.stringify({name: "Nyakallo"});
console.log(localStorage.user);

let user = JSON.parse(localStorage.user);
console.log(user.name);

console.log(JSON.stringify(localStorage, null, 2));

window.onstorage = event => {
     if(event.key != now) return;
     console.log(event.key + ":" + event.newValue + " at " + event.url); 
};

localStorage.setItem("now", Date.now());
console.log(localStorage.getItem("now"));