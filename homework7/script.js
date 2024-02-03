const  result = () => {
    let numbers = prompt('Введите три числа через запятую!').split(',').map(item => {
        return +item.trim();
    });
    let numOne = numbers[0];
    let numTwo = numbers[1];
    let numThre = numbers[2];
    let average = (numOne + numTwo + numThre) / 3;
    alert(`Среднее арифметическое числе = ${average}`);
}

result();