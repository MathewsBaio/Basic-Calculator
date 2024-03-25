
let numberOne = "", numberTwo = "", operator;
let stringOne = document.getElementById("num1");
let stringTwo = document.getElementById("num2");
let operatorString = document.getElementById("operator");
let equalsString = document.getElementById("equals");
const numericButtons = document.getElementsByClassName("numeric-button");
const equalsB = document.getElementById("equals-button")
const limit = "0000000000000000000000";
let cont = 0;
let j = 4;
let indexString = 1;
let controlOperator = false;
let controlEquals = false;

NumericButtons()
equalsButton()
acButton()
function adjustString() {
    cont++
    if(cont == j){
        string.textContent = `${string.textContent.substring(0,indexString)}.${string.textContent.substring(indexString,string.textContent.length)}`;
        cont = j;
        j += 3;
        indexString += 4;   
    }
}

function stringInput(string, i, number) {
    string.textContent += numericButtons[i].textContent;
    number += numericButtons[i].textContent;
    parseFloat(number);
}

function recreatDisplay(string1, string2, operator) {
    string1.textContent = "";
    string2.textContent = "";
    operator.textContent = "";
    controlOperator = false;
}

//Numeric Buttons


function NumericButtons() {
    
    for(let i = 0; i < numericButtons.length; i++) {

        numericButtons[i].addEventListener("click", event =>{

            if(controlEquals){
                equalsString.textContent = "";
                controlEquals = false;
            }
            
            if (!controlOperator && stringOne.textContent.length < limit.length) {
                stringInput(stringOne, i, numberOne);
            } else if(controlOperator && stringTwo.textContent.length < limit.length){
                stringInput(stringTwo, i, numberTwo);
            }
            additionButton();
            subtractionButton();
            multiplicationButton();
            divisionButton();
            
            

        })

    }
}

function equalsButton() {

    equalsB.addEventListener("click", event => {
        //window.alert("test")
        equalsString.textContent = operation(stringOne, stringTwo, operator);
        recreatDisplay(stringOne, stringTwo, operatorString)
        controlEquals = true;
    })
    
}



//Operations Buttons

function additionButton() {
    if (stringOne.textContent.length > 0) {
        let additionB = document.getElementById("addition-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "+";
            operator = "+";
            controlOperator = true;
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}

function subtractionButton() {
    if (stringOne.textContent.length > 0) {
        let additionB = document.getElementById("subtraction-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "-";
            operator = "-";
            controlOperator = true;
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}

function multiplicationButton() {
    if (stringOne.textContent.length > 0) {
        let additionB = document.getElementById("multiplication-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "x";
            operator = "x";
            controlOperator = true;
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}

function divisionButton() {
    if (stringOne.textContent.length > 0) {
        let additionB = document.getElementById("division-button");

        additionB.addEventListener("click", event =>{
            operatorString.textContent = "÷";
            operator = "/";
            controlOperator = true;
            cont = 0;
            j = 4;
            indexString = 1;
        })
    }
}


//operation

function operation(string1, string2, operator) {
    if(operator == "+") {
        return `${Number(stringOne.textContent) + Number(stringTwo.textContent)}`
    } else if(operator == "-") {
        return `${Number(stringOne.textContent) - Number(stringTwo.textContent)}`
    } else if(operator == "x") {
        return `${Number(stringOne.textContent) * Number(stringTwo.textContent)}`
    } else if(operator == "/") {
        return `${Number(stringOne.textContent) / Number(stringTwo.textContent)}`
    }
}


//special buttons

function acButton() {
    let acB = document.getElementById("ac-button")

    acB.addEventListener("click", event =>{
        recreatDisplay(stringOne, stringTwo, operatorString)
        equalsString.innerText = ""
    })
}

function deleteButton() {
    let delB = document.getElementById("del-button")

    delB.addEventListener("click", event => {
        if(!controlOperator) {
            while (i < stringOne.innerText.length) {
                
            }
        }
        
    })
}







