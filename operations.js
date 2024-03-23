let numberOne, numberTwo, operator;


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