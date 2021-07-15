const menuEl = document.querySelector(`.js-menu`);
const burgerBtnEl = document.querySelector(`.js-burger`);
const list = document.querySelector(`.js-list`);
const overlayHeaderEl = document.querySelector(`.js-overlay`);

burgerBtnEl.addEventListener(`click`, onShowHideBurgerClick);

overlayHeaderEl.addEventListener(`click`, onShowHideBurgerClick);

menuEl.addEventListener(`keydown`, (e) => {
    if (e.code === `Escape`) {
        onShowHideBurgerClick();
    }
});

list.addEventListener(`click`, onListLinkClick);

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

function onListLinkClick(e) {
    const target = e.target;
    const clickLink = target.classList.contains(`js-link`)

    if (clickLink) {
        onShowHideBurgerClick();
    }

}
