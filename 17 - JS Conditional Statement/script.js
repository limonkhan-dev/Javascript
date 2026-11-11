//If, else condiotion
let age = 19;
let message;
if(age>18){
    message = `You are ready to learn driving`;
}
else if(age==18){
    message = `Wait a little more time`;
}
else{
    message = `You are not ready for learn driving`;
}
console.log(message);

//Switch condition
let result = 102;
let grade;
switch(true){
    case (result<33) : 
        grade = `Fail`;
        break;
    case (result>33) && (result<60) :
        grade = `Pass`;
        break;
    case (result<60) && (result<80) :
        grade = `Pass with Second Class`;
        break;
    case (result>80) && (result<100) :
        grade = `Pass with Frist Class`;
        break;
    default :
        grade = `Enter valid marks`
}
console.log(grade);