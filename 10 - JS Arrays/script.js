//Create array with new Array method ------ not recomended
const car = new Array(`Lamburgini`, `Corola`,` BMW`);
console.log(car);

//Create array in modern way ---- recomanded
const friends = [`Ashik`, `Rony`, `Sagor`];
console.log(friends);

//get array data like string
console.log(car.toString());

//get array length
console.log(car.length);

//Array item access with index
console.log(car[1]);

//Array join method
console.log(car.join(' / '));

//Added item in last
car.push(`Noah`);
console.log(car);

//Added item in first
car.unshift(`Heice`);
console.log(car);

//Remove last item
car.pop()
console.log(car);

//Remove first item
car.shift()
console.log(car);

//Added item to specific place
car.splice(1,0, `X Corola`, `ProBox`);
console.log(car);

//Remove specific item
car.splice(2, 2);
console.log(car);

//Added mulktiple array in new array
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = [10, 11, 12, 13];
const final = a.concat(b, c);
console.log(final);

//Distructure nested array
const p = [
    [1, 2, 3, [10, 11, 12]],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(p.flat()); //flat method distructure only first step of arrays
