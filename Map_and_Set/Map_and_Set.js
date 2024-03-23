//Map and Set

let john = {name: "John"};

let visitCountMap = new Map();

visitCountMap.set(john, 123);

alert(visitCountMap.get(john));

//Iteration over Map

let recipeMap = new Map([
    ["cucumber", 500],
    ["tomatoes", 350],
    ["onion", 50]
])

//iterate over keys (vegatables)
for (let vegatables of recipeMap.keys()) {
    console.log(vegatables);//cucumber,tomatoes,onion
}

//iterate over values (amount)
for (let amount of recipeMap.values()) {
    console.log(amount);//500,350,50
}

//iterate over [key, value] entries
for (let entry of recipeMap.entries()) {
    console.log(entry)//cucumber,500,tomatooes,350,onion,50
}

//Object.entries: Map from object

let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));

console.log(map.get("name"));//John

//Set

