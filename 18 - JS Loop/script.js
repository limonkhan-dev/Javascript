//For loop
//Use for loop when it is an array
let car = [`Audi`, `Lamburgini`, `Ferrei`];
car.push(`Corolla`);
// console.log(car);
for(let i=0; i<car.length; i++){
    console.log(car[i]);
}

//For in loop
//Use for in loop when it is an object
const details = {
    fName : `Limon`,
    lName : `Khan`,
    age : 30,
    nationality : `Bangladeshi`
}
// console.log(details[`fName`]);
for(let i in details){
    let capLatter = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(capLatter + `: ` +details[i]);
}

//Foreach loop
//Use foreach loop when it is an array
let friends = [`Rony`, `Akash`, `Shohag`];
friends.forEach(function(element){
    console.log(element);
})

//Example 2
car.forEach(function(element){
    console.log(element);
})

//For of loop
//Use for of loop when it is an array
let skill = [`Javascript`, `PHP`, `Laravel`];
for(let i of skill){
    console.log(i);
}

//While loop
//Different type loop
let age = 25;
while(age < 31){
    console.log(`Pass`);
    age++;
}