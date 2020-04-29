let header = document.querySelector("h2").innerHTML = "Hi, welcome to the weekend countdown app"
let checkBtn = document.querySelector("#check");
let date = new Date();
const getDayName = ()=>{
    return date.toLocaleDateString('en-En', 
   {weekday:"long"});
}
const weekend = () => {
    let userName = document.querySelector("#userName");
    let result = document.querySelector(".result");
    result.innerHTML = `Hey ${userName.value}, today is 
    ${getDayName()}, ${5 - date.getDay()} days left till weekend`;
    console.log(getDayName());
}
checkBtn.addEventListener("click", weekend);