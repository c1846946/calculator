let displayValue = "";
let display = document.querySelector(".display");
let firstNumber
let op
let secondNumber
let operatorDisplay
let equalDisplay


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return "ERROR";
    }
}

function pressNumber(num) { //nums need to be a string
    if (equalDisplay) clear();
    displayValue += num
    display.innerText = displayValue;
}

function chooseOperator(operator) {
    op = operator;
    firstNumber = Number(displayValue);
    let operatorDisplay = displayValue;
    display.innerText = operatorDisplay;
    displayValue = "";
}

function pressEquals() {
    secondNumber = Number(displayValue);
    equalDisplay = String(operate(op, firstNumber, secondNumber))
    display.innerText = equalDisplay;
    displayValue = "";
}

function clear() {
    firstNumber = undefined;
    op = undefined;
    secondNumber = undefined;
    displayValue = "";
    equalDisplay = undefined;
    operatorDisplay = undefined;
    display.innerText = displayValue
}


pressNumber("7")
pressNumber("6")
chooseOperator("+")

pressNumber("1")
pressEquals()
pressNumber("6")
clear()

console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay)





