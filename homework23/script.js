const input = document.getElementById('input');
const ghost = document.querySelector('.ghost-div');

input.addEventListener('focus', () => {
    ghost.style.display = 'inline-flex';
});

input.addEventListener('blur', () => {
    ghost.style.display = 'none';
});