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

function pressNumber(num) { //nums need to be a string
    if (!num) {
        return
    } else if (displayValue == 0) {
        displayValue = num;
    } else {
    displayValue += num
    }
    display.innerText = displayValue;
}

function chooseOperator(operator) {
    op = operator;
    firstNumber = Number(displayValue);
    let tempDisplay = displayValue;
    display.innerText = tempDisplay;
    displayValue = "";
}

function pressEquals() {
    secondNumber = Number(displayValue);
    tempDisplay = String(operate(op, firstNumber, secondNumber))
    display.innerText = tempDisplay;
    displayValue = "";
}

//convert displayvalue to number when set to a,b
pressNumber("7")
pressNumber("6")
chooseOperator("+")

pressNumber("1")
pressEquals()

//put this inside functions and change innertext to hold display after choose operator and setting display value to ""


