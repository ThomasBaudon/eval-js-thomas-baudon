"use strict";

// DEFINE DATAS
var slides = document.getElementsByClassName('slider-item');
var prevButton = document.getElementById('slider-button-prev');
var nextButton = document.getElementById('slider-button-next');
var numberOfSlides = slides.length;

let position = 0;


// LOGIQUE DE FONCTIONNEMENT

/**
 * hide all the slides of the slides HTML collection
 */
function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove("active");
        slide.classList.add("hidden");
    }
}

setInterval(()=>{
    hideAllSlides();
    if (position === numberOfSlides - 1) {
        position = 0;} else {
            position++;
        }
        slides[position].classList.add("active");
  }, 5000);