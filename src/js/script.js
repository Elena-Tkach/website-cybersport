

window.addEventListener(`DOMContentLoaded`, () => {

    const body = document.body;

    const menu = document.querySelector(`.js-menu`);
    const burgerBtn = document.querySelector(`.js-burger`);

    burgerBtn.addEventListener(`click`, showMenuBtnClick);


    function showMenuBtnClick() {
        menu.classList.toggle(`show`);
    }



    const dropdownItem = document.querySelector(`.js-dropdown`);
    const dropsoqnFooter = document.querySelector(`.js-dropdown-footer`);


    dropdownItem.forEach(item => {
        item.addEventListener(`click`, openNavList);
    })

    dropdownItem.addEventListener(`click`, openNavList);

    dropdownItem.addEventListener(`mouseover`, () => {
        dropdownItem.classList.add(`open-list`);
    });

    dropdownItem.addEventListener(`mouseout`, () => {
        dropdownItem.classList.remove(`open-list`);
    })


    function openNavList() {

        dropdownItem.classList.toggle(`open-list`);


    }

    //     // function openNavList() {
    //     //     openListNav.classList.add(`open-list`);
    //     // }

    //     //     const tabs = document.querySelectorAll(`.js-payingItem`);
    //     //     const tabsContent = document.querySelectorAll(`.js-serviceItem`);
    //     //     const tabParent = document.querySelector(`.js-payingList`)

    //     //     hideTabContent();
    //     //     showTabContent();

    //     //     tabParent.addEventListener(`click`, (event) => {
    //     //         const target = event.target;
    //     //         if (target && target.classList.contains(`js-payingItem`)) {
    //     //             tabs.forEach((item, i) => {

    //     //                 if (target == item) {
    //     //                     hideTabContent();
    //     //                     showTabContent(i);
    //     //                 }
    //     //             })
    //     //         }
    //     //     })


    //     //     function hideTabContent() {
    //     //         tabsContent.forEach(item => {
    //     //             item.classList.add(`hide`);
    //     //             item.classList.remove(`active`);
    //     //         });

    //     //         tabs.forEach(item => {
    //     //             item.classList.remove(`show`);
    //     //         })


    //     //     }

    //     //     function showTabContent(i = 0) {
    //     //         tabsContent[i].classList.add(`active`);
    //     //         tabsContent[i].classList.remove(`hide`);
    //     //         tabs[i].classList.add(`show`);
    //     //     }


















})



