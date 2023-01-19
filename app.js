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
    if(evt.target.id) num = evt.target.id;
    if (evt.key) num = evt.key;
    if (num == "." && displayValue.includes(".")) return;
    if (num == "b" || num == "Backspace") {
        displayValue = displayValue.substring(0, displayValue.length - 1);
    } else if(displayValue == "0")  {
        displayValue = num;
    }else {
    displayValue += num;
    };
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
    if (evt.target.id) op = evt.target.id;
    if (evt.key) op = evt.key;
    console.log(evt.target.id)
    console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);
}

function pressEquals() {
    //check for 0 denominator here
    console.log("started\nfirstNumber:", firstNumber, "\ndisplayValue:", displayValue)
    //if (!firstNumber || !displayValue) return;
    secondNumber = Number(displayValue);
    console.log("continued")
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
    
    console.table(":\n","first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);
    }
}

function clear() {
    firstNumber = undefined;
    op = undefined;
    secondNumber = undefined;
    displayValue = "0";
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
document.getElementById(".").addEventListener("click", pressNumber);
document.getElementById("b").addEventListener("click", pressNumber);

document.getElementById("+").addEventListener("click", chooseOperator);
document.getElementById("-").addEventListener("click", chooseOperator);
document.getElementById("*").addEventListener("click", chooseOperator);
document.getElementById("/").addEventListener("click", chooseOperator);

document.querySelector(".equals-button").addEventListener("click", pressEquals);

document.addEventListener('keyup', filterUnusedKeys);

function filterUnusedKeys(evt) {
    console.log(evt.key)
    if(evt.key == "1" || evt.key == "2" || evt.key == "3" || evt.key == "4" || evt.key == "5" || evt.key == "6" || evt.key == "7" || evt.key == "8" || evt.key == "9" || evt.key == "0"  || evt.key == "." || evt.key == "b" || evt.key == "Backspace") pressNumber(evt);

    if(evt.key == "/" || evt.key == "*" || evt.key == "-" || evt.key == "+") chooseOperator(evt);
    
    if (evt.key == "Enter") pressEquals();

    if (evt.key == "c") clear();
    
    
    
    
}


//console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);


document.querySelector(".clear-button").addEventListener("click", clear);



