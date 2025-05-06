//equal assign operator = null 
//operator switch between number1 and number2

let operators = document.querySelectorAll(".operator");
let operator = null;
for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener("click", function () {
        operator = operators[i].innerHTML;
        document.querySelector("#operator").textContent = operator;
        operators[i].classList.add("button-clicked");

        setTimeout(function () {
            operators[i].classList.remove("button-clicked");
        }, 100);
    });
}

let numbers= document.querySelectorAll(".number");
let number1;
let number2;
let rasult;
if(operator == null) {
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (e) {
        if(operator == null) {
        if(number1 == null) {
            number1 = e.target.innerHTML;
        }else{
        number1 += e.target.innerHTML;
        }
        document.querySelector("#result").textContent = number1;
        console.log("number1 = "+number1);
    }else{
        if(number2 == null) {
            number2 = e.target.innerHTML;
        }else{
        number2 += e.target.innerHTML;
        }
        document.querySelector("#result").textContent = number2;
        console.log("number2 = "+number2);
    }
    numbers[i].classList.add("button-clicked");
    setTimeout(function () {
        numbers[i].classList.remove("button-clicked");
    }, 100);
    });
}
}

equal = document.querySelector(".equal");
equal.addEventListener("click", function () {
    number1 = (number1 == null) ? 0 : number1;
    switch (operator) {
        case "+":
            rasult= parseInt(number1) + parseInt(number2);
            break;
        case "-":
            rasult = parseInt(number1) - parseInt(number2);
            break;
        case "*":
            rasult = parseInt(number1) * parseInt(number2);
            break;
        case "/":
            rasult = parseInt(number1) / parseInt(number2);
            break;
    }
    number1 = rasult;
    number2 = null;
    operator = null;
    document.querySelector("#result").textContent = rasult;
    document.querySelector("#operator").textContent = operator;
});

clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    number1 = null;
    number2 = null;
    operator = null;
    document.querySelector("#result").textContent = 0;
    document.querySelector("#operator").textContent = operator;

    numbers[i].classList.add("button-clicked");
    setTimeout(function () {
        numbers[i].classList.remove("button-clicked");
    }, 100);
});