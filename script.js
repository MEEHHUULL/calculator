const number = document.querySelectorAll(".number");
const op = document.querySelectorAll(".op");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");
const dividing = document.querySelector("#divide");
const multing = document.querySelector("#times");
const subbing = document.querySelector("#minus");
const adding = document.querySelector("#plus");

let a = display.value;
console.log(a);
let b = "" ; 
let operator = "";

function add(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,operator){
    if (operator == adding){
        return add(a,b);
    }
    else if (operator == subbing){
        return minus(a,b);
    }
    else if (operator == multing){
        return multiply(a,b);
    }
    else {
        return divide(a,b);
    }
}

// when op (+-x/) is clicked 
// the value of the display is stored in a
// the value of display is reset/cleared
// the op is stored in operator 


// when equals is clikced 
// the value of the display is stored in b
// the correct function is called
// value of display = function output 

clear.addEventListener("click", () => 
    display.value = ""
)

number.forEach(function(elem){
    elem.addEventListener("click" , () => 
    display.value += elem.value
)}
)


op.forEach(function(elem){
    elem.addEventListener("click", () => 
        display.value = "")
    elem.addEventListener("click" , () => 
        display.value = elem.value)
    elem.addEventListener("click" , () => 
        a = display.value)  
}
)
