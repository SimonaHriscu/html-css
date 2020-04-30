function redBg(){
    this.style.backgroundColor = "red";
}
function whiteBg(){
    this.style.backgroundColor = "white";
}
function newUser(){
    result.innerHTML += 'Hi this is you <br> ';
}

function windowLoad(){
    //setInterval(newUser,1000)
    //alert("Hi new person");
}

///remove Event listeners
const stop =()=>{
    header.removeEventListener("mouseover", redBg);
    header.removeEventListener("mouseover", whiteBg);
}
///it is a must when we have a button in the form
function changeColor(){
    event.preventDefault();
}
let header = document.querySelector("h1");
let result = document.querySelector(".result");
header.addEventListener("mouseover", redBg);
header.addEventListener("mouseleave", whiteBg);

window.addEventListener("load", windowLoad);

let form = document.querySelector("form");
form.addEventListener("submit", () => {
    alert("Thanks for your feedback");
});
form.addEventListener("reset", () => {
    alert("Your INput has been deleted");
})