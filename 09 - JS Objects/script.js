//Litarel object

//Create a symbol
let newSymb = Symbol(`married`);

//Create a object
const details = {
    userName: `Limon`, //string data type
    age: 30, //number data type
    hasJob: true, //boolean data type
    friends: [`Rony`, `Ashik`, `Mehedi`], //array
    "friends details": {
        fName: "Rony",
        age: 30
    },
    "cash status": undefined, //undefiend data type
    badHavit: null, //null data type
    [newSymb]: `married`, //symbol data type

    //Added function as key
    message: function(){
        return `Hello ${this.userName}. You've entered your age is ${this.age}`
    }
};

console.log(details);
console.log(details.userName); //Dot notation
console.log(details[`age`]); //Bracket notation
console.log(details[`friends`][1]); //access to array in object
console.log(details[`friends details`].fName); //access to nested object
console.log(details[`friends details`][`age`]);
console.log(details[newSymb]); //Access to a symbol
//update any existing key value
details.age = 28;
console.log(details.age);
console.log(details.message());

//Search any key from object
//Use hasOwnProperty method
console.log(details.hasOwnProperty(`age`));
console.log(details.hasOwnProperty(`roll`));

//Create array from object keys & values
let detailsKeysArray = Object.keys(details); //object keys
let detailsValuesArray = Object.values(details); //object values
console.log(detailsKeysArray);
console.log(detailsValuesArray);

//Freez existing object
Object.freeze(details)

//Combine multiple object to one object
const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
const obj2 = {
    p: 1,
    q: 2,
    r: 3
}
const obj3 = {
    x: 1,
    y: 2,
    z:3
}
// by method
const objFinal = Object.assign({}, obj1, obj2, obj3);
console.log(objFinal); //memory efficient 

// by modern way
const objFinal1 = {...obj1, ...obj2, ...obj3};
console.log(objFinal1);



//Constractor object