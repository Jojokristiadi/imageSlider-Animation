const carouselSlide = document.querySelector('.carousel-slides');
const carouselImg = document.querySelectorAll('.carousel-slides img');
const nextSlide = document.querySelector('#nextSlide');
const prevSlide = document.querySelector('#prevSlide');
const currentSlide = document.querySelector('.current-slide');
const allSlide = document.querySelectorAll('.all-slide');

// creates a counter to track which image we are see now
let counter = 0;

// get picture width
const size = carouselImg[0].clientWidth;

nextSlide.addEventListener("click", () => {
    //if an user reach out to end images, stop execute
    if(counter >= carouselImg.length - 1) return;
    //add counter 1
    counter++;

    //move carousel
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    //current slide
    currentSlide.textContent = counter +  1;
})

prevSlide.addEventListener("click", () => {
    if(counter <= 0) return;
    counter--;

    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    currentSlide.textContent = counter + 1;
})

allSlide.textContent = carouselImg .length;