let scroll = 0;
const defaultOffset = 400;
const header = document.querySelector(`.js-header`);
const anchors = document.querySelectorAll(`.js-anchors`);

slowScroll(anchors);

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