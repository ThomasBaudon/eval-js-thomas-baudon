"use strict";

let buger = document.getElementById('burger-button');
let nav = document.getElementById('nav');

buger.addEventListener('click', function(e){
    console.log('click');
    nav.classList.toggle('active-menu')
    // this.innerText = "&#x274C;"
})