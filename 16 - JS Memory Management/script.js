//Js engin store data in 2 way
/*
* Call Stack
** Store all primitive date type (string, number, boolen, null, undefined etc)
** Store new data by coping

* Heap
** Store all non primitive date type (object, array etc)
** Store new date by reference
*/

//Example of call stack
let fristName = `Limon`;
let lastName = fristName;
lastName = `Rony`;

// Data store in call stack
console.log(fristName);
console.log(lastName);

//Example of heap
let details = {
    fName: `Limon`,
    age: 30
}
let person = details;
person.fName = `Rony`;

//Data store in heap
console.log(details);
console.log(person);
