let displayValue = 0;
let display = document.querySelector(".display");
let firstNumber
let op
let secondNumber


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

function populateDisplay(num) { //nums need to be a string
    if (!num) {
        return
    } else if (displayValue == 0) {
        displayValue = num;
    } else {
    displayValue += num
    }
}

function chooseOperator(operator) {
    op = operator;
    firstNumber = Number(displayValue);
}

function pressEquals() {
    secondNumber = Number(displayValue);
    displayValue = String(operate(op, firstNumber, secondNumber))
}

//convert displayvalue to number when set to a,b
populateDisplay("7")
populateDisplay("6")
chooseOperator("+")

console.log(typeof op)

//put this inside functions and change innertext to hold display after choose operator and setting display value to ""
display.innerText = displayValue;

