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

function operate(operator, x, y){
    if (operator === "+"){
        add(x,y);
    }
    else if (operator === "-"){
        substract(x,y);
    }
    else if (operator === ":"){
        divide(x,y);
    }
    else if (operator === "*"){
        multiply(x,y);
    }
};

