const elementOne = document.querySelector('.cycle-one-js');
const elementTwo = document.querySelector('.cycle-two-js');
const elementThree = document.querySelector('.cycle-three-js');
const elementFour = document.querySelector('.cycle-four-js');
const elementFive = document.querySelector('.cycle-five-js');
const resultOne = document.querySelector('.result-one-js');
const resultTwo = document.querySelector('.result-two-js');
const resultThree = document.querySelector('.result-three-js');
const resultFour = document.querySelector('.result-four-js');
const resultFive = document.querySelector('.result-five-js');
const obj = {
    is_hide_operation_one: false,
    is_hide_operation_two: false,
    is_hide_operation_three: false,
    is_hide_operation_four: false,
    is_hide_operation_five: false,
}

elementOne.addEventListener('click', () => {
    obj.is_hide_operation_one = !obj.is_hide_operation_one;
    operationOne();
});

elementTwo.addEventListener('click', () => {
    obj.is_hide_operation_two = !obj.is_hide_operation_two;
    operationTwo();
});

elementThree.addEventListener('click', () => {
    obj.is_hide_operation_three = !obj.is_hide_operation_three;
    operationThree();
});

elementFour.addEventListener('click', () => {
    obj.is_hide_operation_four = !obj.is_hide_operation_four;
    operationFour();
});

elementFive.addEventListener('click', () => {
    obj.is_hide_operation_five = !obj.is_hide_operation_five;
    operationFive();
});

//----------------START OF CYCLES------------------------//

const operationOne = () => {
    const arr = [];
    for (let i = 20; i <= 30; i += 0.5) {
        arr.push(i);
    }
    if (obj.is_hide_operation_one) {
        elementOne.classList.add("cycles__list-item-active");
        resultOne.innerHTML = `<p><span>Результат:</span> [${arr.join(', ')}]</p>`;
    } else {
        elementOne.classList.remove("cycles__list-item-active");
    }
    console.log(arr);
};

//----------------------------------------------------------//

const operationTwo = () => {
    let arr = [];
    let sum;
    let dollar = 27;
    for (let i = 10; i <= 100; i += 10) {
        sum = dollar * i;
        arr.push(`${i}$ = ${sum}UAH`);
    }
    if (obj.is_hide_operation_two) {
        elementTwo.classList.add("cycles__list-item-active");
        resultTwo.innerHTML = `<p><span>Результат:</span> ${arr.join('<br><br>')}</p>`;
    } else {
        elementTwo.classList.remove("cycles__list-item-active");
    }
    console.log(arr.join('\n'));
};

//----------------------------------------------------------//

const operationThree = () => {
    if (obj.is_hide_operation_three) {
        let arr = [];
        let square;
        let num = +prompt('Введите целое число');
        if (Number.isNaN(num) || num <= 0) {
            alert('Вы ввели не чиcло, попробуйте еще раз');
            return operationThree();
        }
        for (let i = 1; i <= 100; i++) {
            square = i * i;
            if (square <= num) {
                arr.push(i);
            }
        }
        elementThree.classList.add("cycles__list-item-active");
        resultThree.innerHTML = `<p><span>Результат:</span> [${arr.join(', ')}]</p>`;
        console.log(arr);
    } else {
        elementThree.classList.remove("cycles__list-item-active");
    }
};

//----------------------------------------------------------//

const operationFour = () => {
    if (obj.is_hide_operation_four) {
        let num = +prompt('Введите целое число');
        if (Number.isNaN(num) || num <= 1) {
            alert('Введенное Вами число не является числом или ровно 1, пожалуйста введите число больше 1');
        } else {
            let isNumberSimple = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isNumberSimple = false;
                    break;
                }
            }
            elementFour.classList.add("cycles__list-item-active");
            if(isNumberSimple)  {
                resultFour.innerHTML = `<p><span>Результат:</span>Ваше число "${num}" является простым</p>`;
            } else {
                resultFour.innerHTML = `<p><span>Результат:</span>Ваше число "${num}" не является простым</p>`;
            }
            console.log(isNumberSimple);
        }
    } else {
        elementFour.classList.remove("cycles__list-item-active");
    }
};

//----------------------------------------------------------//

const operationFive = () => {
    if (obj.is_hide_operation_five) {
        let num = +prompt('Введите целое число');
        if (Number.isNaN(num) || num < 1) {
            alert('Вы ввели не число или число меньше 1, пожалуйста попробуйте снова');
            return operationFive();
        } else {
            let isPowerOfThree = false;
            let currentNumber = 1;
            while (currentNumber <= num) {
                if (currentNumber === num) {
                    isPowerOfThree = true;
                    break;
                }
                currentNumber *= 3;
            }
            elementFive.classList.add("cycles__list-item-active");
            if(isPowerOfThree)  {
                resultFive.innerHTML = `<p><span>Результат:</span>Ваше число "${num}" можно получить сведением числа 3 в некоторую степень.</p>`;
            } else {
                resultFive.innerHTML = `<p><span>Результат:</span>Ваше число "${num}" не можно получить сведением числа 3 в некоторую степень.</p>`;
            }
            console.log(isPowerOfThree);
        }
    } else {
        elementFive.classList.remove("cycles__list-item-active");
    }
};

//-------------------END OF CYCLES-----------------------//