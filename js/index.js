const presentYear = document.querySelector("#year");
const NewDate = new Date();
// const form = document.querySelector("form");
// const input = document.querySelector("textarea");
// const message = document.querySelector("#errormessage");

const updateYear = (yearUpdate, year) => {
    year.innerHTML = yearUpdate.getFullYear();
};

updateYear(NewDate, presentYear);

const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

let preloader = select("#preloader");
if (preloader) {
    window.addEventListener("load", () => {
        preloader.remove();
    });
}