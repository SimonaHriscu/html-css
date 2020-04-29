
function inputOne(){
    let valOne = document.querySelector("#firstNumber").value;
    if (valOne == "") {
     return alert("You cannot have an empty input");
        }
     }

 function inputTwo(){
    let valTwo = document.querySelector("#secondNumber").value;
    if (valTwo == "") {
        return alert("You cannot have an empty input");
    }
 }

function calc(){
    let result = document.querySelector("#sumResult");
    let elemOne = document.querySelector("#firstNumber").value
    let number1 = parseInt(elemOne);
    
    let elemTwo = document.querySelector("#secondNumber").value;
    let number2 = parseInt(elemTwo);
    
    let sum = number1 + number2;
    result.value = sum;
    return sum;
}




