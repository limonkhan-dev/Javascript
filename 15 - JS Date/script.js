const myDate = Date(); //store date as a string
console.log(myDate);

const newDate = new Date(); //store date as a object
console.log(newDate);

//If store date as a object than can use get() method
const testDate = new Date("2026-4-12");
console.log(testDate);
console.log(testDate.getDate());
console.log(testDate.getFullYear());
console.log(testDate.getMonth());

//Use set() method to update the date
testDate.setFullYear(1999);
testDate.setDate(01);
testDate.setMonth(2);

console.log(testDate);

//Current date
let currentTime = Date.now();
console.log(currentTime);

//Calculate any function or code exicute time
function test(){
    let step = 0;
    for(let a=0; a<10; a++){
        step++;
        console.log(`Your step count is ${step}`);
    };
};
let startTime = Date.now();
test();
let endTime = Date.now()

let exTime = endTime-startTime;
console.log(`Here your code exicution time is ${exTime} milisecound`);