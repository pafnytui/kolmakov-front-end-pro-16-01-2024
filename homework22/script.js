const getPicture =  () => {
    let container = document.querySelector('.image-container');
    
    let numOfimg = Math.round(Math.random() * 9);

    if (numOfimg === 0) {
        numOfimg = 1;
    }

    container.innerHTML = `<img src="img/${numOfimg}.jpg" alt="picutres">`;
};

getPicture();