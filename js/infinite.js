"use strict";

console.log("hello");

// Selecting The Container.
const container = document.querySelector('.general-container');
// The Scroll Event.
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 50){
		createPost();
	}
});

function createPost(){
	const post = document.createElement('section');
	post.className = 'car-container';
	post.innerHTML = `<section class="car-container" id="car-container">
    <div class="container-car-list">
        <!-- PEUGEOT -->
        <!-- CAR DETAILS SLIDER -->
        <div class="car-slider-container" id="car-slider-container">

            <button class="slide-arrow slide-arrow-prev" id="slide-arrow-prev">
                &#9664; 
            </button>
            
            <button class="slide-arrow slide-arrow-next" id="slide-arrow-next">
            &#9658;
            </button>

            <ul class="slides-container" id="slides-container">
                <li class="slide">
                    <img src="./img/vehicule1.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule1.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule1.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule1.png" alt="">
                </li>
            </ul>

    
        </div>
        <!-- PEUGEOT -->
        <!-- CAR RENTAL INFORMATIONS -->
        <div class="car-information">
            <h2 class="car-title">
                Peugeot 208
            </h2>
            <p>
                Diesel, 5 portes, GPS, Autoradio, Forfait 1000km (0,5€ / km supplémentaires).
            </p>
            <p>
                999€ - Agence de Paris
            </p>
            <button type="button">Réserver et payer</button>
        </div>
    </div>

    <div class="container-car-list">
        <!-- FORD -->
        <!-- CAR DETAILS SLIDER -->
        <div class="car-slider-container" id="car-slider-container">

            <button class="slide-arrow slide-arrow-prev" id="slide-arrow-prev">
                &#9664; 
            </button>
            
            <button class="slide-arrow slide-arrow-next" id="slide-arrow-next">
            &#9658;
            </button>

            <ul class="slides-container" id="slides-container">
                <li class="slide">
                    <img src="./img/vehicule2.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule2.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule2.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule2.png" alt="">
                </li>
            </ul>

    
        </div>

        <!-- FORD -->
        <!-- CAR RENTAL INFORMATIONS -->
        <div class="car-information">
            <h2 class="car-title">
                Ford Focus
            </h2>
            <p>
                Diesel, 5 portes, GPS, Autoradio, Forfait 1000km (0,5€ / km supplémentaires).
            </p>
            <p>
                999€ - Agence de Paris
            </p>
            <button type="button">Réserver et payer</button>
        </div>
    </div>

    <div class="container-car-list">
        <!-- AUDI -->
        <!-- CAR DETAILS SLIDER -->
        <div class="car-slider-container" id="car-slider-container">
            <button class="slide-arrow slide-arrow-prev" id="slide-arrow-prev">
                &#9664; 
            </button>
            
            <button class="slide-arrow slide-arrow-next" id="slide-arrow-next">
            &#9658;
            </button>

            <ul class="slides-container" id="slides-container">
                <li class="slide">
                    <img src="./img/vehicule3.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule3.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule3.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule3.png" alt="">
                </li>
            </ul>

    
        </div>
        <!-- AUDI -->
        <!-- CAR RENTAL INFORMATIONS -->
        <div class="car-information">
            <h2 class="car-title">
                Peugeot 208
            </h2>
            <p>
                Diesel, 5 portes, GPS, Autoradio, Forfait 1000km (0,5€ / km supplémentaires).
            </p>
            <p>
                999€ - Agence de Paris
            </p>
            <button type="button">Réserver et payer</button>
        </div>
    </div>

    <div class="container-car-list">
        <!-- OPEL -->
        <!-- CAR DETAILS SLIDER -->
        <div class="car-slider-container" id="car-slider-container">

            <button class="slide-arrow slide-arrow-prev" id="slide-arrow-prev">
                &#9664; 
            </button>
            
            <button class="slide-arrow slide-arrow-next" id="slide-arrow-next">
            &#9658;
            </button>

            <ul class="slides-container" id="slides-container">
                <li class="slide">
                    <img src="./img/vehicule4.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule4.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule4.png" alt="">
                </li>
                <li class="slide">
                    <img src="./img/vehicule4.png" alt="">
                </li>
            </ul>

    
        </div>
        <!-- OPEL -->
        <!-- CAR RENTAL INFORMATIONS -->
        <div class="car-information">
            <h2 class="car-title">
                Peugeot 208
            </h2>
            <p>
                Diesel, 5 portes, GPS, Autoradio, Forfait 1000km (0,5€ / km supplémentaires).
            </p>
            <p>
                999€ - Agence de Paris
            </p>
            <button type="button">Réserver et payer</button>
        </div>
    </div>


</section>`;
	container.appendChild(post);
}