const menuEl = document.querySelector(`.js-menu`);
const burgerBtnEl = document.querySelector(`.js-burger`);
// const dropdownItems = document.querySelectorAll(`.js-dropdown`);
// const list = document.querySelectorAll(`.js-list`);

const overlayHeaderEl = document.querySelector(`.js-overlay`);

console.log(overlayHeaderEl);

burgerBtnEl.addEventListener(`click`, onShowHideBurgerClick);
overlayHeaderEl.addEventListener(`click`, onShowHideBurgerClick);
menuEl.addEventListener(`keydown`, (e) => {
    if (e.code === `Escape`) {
        onShowHideBurgerClick();


    }
});


function onShowHideBurgerClick() {
    const addClassActive = menuEl.classList.toggle(`show`);
    overlayHeaderEl.classList.toggle(`active-overlay`);
    body.classList.toggle(`no-scroll`);


    if (addClassActive) {
        burgerBtnEl.setAttribute(`aria-label`, `Закрыть навигационное меню`);
    }

    if (!addClassActive) {
        burgerBtnEl.setAttribute(`aria-label`, `Открыть навигационное меню`);

    }
}

