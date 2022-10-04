const slidesContainer = document.querySelectorAll(".slides-container");
const slide = document.querySelector(".slide");
const previous_Button = document.querySelector(".slide-arrow-prev");
const next_Button = document.querySelector(".slide-arrow-next");



// window.onclick = function(e) {}

slidesContainer.forEach(slideContainer => {
    console.log(slideContainer);

    // previous_Button.addEventListener('click', (e) => {
    //      // e.target.classList.toggle("envers");
    //      console.log('click gauche');

    //      const slideWidth = slide.clientWidth;
    //      slideContainer.scrollLeft -= slideWidth;
    // })

       

   

    // if (e.target.classList.contains("slide-arrow-next")){

    //     // e.target.classList.toggle("envers");
    //     console.log('click droite');

    //     const slideWidth = slide.clientWidth;
    //     slideContainer.scrollLeft += slideWidth;

    // }
})
