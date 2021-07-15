const years = document.querySelector(`.js-year`);
const operations = document.querySelector(`.js-operations`);
const contracts = document.querySelector(`.js-contracts`);
const clients = document.querySelector(`.js-clients`);
const scrollItems = document.querySelector(`.js-scroll`);


document.addEventListener(`scroll`, () => {
    outNum(5, years, 1000, 1);
    outNum(1500, operations, 100, 20);
    outNum(50, contracts, 100, 2);
    outNum(15000, clients, 100, 200);
});




function outNum(num, elem, time, step) {
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        elem.innerHTML = n;
    },
        t);
};