//Javascript oparators
let a = 10;
let b = 20;


//Arithmatic Oparator
let plus = a+b; //addition oparator
let minius = a-b; //substraction oparator
let multyply = a*b; //multiplication oparator
let divide = a/b; //divison oparator
let module = a%b; //modulas oparator
let incre = a++ //increment oparator
    incre = ++b //Pre - increment oprator
    incre = b++ //Post - increment oparator
let decre = a-- //Decrement oparator
    decre = --b //Post - decrement oparator
    decre = b-- //Post - decrement oparator

//Example of Modulas (Odd or Even number)
let num = 20;
if(num%2===0){
    console.log(`This is an odd number!`);
}else{
    console.log(`This is an even number!`);
}; 


//Comparison oparator (always remind "true" or "false")
console.log(a<b); //Greterthan
console.log(a>b); //Lessthan
console.log(a==b); //Checke value
console.log(a===b); //Check value with date type
console.log(a<=b); //Greatertehn or equal
console.log(a>=b); //Lessthan or equal
console.log(a!==b); //Not equal


//Logical oparator
let p = 10;
let q = 50;
let r = 30;
let s = 40;

//Logical and oparator
if((p<q) && (q>r)){
    console.log(`This is a logical and!`);
}
//Logical or oparator
else if((p<=r) || (r>s)){
    console.log(`This is a logical or!`);
}
//Logical not oparator
else {
    let lNot = !true;
    console.log(lNot);
};


//Assignment oparator
a = 40; //equal assignment
b = 60;
console.log(a+=b); //Plus equal assignment
console.log(a-=b); //Minius equal assignment  
console.log(a*=b); //Multiply equal assignment 
console.log(a/=b); //Division equal assignment
console.log(a%=b); //Modulas equal assignment


//Ternary oparator
let ter = a>b ? `True` : `False`; 
console.log(ter);
let k = a<b || b<p ? `True` : `False`;
console.log(k);


//TypeOf oparator
console.log(typeof a);