function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return ":(";
    }
    return a / b;

}

const operators = {
    '+': (a, b) => add(a, b),
    '-': (a, b) => substract(a, b),
    '*': (a, b) => multiply(a, b),
    '/': (a, b) => divide(a, b)
};


function operate(operator, a, b) {
    if (operator in operators) {
        const operatorFunc = operators[operator];
        const result = operatorFunc(a, b);
        return result;
    }
    console.log('Invalid operation');
}

//Since I'm having the first and second nums be strings
//so its possible to input multiple digit numbers, they
//need to be empty strings otherwise the variables would be 
//something like null2. 
let firstNum = '';
let operation = null;
let secondNum = '';
let result = null;
let operationPressed = false;
let display = document.querySelector('#btnsContainer .display');

const operBtns = document.querySelectorAll('#btnsContainer .operationBtn');
const equalBtn = document.querySelector('#btnsContainer .equalsBtn');
const numBtns = document.querySelectorAll('#btnsContainer .numberBtn');
const clearBtn = document.querySelector('#btnsContainer .clearBtn');

clearBtn.addEventListener('click', () => clear());

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => changeNum(numBtn));
});

operBtns.forEach(operBtn => {
    operBtn.addEventListener('click', () => changeOper(operBtn));
});

equalBtn.addEventListener('click', () => performCalculation());

function changeNum(numBtn) {
    //Is a string but will be converted when the equals 
    //button is pressed. This is done because the input
    //before would only take single digit numbers.
    display.textContent += numBtn.textContent;

    if (!operationPressed) {
        firstNum += numBtn.textContent;
    }
    //The operation being pressed means the user is now
    //entering the second number.
    else if (operationPressed) {
        secondNum += numBtn.textContent;
    }
}

function performCalculation() {
    //Only do the calculation if the variables are not empty.
    if (firstNum != '' && secondNum != '' && operation != null && result === null) {
        result = operate(operation, parseInt(firstNum), parseInt(secondNum));
    } else {
        result = operate(operation, result, parseInt(secondNum));
    }

    display.textContent = result;

    //Reset variables
    firstNum = '';
    operation = null;
    secondNum = '';
    operationPressed = false
}

function changeOper(operBtn) {
    if (operation === null) {
        display.textContent = operBtn.textContent;
        operation = operBtn.textContent;
        operationPressed = true;
    }
}

function clear() {
    display.textContent = '0';
    firstNum = '';
    operation = null;
    secondNum = '';
    operationPressed = false
    result = null;
}