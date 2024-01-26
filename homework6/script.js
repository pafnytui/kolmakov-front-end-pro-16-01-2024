let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case (numOrStr === null):
        console.log('Ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Порожній рядок');
        break;
    case (isNaN(+numOrStr)):
        console.log('Введено не число');
        break;
    default:
        console.log('OK!');
}