function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

const operators = {
    '+': (a, b) => add(a, b),
    '-': (a, b) => substract(a, b),
    '*': (a, b) => multiply(a, b),
    '/': (a, b) => divide(a, b)
};


function operate(operator, a, b){
    if(operator in operators){
        const operatorFunc = operators[operator];
        const result = operatorFunc(a, b);
        return result;
    }
    console.log('Invalid operation');
}