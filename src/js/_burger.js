const menu = document.querySelector(`.js-menu`);
const burgerBtn = document.querySelector(`.js-burger`);
const dropdownItems = document.querySelectorAll(`.js-dropdown`);

burgerBtn.addEventListener(`click`, showMenuBtnClick);

dropdownItems.forEach(item => {
    item.addEventListener(`click`, (e) => {
        openNavList(e);

    });
})

function showMenuBtnClick() {
    menu.classList.toggle(`show`);
}



function openNavList(event) {
    const self = event.currentTarget;

    self.classList.toggle(`open-list`);

}

