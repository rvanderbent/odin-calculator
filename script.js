

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
const decimalButton = document.querySelector('#decimal');

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

function removeLeadingZeros(value){
    if (value === "0" || value === "00"){
        return "0";
    }
    else {
        return value.replace(/^0+/, '');
    };
}


let value1 = 0;
let value2 = 0;
let displayValue1 = "0";
let displayValue2 = "0";
let decPosition = 10;
let inputDecimal = false;
let displayStatus = DISPLAY_VALUE_1;
let operator = "";


function addDigit(value){
    if(displayStatus === DISPLAY_VALUE_1){
        value1 < 0 ? (value1 = value1*10 - value) : (value1 = value1*10 + value);
        displayValue1 = removeLeadingZeros(displayValue1 + String(value));
        display.textContent = displayValue1;
        printStatus();
    } 
    else if (displayStatus === DISPLAY_RESULT){
        displayValue1 = String(value);
        display.textContent = displayValue1;
        displayStatus = DISPLAY_VALUE_1;
        value1 = value;
        value2 = 0;
        printStatus();
    }
    else {
        value2 = value2*10 + value;
        displayValue2 = removeLeadingZeros(displayValue2 + String(value));
        display.textContent = displayValue2;
        printStatus();
    }
};

function addDecimal(value){
    if(displayStatus === DISPLAY_VALUE_1){
        value1 < 0 ? (value1 = value1 - value/decPosition) : (value1 = value1 + value/decPosition);
        decPosition = decPosition*10;
        displayValue1 = removeLeadingZeros(displayValue1 + String(value));
        display.textContent = displayValue1;
        printStatus();
    } 
    else if (displayStatus === DISPLAY_RESULT){
        displayValue1 = String(value);
        display.textContent = displayValue1;
        displayStatus = DISPLAY_VALUE_1;
        value1 = value;
        value2 = 0;
        inputDecimal = false;
        decPosition = 10;
        printStatus();
    }
    else {
        value2 < 0 ? (value2 = value2 - value/decPosition) : (value2 = value2 + value/decPosition);
        decPosition = decPosition*10;
        displayValue2 = removeLeadingZeros(displayValue2 + String(value));
        display.textContent = displayValue2;
        printStatus();
    }
}
function setStringValues(value1, value2){
    displayValue1 = String(value1);
    displayValue2 = String(value2);
}

function operate(){
    switch(operator){
        case OPERATOR_PLUS:
            value1 = add(value1, value2);
            break;
        case OPERATOR_MINUS:
            value1 = substract(value1, value2);
            break;
        case OPERATOR_MULTIPLY:
            value1 = multiply(value1, value2);
            break;
        case OPERATOR_DIVIDE:
            value1 = divide(value1, value2);
            break;
    }
    value2 = 0;
    setStringValues(value1, value2)
}

function printStatus(){
    console.log("Value1: " + value1);
    console.log("Value2: " + value2);
    console.log("Display value1: " + displayValue1);
    console.log("Display value2: " + displayValue2);
    console.log("Display status: " + displayStatus);
    console.log("Input decimal: " + inputDecimal);
    console.log("Operator: " + operator);
    console.log("--------------------------");
}

isButton.addEventListener("click", () => {
    displayStatus = DISPLAY_RESULT;
    operate();
    display.textContent = displayValue1;

});

plusButton.addEventListener("click", () => {
    operator = OPERATOR_PLUS;
    inputDecimal = false;
    decPosition = 10;
    displayStatus = DISPLAY_VALUE_2;
});

minusButton.addEventListener("click", () => {
    operator = OPERATOR_MINUS;
    inputDecimal = false;
    decPosition = 10;
    displayStatus = DISPLAY_VALUE_2;
});

multiplyButton.addEventListener("click", () => {
    operator = OPERATOR_MULTIPLY;
    inputDecimal = false;
    decPosition = 10;
    displayStatus = DISPLAY_VALUE_2;
});

divideButton.addEventListener("click", () => {
    operator = OPERATOR_DIVIDE;
    inputDecimal = false;
    decPosition = 10;
    displayStatus = DISPLAY_VALUE_2;
});

clearButton.addEventListener("click", () => {
    displayValue1 = "0";
    displayValue2 = "0";
    value1 = 0;
    value2 = 0;
    display.textContent = displayValue1;
    inputDecimal = false;
    decPosition = 10;
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
});

decimalButton.addEventListener("click", () =>{
    if (!inputDecimal){
        if (displayStatus === DISPLAY_VALUE_1){
            displayValue1 = displayValue1 + ".";
            display.textContent = displayValue1;
        }
        else if (displayStatus === DISPLAY_VALUE_2){
            displayValue2 = displayValue2 + ".";
            display.textContent = displayValue2;
        }
        else if (displayStatus === DISPLAY_RESULT){
            return;
        }
        inputDecimal = true;
    }
    else return;

});


for(let i=0; i < 10; i++){
    let button = document.querySelector('#b'+i);
    button.addEventListener("click", () => {
        inputDecimal === false ? addDigit(i) : addDecimal(i);
    })
};


addDigit(0);