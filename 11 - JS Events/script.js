/*
* Click event
* Dobuld click evenet
* Hover event
* Hover out event
* Keypress event
* Keyup event
* Window resied event
* Window scrolling event
*/

let text = document.querySelector("#text");
let btn = document.querySelector("#subsBtn");

// Click event
// btn.addEventListener(`click`, function(){
//     text.innerHTML = 'Subscribed successfull'
// });

//Double click event
btn.addEventListener(`dblclick`, function(){
    text.innerHTML = `Successfully Unsubscribed`
})
