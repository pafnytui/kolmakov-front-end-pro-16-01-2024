const calculateNumericAverage = (arr) => {
    const numericValues = arr.filter(item => typeof item === 'number');
    if (numericValues.length === 0) {
        console.log("У масиві немає числових елементів.");
        return 0;
    }
    const sum = numericValues.reduce((total, num) => total + num, 0);
    const average = sum / numericValues.length;

    return average;
};

const mixedArray = [5, "str", 15, true, 15.5, "str2"];
const result = calculateNumericAverage(mixedArray);

console.log("Середнє арифметичне числових елементів масиву:", result);