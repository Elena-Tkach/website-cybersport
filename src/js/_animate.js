const scrollItems = document.querySelectorAll(`.js-scroll`);


window.addEventListener(`scroll`, function () {

    checkBoxes(scrollItems);
});


function checkBoxes(item, box) {
    const triggerTop = window.innerHeight - 200;


    item.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerTop) {
            box.classList.add(`animation-class`);
        }
    });
}