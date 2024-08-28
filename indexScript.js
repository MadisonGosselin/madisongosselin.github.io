/********************
 *
 * Home
 *
 ********************/

const slides = document.querySelectorAll(".slide");
const slideLeft = document.querySelector(".slideLeft");
const slideRight = document.querySelector(".slideRight");

// init slide variable with last visited slide (if valid) then call method to jump to that slide
let currSlide = parseInt(localStorage.getItem("lastSlide"), 10);
if (isNaN(currSlide)) {
    currSlide = slides.length; 
}
changeSlide(currSlide);

// change to slide with class corresponding to passed in value
function changeSlide(slideNum) {
    slides.forEach((slide) => {
        if (!slide.classList.contains("num" + currSlide)) {
            slide.style.display = "none";
        } else slide.style.display = "inline-block";
    });

    localStorage.setItem("lastSlide", currSlide);
}

// move to the slide to the left
slideLeft.addEventListener("click", () => {
    currSlide--;
    if (currSlide < 1) currSlide = slides.length;
    changeSlide(currSlide);
});

// move to the slide to the right
slideRight.addEventListener("click", () => {
    currSlide++;
    if (currSlide > slides.length) currSlide = 1;
    changeSlide(currSlide);
});
