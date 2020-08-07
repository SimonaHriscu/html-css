let userNum = window.prompt("Guess a number between 1-10:");
console.log(userNum);
//  Function for getting a random number;
// function randomNum() {
//     let  x = Math.floor((Math.random() * 10) + 1);
//     //  return x;
//     document.getElementById("click").innerHTML = x;
//    }
let randomNumber = Math.floor(Math.random() * 10 + 1);

const correctNum = () => {
  let numberAttempts = 1;
  for (let i = 0; i < 4; i++) {
    //  numberAttempts++;
    //console.log(numberAttempts);
    if (userNum == randomNumber) {
      alert(
        `Congratulations, the number was ${randomNumber}. Attempts: ${numberAttempts}`
      );
    } else if (userNum != randomNumber && numberAttempts <= 3) {
      numberAttempts++;
      window.prompt(`Try again.Your attempt number is : ${numberAttempts}`);
    }
    if (numberAttempts == 3) {
      alert(
        `The number was ${randomNumber}. You have ${numberAttempts} attempts. Game over`
      );
      break;
    }
  }
};

console.log(correctNum());

