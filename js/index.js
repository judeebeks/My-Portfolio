const presentYear = document.querySelector("#year");
const NewDate = new Date();
// const form = document.querySelector("form");
// const input = document.querySelector("textarea");
// const message = document.querySelector("#errormessage");

const updateYear = (yearUpdate, year) => {
    year.innerHTML = yearUpdate.getFullYear();
};

updateYear(NewDate, presentYear);

// form.addEventListener("submit", (e) => {
//     let errorMessage = [];

//     if (input.value.trim().length < 1) {
//         errorMessage.push("Enter a text!");
//     }

//     if (errorMessage.length > 0) {
//         e.preventDefault();
//         message.innerHTML = errorMessage.toString();
//     }
// });