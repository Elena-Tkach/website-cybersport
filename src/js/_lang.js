
const langsRu = document.querySelector(`.js-lang-ru`);
const langsEn = document.querySelector(`.js-lang-en`);


langsEn.addEventListener(`click`, addLangEn);

langsRu.addEventListener(`click`, addLangRu);

function addLangRu() {
    langsRu.classList.add(`active`);
    langsEn.classList.remove(`active`);
}

function addLangEn() {
    langsEn.classList.add(`active`);
    langsRu.classList.remove(`active`);
}