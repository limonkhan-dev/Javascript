let btn = document.querySelector(`#diceBtn`);
let img = document.querySelector(`#img`);
let maxNum = 6;
let minNum = 1;
let result;




//Add event listener
btn.addEventListener(`click`, rollDice);

//Create function
function rollDice(){
    result = Math.ceil(Math.random() * maxNum) + ".png"
    console.log(result);
    img.src = `./images/` + result;
}