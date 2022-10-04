// const containers = document.querySelectorAll(".car-slider-container");
// const slidesContainer = document.querySelectorAll(".slides-container");
// const slide = document.querySelector(".slide");
// const previous_Button = document.querySelector(".slide-arrow-prev");
// const next_Button = document.querySelector(".slide-arrow-next");


window.onclick = function(e) {
    if (e.target.classList.contains("car-slider-container")){

        const slide = document.querySelector(".slide");
        console.log(slideWidth, ' left');


        nextButton.addEventListener("click", (event) => {
            const slideWidth = slide.clientWidth;
              slidesContainer.scrollLeft += slideWidth;
              
          });

    }

}




// // window.onclick = function(e) {}

// containers.forEach(container => {

//     const slidesContainer = document.querySelectorAll(".slides-container");
//     const slide = document.querySelector(".slide");

//     for(let slideContainer of slidesContainer) {
//         previous_Button.addEventListener('click', (e) => {
//             // e.target.classList.toggle("envers");
//             console.log('click gauche');
   
//             const slideWidth = slide.clientWidth;
//             slideContainer.scrollLeft -= slideWidth;
//         });
//     }

//     });
