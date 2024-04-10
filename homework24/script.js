window.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
    const buttonPrev = document.querySelector('.slider__controls-prev');
    const buttonNext = document.querySelector('.slider__controls-next');

    imageFiles.forEach(fileName => {
        const img = document.createElement('img');
        img.src = `img/${fileName}`;
        img.classList.add('slider__item');
        slider.appendChild(img);
    });

    const sliderItems = Array.from(slider.children);

    sliderItems.forEach((slide, index) => {
        if(index !== 0) slide.classList.add('hidden');

        slide.dataset.index = index;

        sliderItems[0].setAttribute('data-active', '');

        slide.addEventListener('click', () => {
            showNextSlide('next');
        });
    });

    buttonNext.addEventListener('click', () => {
        showNextSlide('next');
    });

    buttonPrev.addEventListener('click', () => {
        showNextSlide('prev');
    });

    function showNextSlide(direction) {
        const currentSlide = slider.querySelector('[data-active]');
        const currentSlideIndex = Number(currentSlide.dataset.index);
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');

        let nextSlideIndex;
        if (direction === 'next') {
            nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
        } else if (direction === 'prev') {
            nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    };
});