/*
* String to object
* charAt() method (search string word with index position)
* indexOf () method (Search string word index with word)
* toUpperCase() method 
* toLowerCase() method
* slice() method
* substring() method
* trim() method
* replace() method
* split() method (convert string to array)
*/

//Convert the string to object
let fName = `Limon`;
console.log(typeof fName);
fName = new String(fName); //use new String() method
console.log(typeof fName);

let a = new String(`Hellow World`);
console.log(a);

//charAt() method (search string word index position)
console.log(fName.charAt(3));

//indexOf () method (Search string word index with word)
console.log(fName.indexOf(`m`));

//toUppercase() method
console.log(fName.toUpperCase());

//toLowerCase() method
console.log(fName.toLowerCase());

//slice() method
let text = "I love Bangladesh"
console.log(text.slice(3));
console.log(text.slice(4, 2));
console.log(text.substring(5, 2));
console.log(text.slice(-6));

//trim() method
let fullName = "    Limon      "
console.log(fullName.trimStart()); //Remove blank space from start
console.log(fullName.trimEnd()); //Remove blank space from end
console.log(fullName.trim()); //Remove all blank space

//replace() method
let url = `www.limon.com/blog%20post`;
console.log(url.replace(`%20`, `-`)); //first quote is terget and second quote is value

//split() method (convert string to array)
let message = `Hello there. I hope your are doing well`
console.log(message.split(` `));
