let title = document.querySelectorAll(".title");
let myText = document.querySelectorAll(".myText");

title.forEach((el) => {
    el.addEventListener("click", () => {
        console.log(el.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle("active");
    })
})

function remover() {
    myText.forEach((ele) => {
        ele.classList.remove("active");
    })
}