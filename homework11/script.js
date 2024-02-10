const carsBrand = ['mercedes', 'bmw', 'audi', 'lexus', 'porshe'];
const randomArray = [1, 2, 3, 4, 5, 6, 7];

const removeElemnt = (array, item) => {
    const result = array;
    console.log(result);
    const index = result.indexOf(item);
    if (index !== -1) {
        result.splice(index, 1);
    } else {
        alert('Такого елемента нет в массиве');
    }
    console.log(result);
    return result;
};

removeElemnt(carsBrand, 'lexus');
removeElemnt(randomArray, 4);