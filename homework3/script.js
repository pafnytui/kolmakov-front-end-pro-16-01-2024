function getNumber(myNum) {
    return +prompt(myNum);
}

let numberOne = getNumber('Enter first number');
let numberTwo = getNumber('Enter second number');

if (Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
    alert('This is not a number, reload page and try again');
} else {
    let add = numberOne + numberTwo;
    let sub = numberOne - numberTwo;
    let mult = numberOne * numberTwo;
    let diff = numberOne / numberTwo;
    alert(`${numberOne} + ${numberOne} = ${add} \n${numberOne} - ${numberTwo} = ${sub} \n${numberOne} * ${numberTwo} = ${mult} \n${numberOne} / ${numberTwo} = ${diff}`);
}