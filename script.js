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

let firstNum = null;
let operation = null;
let secondNum = null;
let display = document.querySelector('#btnsContainer .display');

function addListenersToNums(){
    const numBtns = document.querySelectorAll('#btnsContainer .numberBtn');
    
    numBtns.forEach(numBtn => {
        numBtn.addEventListener('click', () => {
            display.textContent = numBtn.textContent;

            if(firstNum === null){
                firstNum = parseInt(numBtn.textContent);
                console.log(firstNum);
            }else if(secondNum === null){
                secondNum = parseInt(numBtn.textContent);
                console.log(secondNum);
            }
        });
    });
}

function addListenerToEquals(){
    const equalBtn = document.querySelector('#btnsContainer .equalsBtn');

    equalBtn.addEventListener('click', () => {
        if(firstNum != null && secondNum != null && operation != null){
            let result = operate(operation, firstNum, secondNum);
            console.log(result);
            display.textContent = result;
            firstNum = null;
            operation = null;
            secondNum = null;
        }
    });
}

function addListenersToOper(){
    const operBtns = document.querySelectorAll('#btnsContainer .operationBtn');

    operBtns.forEach(operBtn => {
        operBtn.addEventListener('click', () => {
            if(operation === null){
                operation = operBtn.textContent;
                console.log(operation);
            }
        });
    });
}

addListenersToNums();
addListenersToOper();
addListenerToEquals();