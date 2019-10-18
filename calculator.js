function number(self) {
    const num = self.value;
    var number = document.getElementById("inputCalculation");
    number.value += num;
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

window.onload = () => {
    const buttons = document.getElementsByClassName('button');
    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i];
        const val = parseInt(button.value)
        if (!isNaN(val)){
            button.onclick = function(){
                number(button)
            }
        }
    }
}