const getPicture =  () => {
    let container = document.querySelector('.image-container');
    
    let numOfimg = Math.floor((Math.random() * 9) + 1);

    container.innerHTML = `<img src="img/${numOfimg}.jpg" alt="picutres">`;
};

getPicture();