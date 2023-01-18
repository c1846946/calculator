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

function pressNumber(evt) { //nums need to be a string
    num = evt.target.id;
    
    //if (equalDisplay) clear();
    displayValue += num
    display.innerText = displayValue;
    console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);
}

function chooseOperator(evt) {
    if (op == undefined) firstNumber = undefined;
    if (firstNumber && displayValue) {
        pressEquals();
    } else if (!firstNumber){
    firstNumber = Number(displayValue);
    
    let operatorDisplay = displayValue;
    display.innerText = operatorDisplay;
    displayValue = "";
    }
    op = evt.target.id;
    console.log(evt.target.id)
    console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);
}

function pressEquals() {
    //check for 0 denominator here
    if (!firstNumber || !displayValue) return;
    secondNumber = Number(displayValue);
    if ((op == "/") &&  (secondNumber == "0")) {
        clear();
        display.innerText = "DAFUQ!?";
    } else {
    equalDisplay = String(Math.round(operate(op, firstNumber, secondNumber) * 100)/100);
    display.innerText = equalDisplay;
    displayValue = "";
    op = undefined;
    //make secondNumber undefined here???
    firstNumber = Number(equalDisplay);
    console.table(this.className, ":\n","first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);
    }
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

//add listeners for all the buttons
document.querySelector(".clear-button").addEventListener("click", clear);
//add ids to all the number and operator buttons
document.getElementById("9").addEventListener("click", pressNumber);
document.getElementById("8").addEventListener("click", pressNumber);
document.getElementById("7").addEventListener("click", pressNumber);
document.getElementById("6").addEventListener("click", pressNumber);
document.getElementById("5").addEventListener("click", pressNumber);
document.getElementById("4").addEventListener("click", pressNumber);
document.getElementById("3").addEventListener("click", pressNumber);
document.getElementById("2").addEventListener("click", pressNumber);
document.getElementById("1").addEventListener("click", pressNumber);
document.getElementById("0").addEventListener("click", pressNumber);

document.getElementById("+").addEventListener("click", chooseOperator);
document.getElementById("-").addEventListener("click", chooseOperator);
document.getElementById("*").addEventListener("click", chooseOperator);
document.getElementById("/").addEventListener("click", chooseOperator);

document.querySelector(".equals-button").addEventListener("click", pressEquals);


// pressNumber("7")
// pressNumber("6")
// chooseOperator("+")

// pressNumber("1")
// pressEquals()
// pressNumber("6");
//clear()

//console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);


document.querySelector(".clear-button").addEventListener("click", clear);



