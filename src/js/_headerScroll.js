let scroll = 0;
const defaultOffset = 400;
const header = document.querySelector(`.js-header`);
const anchors = document.querySelectorAll(`.js-anchors`);

slowScroll(anchors);

//обработчик события скролл
window.addEventListener(`scroll`, () => {
    scrollheader();
});

//появление хедера при скролле вверх
function scrollheader() {
    const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains(`hide`);


    if (scrollPosition() >
        scroll && !containHide() &&
        scrollPosition() > defaultOffset) {
        header.classList.add(`hide`);

    }

    if (scrollPosition() < scroll && containHide) {
        header.classList.remove(`hide`);

    }

    scroll = scrollPosition();
}

//медленный скролл к якорю
function slowScroll(anchors) {
    for (let anchor of anchors) {
        anchor.addEventListener(`click`, (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute(`href`)
            document.querySelector(`${blockID}`).scrollIntoView({
                behavior: `smooth`,
                block: `start`
            })
        })
    }
}