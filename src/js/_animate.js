const scrollItems = document.querySelectorAll(`.js-scroll`);


window.addEventListener(`scroll`, function () {
    checkBoxes(scrollItems);
});

function checkBoxes(item) {
    const triggerTop = window.innerHeight - 100;


    item.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerTop) {
            box.classList.add(`animation-class`);
        }
    });
}