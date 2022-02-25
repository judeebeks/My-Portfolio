const presentYear = document.querySelector("#year");
const NewDate = new Date();

const updateYear = (yearUpdate, year) => {
    year.innerHTML = yearUpdate.getFullYear();
};

updateYear(NewDate, presentYear);