window.addEventListener(`DOMContentLoaded`, () => {
    'use strict';
    const body = document.body;
    const sc = body.scrollY;
    let previousActiveElement;


    @@include('_inputmask.min.js');
    @@include('_simpleParallax.min.js');


    @@include('_burger.js');
    @@include('_modal.js');
    @@include('_formSend.js');
    @@include('_headerScroll.js');
    @@include('_parallax.js');
    @@include('_counter.js');


    //маска телефона 
    const selector = document.querySelectorAll(`input[type="tel"]`);
    const im = new Inputmask(`+7 (999) 999-99-99`);
    im.mask(selector);










})



