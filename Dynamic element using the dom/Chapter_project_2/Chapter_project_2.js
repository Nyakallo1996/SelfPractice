window.onload = build;

let myArray = ["Nyakallo", "Tumisang", "Lehakoe", "Hlapi"];
let message = document.getElementById("message");
let addFriend = document.getElementById("addFriend");
let addNew = document.getElementById("addNew");
let table = document.getElementById("output");

addNew.addEventListener("click", () => {
    let newFriend = addFriend.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);
})

function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0);
    })
}
