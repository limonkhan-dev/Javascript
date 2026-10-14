//Javascript data type

//String date type
//String can pass with "" / '' 
//If need a '' print than can pass "I'm Limon" / 'I\'m Limon'
console.log("Using double quotation");
console.log('Using signle quotation');
console.log('Using \'Backslash\'');
console.log(`Using backtick`);
//Variable can pass inside backtick
let fName = "Limon";
FName = `Rony`;
let message = `I'm MD ${FName}`;
console.log(typeof FName);


//Number date type
let age = 30;
console.log(typeof age);


//Big int data type
//use for handel 16 digit big number
//Big int can not oparate with normal number
let bigNum = 9999999999999999;
console.log(bigNum); //Here the result will show diference
//Use .....n / Big() for 16 digit number
let bigNum1 = 999999999999999999n;//Use n safix for bigint
console.log(bigNum1);
let bigNum2 = BigInt("9999999999999999999");//Use BigInt() for spacial senario
console.log(bigNum2);
console.log(typeof(bigNum2));


//Boolean data type
let isMoved = true;
let isComming = false;
console.log(typeof isMoved);


//Undefind date type
//Initially no value, but can be assigned
let undefind;
console.log(typeof(undefind));


//Null date type
//Intentionally value 0 and always be 0
let box = null;
console.log(typeof(box));


//Array data type
//Can be stored any type of data inside array also can be pass variables
let test = "Test Car";
let car = ["Axio", "Corola", "Heice", 30, true, null, undefind, test];
console.log(car);
console.log(typeof(car));//Array is also a object


//Object data type
//Can be store any type of date like variables, function etc
let details = {
    fullName: "Limon",
    age: 28,
    hasJob: true,
    car: test,
    test: function testF(a,b){
        return a+b;
    },
    testSub: function testM(a,b){
        return a-b;
    }
}
console.log(details);
console.log(typeof(details));

let testNum = details.testSub(3,5);
console.log(testNum);

