

//⠀⠀⠀⠀⠀⠀⠀⠀⠀MADE BY RENATE⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣄⣀⠀⠀⠀⠀⣰⡿⠋⠁⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡿⢋⣤⣤⣤⣤⣈⠁⠀⠀⠀⠀⠀⠀⠛⠛⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⣡⣾⣿⣿⣿⣿⣿⣿⣷⣤⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣦⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣿⣿⣿⡇⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⢻⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠙⠀⢻⣿⣿⣿⣿⣿⣿⡿⢻⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⠛⠋⠴⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀

const OPERATOR_PLUS = "plus";
const OPERATOR_MINUS = "minus";
const OPERATOR_MULTIPLY = "multiply";
const OPERATOR_DIVIDE = "divide";

const display = document.querySelector("#display");
const negateButton = document.querySelector('#neg');
const clearButton = document.querySelector('#clear');
const divideButton = document.querySelector('#' + OPERATOR_DIVIDE);
const multiplyButton = document.querySelector('#' + OPERATOR_MULTIPLY);
const minusButton = document.querySelector('#' + OPERATOR_MINUS);
const plusButton = document.querySelector('#' + OPERATOR_PLUS);
const isButton = document.querySelector('#is');

const DISPLAY_VALUE_1 = 0;
const DISPLAY_VALUE_2 = 1;
const DISPLAY_RESULT = 2;


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
let displayStatus = DISPLAY_VALUE_1;
let operator = "";
let negStatus = false;


function addDigit(value){
    if(displayStatus === DISPLAY_VALUE_1){
        value1 < 0 ? (value1 = value1*10 - value) : (value1 = value1*10 + value);
        display.textContent = value1;
    } 
    else if (displayStatus === DISPLAY_RESULT){
        display.textContent = value;
        displayStatus = DISPLAY_VALUE_1;
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
        addDigit(i);
    })
};

function operate(){
    switch(operator){
        case OPERATOR_PLUS:
            value1 = add(value1, value2);
            value2 = 0;
            break;
        case OPERATOR_MINUS:
            value1 = substract(value1, value2);
            value2 = 0;
            break;
        case OPERATOR_MULTIPLY:
            value1 = multiply(value1, value2);
            value2 = 0;
            break;
        case OPERATOR_DIVIDE:
            value1 = divide(value1, value2);
            value2 = 0;
            break;
    }
}


isButton.addEventListener("click", () => {
    displayStatus = DISPLAY_RESULT;
    operate();
    display.textContent = value1;

});

plusButton.addEventListener("click", () => {
    operator = OPERATOR_PLUS;
    displayStatus = DISPLAY_VALUE_2;
});

minusButton.addEventListener("click", () => {
    operator = OPERATOR_MINUS;
    displayStatus = DISPLAY_VALUE_2;
});

multiplyButton.addEventListener("click", () => {
    operator = OPERATOR_MULTIPLY;
    displayStatus = DISPLAY_VALUE_2;
});

divideButton.addEventListener("click", () => {
    operator = OPERATOR_DIVIDE;
    displayStatus = DISPLAY_VALUE_2;
});

clearButton.addEventListener("click", () => {
    display.textContent = 0;
    value1 = 0;
    value2 = 0;
    displayStatus = DISPLAY_VALUE_1;
});

negateButton.addEventListener("click", () => {
    if (displayStatus === DISPLAY_VALUE_1 || displayStatus === DISPLAY_RESULT){
        value1 = -value1;
        display.textContent = value1;
    }
    else if (displayStatus === DISPLAY_VALUE_2){
        value2 = -value2;
        display.textContent = value2;
    }
})
