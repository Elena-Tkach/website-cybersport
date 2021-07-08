window.addEventListener(`DOMContentLoaded`, () => {

    const body = document.body;

    const tabs = document.querySelectorAll(`.js-payingItem`);
    const tabsContent = document.querySelectorAll(`.js-serviceItem`);
    const tabParent = document.querySelector(`.js-payingList`)

    hideTabContent();
    showTabContent();

    tabParent.addEventListener(`click`, (event) => {
        const target = event.target;
        if (target && target.classList.contains(`js-payingItem`)) {
            tabs.forEach((item, i) => {

                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add(`hide`);
            item.classList.remove(`active`);
        });

        tabs.forEach(item => {
            item.classList.remove(`show`);
        })


    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add(`active`);
        tabsContent[i].classList.remove(`hide`);
        tabs[i].classList.add(`show`);
    }


















})



