const listWrapper = document.querySelector('.list-wrapper');
function generateList(array) {
    let result = '<ul>';
    
    for (let i = 0; i < array.length; i++) {
        result += '<li>';
        if (Array.isArray(array[i])) {
            result += generateList(array[i]);
        } else {
            result += array[i];
        }
        result += '</li>';
    }
    
    result += '</ul>';
    
    return result;
}

const array = [5, 6, [6.1, 6.2, 6.3], 8, [8.1, 8.2, 8.3]];
const list = generateList(array);
listWrapper.innerHTML = list;
