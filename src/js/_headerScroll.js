let scroll = 0;
const defaultOffset = 200;
const header = document.querySelector(`.js-header`);


if (sc >= 450) {
    header.style.cssText = `display:none`;
}


window.addEventListener(`scroll`, () => {
    scrollheader();
});


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
