function number(num) {
    var number = document.getElementById("inputCalculation");
    switch (num) {
        case 1:
            number.value += '1';
            break;
        case 2:
            number.value += '2';
            break;
        case 3:
            number.value += '3';
            break;
        case 4:
            number.value += '4';
            break;
        case 5:
            number.value += '5';
            break;
        case 6:
            number.value += '6';
            break;
        case 7:
            number.value += '7';
            break;
        case 8:
            number.value += '8';
            break;
        case 9:
            number.value += '9';
            break;
        case 0:
            number.value += '0';
            break;
    }
}

function operand(operand) {
    var operator = document.getElementById("inputCalculation");
    if ((operand === '+' || operand === '-' || operand === '/' || operand === '*') && (operator.value === '')) {
        return;
    }

    switch (operand) {
        case '+':
            operator.value += '+';
            break;
        case '-':
            operator.value += '-';
            break;
        case '*':
            operator.value += '*';
            break;
        case '/':
            operator.value += '/';
            break;
    }
}

function clearScreen() {
    document.getElementById('inputCalculation').value = "";
    document.getElementById('answerCalculation').value = "";
}

function backspace() {
    let backspace = document.getElementById("inputCalculation");
    let y = backspace.value;

    if (y.length > 0) {
        y = y.substring(0, y.length - 1);
        backspace.value = y;
    }
}

function count() {
    let compute = document.getElementById("inputCalculation");
    ans = Math.floor(+eval(compute.value));
    document.getElementById("answerCalculation").value += ans;
}