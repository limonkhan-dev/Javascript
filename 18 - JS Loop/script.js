//For loop
//Use for loop when it's array
let car = [`BMW`, `Audi`, `Lamburgini`];

car.push(`Noah`);
car.push(`Hiece`)

console.log(car);

for(let i=0; i<car.length; i++){
    console.log(car[i]);
}

//For In loop
//Use for in loop when it's object
let person = {
    firstName: `Limon`,
    lastName: `Khan`,
    age: 30,
    region: `Bangladesh`
}
console.log(person);
for(let i in person){
    let capLatter = i.charAt(0).toUpperCase()+i.slice(1)
    console.log(capLatter + `: ` + person[i]);
}

//Foreach loop
//Can be use foreach when it is array
car.forEach(function(i){
    console.log(i);
})

//Example 2:
let friends = [`Rony`, `Ashik`, `Shohag`, `Shakil`];
friends.forEach(function(a){
    console.log(a);
})