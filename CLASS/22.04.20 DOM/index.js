document.write("Hey this is me");
document.write("<h3> Simona</h3>")
const create=()=>{
    let newElem = document.createElement('div');
    let newText = document.createTextNode('I am a student');
    console.log(newElem);
    newElem.appendChild(newText);
    document.body.appendChild(newElem);
}
const addToList = () => {
    let userInput = document.querySelector("#userText").value;
    console.log(userInput);
    let newLi = document.createElement("li");
    let text = document.createTextNode(userInput);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userText").value = "";
}