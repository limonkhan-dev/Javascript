//Variables
let photos = [
    `./images/img-1.webp`,
    `./images/img-2.webp`,
    `./images/img-3.webp`,
    `./images/img-4.webp`
]
let count = 0;
let img = document.querySelector(`img`);

//Add events
document.querySelector('div #btn-pre').addEventListener("click", pre);
document.querySelector('div #btn-next').addEventListener('click',next);

//Previous function
function pre(){  
    count--;
    if(count < 0){
        count = photos.length-1;
    }
    img.src = photos[count];
  console.log("This is pre func");
}

//Netx function
function next(){
    count++;
    if(count > photos.length-1){
        count = 0;
    }
    img.src = photos[count];
}