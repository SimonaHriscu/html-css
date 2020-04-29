function calc(){
    let elemOne = document.querySelector("#firstNumber").value
    let number1 = parseInt(elemOne);
    
    let elemTwo = document.querySelector("#secondNumber").value;
    let number2 = parseInt(elemTwo);
    let select = document.getElementById("select").value;
    let result = document.querySelector("#sumResult");
    switch (select) {
        case "+":
          result.value = number1 + number2;
          break;
        case "-":
          result.value = number1 - number2;
          break;
        case "*":
          result.value = number1 * number2;
          break;
        case "/":
          result.value = number1 / number2;
          break;
    
}
}

