function calculator() {
    let result;
    let displayedOperator;
    let operator = prompt('Enter operation: + or add, - or sub, * or mult, / or div, % or mod').toLowerCase();
    let numberOne = +prompt('Enter first number');
    if (Number.isNaN(numberOne)) {
        alert('This is not a number! Please reload page and try again');
        return;
    }
    let numberTwo = +prompt('Enter second number');
    if(Number.isNaN(numberTwo)) {
        alert('This is not a number! Please reload page and try again');
        return;
    }
    switch (operator) {
        case '+':
        case 'add':
            result = numberOne + numberTwo;
            displayedOperator = '+';
            break;
        case '-':
        case 'sub':
            result = numberOne - numberTwo;
            displayedOperator = '-';
            break;
        case '*':
        case 'mult':
            result = numberOne * numberTwo;
            displayedOperator = '*';
            break;
        case '/':
        case 'div':
            result = numberOne / numberTwo;
            displayedOperator = '/';
            break;
        case '%':
        case 'mod':
            result = numberOne % numberTwo;
            displayedOperator = '%';
            break;
        default: break;
    }

    alert(`${numberOne} ${displayedOperator} ${numberTwo} = ${result}`);
}

calculator();