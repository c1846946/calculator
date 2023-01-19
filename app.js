let display = document.querySelector(".display");
let inputValue = "";
let first
let op
let second



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

function pressDigit(evt) { //nums need to be a string
    if (evt.target.id) num = evt.target.id;
    if (evt.key) num = evt.key;
    if (num == "." && inputValue.includes(".")) return;
    if (num == "b" || num == "Backspace") {
        inputValue = inputValue.substring(0, inputValue.length - 1);
    } else {
    inputValue += num;
    };
    console.log(typeof inputValue)
    
    display.innerText = inputValue;
    console.log("first " + first ,"\nsecond " + second ,"\nop " + op, "\ninputValue " , inputValue);
}

function pressOp(evt) {
    if (!first || first && !op && inputValue) first = Number(inputValue);
    if (first && op && inputValue) {
        second = Number(inputValue);
        inputValue = "";
        if (performCalc() == "infinite") {
            clear();
            display.innerText = "DAFUQ?!";
            return
        } else{
            //set first to result of calc and clear op and second
            first = performCalc();
            op = undefined;
            second = undefined;
            //display first
            display.innerText = String(first);
        };
        
        
    }
    
    //set op
    if (evt.target.id) op = evt.target.id;
    if (evt.key) op = evt.key;
    inputValue = ""
    
    
    console.log("first " + first ,"\nsecond " + second ,"\nop " + op, "\ninputValue " , inputValue);
}

function performCalc() {
    if ((op == "/") &&  (second == "0")) {
        return "infinite";
    } else {
    return Math.round(operate(op, first, second) * 100)/100;
    }
}

function pressEquals() {
    if (!first) return;
    if (first && !op || first && op && !inputValue) {
         op = undefined;
    
         return;
     }
    second = Number(inputValue);
    inputValue = "";
    if (performCalc() == "infinite") {
        clear();
        display.innerText = "DAFUQ?!"
    } else{
        first = performCalc();
        display.innerText = String(first);
        
        second = undefined;
        op = undefined;
    }
    
    console.log("first " + first ,"\nsecond " + second ,"\nop " + op, "\ninputValue " , inputValue);
    
}

function clear() {
    first = undefined;
    op = undefined;
    second = undefined;
    inputValue = "";
    display.innerText = "";
    
    
    console.log("first " + first ,"\nsecond " + second ,"\nop " + op, "\ninputValue " , inputValue);
}

//add listeners for all the buttons
document.querySelector(".clear-button").addEventListener("click", clear);
//add ids to all the number and operator buttons
document.getElementById("9").addEventListener("click", pressDigit);
document.getElementById("8").addEventListener("click", pressDigit);
document.getElementById("7").addEventListener("click", pressDigit);
document.getElementById("6").addEventListener("click", pressDigit);
document.getElementById("5").addEventListener("click", pressDigit);
document.getElementById("4").addEventListener("click", pressDigit);
document.getElementById("3").addEventListener("click", pressDigit);
document.getElementById("2").addEventListener("click", pressDigit);
document.getElementById("1").addEventListener("click", pressDigit);
document.getElementById("0").addEventListener("click", pressDigit);
document.getElementById(".").addEventListener("click", pressDigit);
document.getElementById("b").addEventListener("click", pressDigit);

document.getElementById("+").addEventListener("click", pressOp);
document.getElementById("-").addEventListener("click", pressOp);
document.getElementById("*").addEventListener("click", pressOp);
document.getElementById("/").addEventListener("click", pressOp);

document.querySelector(".equals-button").addEventListener("click", pressEquals);
//prevent "Enter" key from selecting whatever is highlighted on the screen
window.addEventListener('keydown',function(event){
    if(event.key == "Enter") {
        event.preventDefault();
        return false;
      }
  });
document.addEventListener('keyup', filterUnusedKeys);
//keyboard support
function filterUnusedKeys(evt) {
    evt.preventDefault();
    console.log(evt.key)
    if(evt.key == "1" || evt.key == "2" || evt.key == "3" || evt.key == "4" || evt.key == "5" || evt.key == "6" || evt.key == "7" || evt.key == "8" || evt.key == "9" || evt.key == "0"  || evt.key == "." || evt.key == "b" || evt.key == "Backspace") pressDigit(evt);

    if(evt.key == "/" || evt.key == "*" || evt.key == "-" || evt.key == "+") pressOp(evt);
    
    if (evt.key == "Enter") {
        
        pressEquals();
    }
    if (evt.key == "c") clear();
    
    
    
    
}


//console.log("first " + firstNumber ,"\nsecond " + secondNumber ,"\nop " + op, "\ndisplay " + displayValue, "\noperatorDisplay " + operatorDisplay, "\nequalDisplay " + equalDisplay);


document.querySelector(".clear-button").addEventListener("click", clear);



