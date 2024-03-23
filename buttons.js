let string = document.getElementById("num1");
const numericButtons = document.getElementsByClassName("numeric-button");
const limit = "000000000000000000000000";
let cont = 0;
let j = 4;
let indexString = 1;



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


function addNumericButton() {
    for(let i = 0; i < numericButtons.length; i++) {
        numericButtons[i].addEventListener("click", event =>{
            if(string.textContent.length < limit.length){
                string.textContent += numericButtons[i].textContent;
                adjustString()
            }
            
        })
    }
}

addNumericButton()

//Operations Buttons







