let arrayLength = prompt("Введите длину массива:");
let userArray = [];
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

for (let i = 0; i < arrayLength; i++) {
    let userInput = prompt(`Введите елемент индекса массива ${i}:`);
    userArray.push(userInput);
}

first.innerHTML = `Начальный массив: [${userArray.join(', ')}]`;
console.log(`Начальный массив: [${userArray.join(', ')}]`);

second.innerHTML = `Отсортированный начальный массив: [${userArray.sort().join(', ')}]`;
console.log(`Отсортированный начальный массив: [${userArray.sort().join(', ')}]`);

third.innerHTML = `Отсортированный начальный массив: [${userArray.splice(1, 3).join(', ')}]`;
console.log(`Отсортированный начальный массив: [${userArray.splice(1, 3).join(', ')}]`);