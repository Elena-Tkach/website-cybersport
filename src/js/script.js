'use strict';
window.addEventListener(`DOMContentLoaded`, () => {

    const body = document.body;

    @@include('_inputmask.min.js');


    @@include('_burger.js');
    @@include('_modal.js');
    @@include('_formSend.js');
    @@include('_headerScroll.js');


    //маска телефона 
    const selector = document.querySelectorAll(`input[type="tel"]`);
    const im = new Inputmask(`+7 (999) 999-99-99`);
    im.mask(selector);










})



