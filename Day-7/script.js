const images = ['../images/Carousel-1.jpg','../images/Carousel-2.jpg','../images/Carousel-3.jpg'];
let currentIndex = 0;

const image = document.getElementById('image');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', function () {
    currentIndex++;

    if(currentIndex >= images.length) {
        currentIndex = 0;
    }

    image.src = images[currentIndex];

})

prev.addEventListener('click', function () {
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    image.src = images[currentIndex];
})

