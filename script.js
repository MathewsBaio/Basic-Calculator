
let numberOne = "", numberTwo = "", operator;
let string = document.getElementById("num1");
let operatorString = document.getElementById("operator");
let equalsString = document.getElementById("equals");
const numericButtons = document.getElementsByClassName("numeric-button");
const limit = "000000000000000000000000";
let cont = 0;
let j = 4;
let indexString = 1;

NumericButtons()

function adjustString() {
    cont++
    if(cont == j){
        string.textContent = `${string.textContent.substring(0,indexString)}.${string.textContent.substring(indexString,string.textContent.length)}`;
        cont = j;
        j += 3;
        indexString += 4;   
    }
}

//Numeric Buttons


function NumericButtons() {
    for(let i = 0; i < numericButtons.length; i++) {
        numericButtons[i].addEventListener("click", event =>{
            if(string.textContent.length < limit.length){
                string.textContent += numericButtons[i].textContent;
                if (string.id == "num1") {
                    numberOne += string.textContent
                } else if(string.id == "num2") {
                    numberTwo += string.textContent
                }
                adjustString()
                additionButton() 
                subtractionButton()
                multiplicationButton()
                divisionButton()
                equalsButton()               
            }
            
        })
    }
}

function equalsButton() {
    let equalsB = document.getElementById("equals-button")
    parseFloat(numberOne);
    parseFloat(numberTwo);
    if(numberTwo > 0) {
        equalsB.addEventListener("click", event => {
            equalsString.textContent = `${operation(numberOne, numberTwo, operator)}`
            document.getElementById("num1").textContent = ""
            document.getElementById("num2").textContent = ""
            document.getElementById("operator").textContent = ""
        })
    }
}



//Operations Buttons

function additionButton() {
    if (string.textContent.length > 0) {
        let additionB = document.getElementById("addition-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "+";
            operator = "+"
            string = document.getElementById("num2");
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}

function subtractionButton() {
    if (string.textContent.length > 0) {
        let additionB = document.getElementById("subtraction-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "-";
            operator = "-"
            string = document.getElementById("num2");
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}

function multiplicationButton() {
    if (string.textContent.length > 0) {
        let additionB = document.getElementById("multiplication-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "x";
            operator = "x"
            string = document.getElementById("num2");
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}

function divisionButton() {
    if (string.textContent.length > 0) {
        let additionB = document.getElementById("division-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "÷";
            operator = "/"
            string = document.getElementById("num2");
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}


//operation

function operation(num1, num2, operator) {
    if(operator == "+") {
        addition(num1, num2);
    } else if(operator == "-") {
        subtraction(num1, num2);
    } else if(operator == "x") {
        multiplication(num1, num2);
    } else if(operator == "/") {
        division(num1, num2);
    }
}

//basic operations

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}







