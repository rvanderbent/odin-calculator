const display = document.querySelector("#display");
const plusOperator = "plus";
const minusOperator = "minus";
const multiplyOperator = "multiply";
const divideOperator = "divide";

function add(x, y){
    return x+y;
};

function substract(x, y){
    return x-y;
};

function divide(x,y){
   return (y === 0) ? "GTFO" : x/y;
};

function multiply(x,y){
    return x*y;
};


let value1 = 0;
let value2 = 0;
let displayStatus = 1;
let operator = ""


function addDigit(value){
    if(displayStatus === 1){
        value1 = value1*10 + value;
        display.textContent = value1;
    } 
    else if (displayStatus === 3){
        display.textContent = value;
        displayStatus = 1;
        value1 = value;
        value2 = 0;
    }
    else {
        value2 = value2*10 + value;
        display.textContent = value2;
    }
};


addDigit(0);

for(let i=0; i < 10; i++){
    let button = document.querySelector('#b'+i);
    button.addEventListener("click", () => {
        console.log(i);
        addDigit(i);
    })
};

function operate(){
    switch(operator){
        case plusOperator:
            value1 = add(value1, value2);
            value2 = 0;
            break;
        case minusOperator:
            value1 = substract(value1, value2);
            value2 = 0;
            break;
        case multiplyOperator:
            value1 = multiply(value1, value2);
            value2 = 0;
            break;
        case divideOperator:
            value1 = divide(value1, value2);
            value2 = 0;
            break;
    }
}

let isButton = document.querySelector('#is');
isButton.addEventListener("click", () => {
    displayStatus = 3;
    operate();
    display.textContent = value1;
});

let plusButton = document.querySelector('#' + plusOperator);
plusButton.addEventListener("click", () => {
    operator = plusOperator;
    displayStatus = 2;
});

let minusButton = document.querySelector('#' + minusOperator);
minusButton.addEventListener("click", () => {
    operator = minusOperator;
    displayStatus = 2;
});

let multiplyButton = document.querySelector('#' + multiplyOperator);
multiplyButton.addEventListener("click", () => {
    operator = multiplyOperator;
    displayStatus = 2;
});

let divideButton = document.querySelector('#' + divideOperator);
divideButton.addEventListener("click", () => {
    operator = divideOperator;
    displayStatus = 2;
});



