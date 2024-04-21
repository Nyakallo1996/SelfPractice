const grid = document.querySelector(".grid")
const results = document.querySelector(".results")
const width = 15

for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div")// creating a div element 
    grid.appendChild(square)// putting the div element i just created in my div element with the class name grid
}

const squares = Array.from(document.querySelectorAll(".grid div"))// put all the div's in an array