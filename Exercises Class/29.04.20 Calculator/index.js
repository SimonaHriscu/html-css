function calc(){
    let elemOne = document.querySelector("#firstNumber").value
    let number1 = parseInt(elemOne);
    
    let elemTwo = document.querySelector("#secondNumber").value;
    let number2 = parseInt(elemTwo);
    
    let result = document.querySelector("#sumResult");
    let sum = number1 + number2;
    result.value = sum;
    return sum;
}




