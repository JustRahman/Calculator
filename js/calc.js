var result = document.getElementById('result');
var number1 = null;
var number2 = null;
var operation = null;
result.textContent = 0;
//functia
function number(n) { 
    if (number1 == null && number2 == null && operation == null) {
        result.textContent = n;
        number1 = parseFloat(result.textContent);

    } else if (number1 != null && number2 == null && operation == null) {
        result.textContent += n;
        number1 = parseFloat(result.textContent);

    } else if (number1 != null && number2 == null && operation != null) {
        result.textContent = n;
        number2 = parseFloat(result.textContent);

    } else if (number1 != null && number2 != null && operation != null) {
        result.textContent += n;
        number2 = parseFloat(result.textContent);

    }

    console.log(number1, number2, operation);
}

function operator(o) {
    if (number1 == null && operation == null) {
        number1 = 0;
        operation = o;

    } else if (number1 != null & operation == null) {
        operation = o;
        

    } else if (number1 != null & operation == '*') {
        number1 *= number2;

    } else if (number1 != null & operation == '/') {
        number1 /= number2;

    } else if (number1 != null & operation == '+') {
        number1 += number2;

    } else if (number1 != null & operation == '-') {
        number1 -= number2;

    }
    number2 = null;
    operation = o;

    console.log(number1, number2, operation);
}

function point() {

}

function equal() {
    if (number1 != null && number2 != null && operation != null) {
        if (operation == '*') {
            number1 *= number2;
        } else if (operation == '/') {
            number1 /= number2;
        } else if (operation == '+') {
            number1 += number2;
        } else if (operation == '-') {
            number1 -= number2;
        }
        number2 = null;
        operation = null;
        result.textContent = number1;
    }

    console.log(number1, number2, operation);
}

function reset() {
    number1 = null;
    number2 = null;
    operation = null;
    result.textContent = 0;
}



 