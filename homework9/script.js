const powerUp = (num, degree) => {
    if (degree === 0) {
        return 1;
    }
    return num * powerUp(num, degree - 1);
};

const number = parseFloat(prompt('Введите число'));
const exponent = parseFloat(prompt('Введите степень'));

if (isNaN(number) || isNaN(exponent) || exponent < 0) {
    alert("Пожалуйста введите корректное число");
} else {
    let result = powerUp(number, exponent);
    alert(`${number} в ступени ${exponent} = ${result}`);
}