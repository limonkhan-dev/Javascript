//Code driven invocation function 
//function is reusable code block
function welcome(userName, age){

    //condition method
    // if(userName===""){
    //     userName = "'Please enter your user name!'"
    // }
    // if(age===""){
    //     age = "'Please enter your age!'"
    // }

    //Logical or method
    userName = userName || "'Please enter your user name!'";
    age = age || "'Please enter your age!'";
    console.log(`Welcome ${userName}. I'm ${age} years old.`);
}
//for take user input
// let fname = prompt(`Enter your name:`);
// let age = prompt(`Enter your age`);

//for set from code
let fname = "Limon";
let age = 30;
welcome(fname,age); //function call kora


//Event driven invocation function
let text = document.querySelector(`#text`);
let btn = document.querySelector(`#btn`);

btn.addEventListener(`click`, lighting); //Add function on event

function lighting(){
    text.innerHTML = `Light On !`;
    text.style.color = `red`;
}


//Self invocation
(function(fname = `Limon`){
    console.log(`Hello ${fname}. I'm self invocation.`);
})(`Rony`)


//function expression
let addition = function(a, b){
    return a + b ;
};
console.log(addition(4,5));


//Arrow function
//Simple, just no function keyword, no karlipesis, use only (perameter) => value;
let subs = (x,y) => x-y;
console.log(subs(8,2));


//Nested function
function greeting(nickName){
    function message(){
        nickName = nickName || "'Please enter your name: '";
        alert(`Hello ${nickName}`)
    }
    return message();
}
console.log(greeting(prompt(`Please enter your name: `)));