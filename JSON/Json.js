let student = {
    name: "Nyakallo",
    age: 30,
    isAdmin: false,
    course: ["java", "php", "css"],
    spouse: null
}

let json = JSON.stringify(student);

console.log(typeof json);

console.log(json);

let room = {
    Number: 25
};

let meetup = {
    title: "Conference",
    participance: [{name: "Nyakallo"},
{name: "James"}]
}

//Excluding and transforming: replacer

