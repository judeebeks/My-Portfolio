const inputField = document.querySelector(".input-env input");

const inputBtn = document.querySelector(".input-env button ");

const todoList = document.querySelector(".todo-list");

const clearAllBtn = document.querySelector(".footer button");

const todoStatus = document.querySelector(".footer p");

inputField.onkeyup = () => {
    let userData = inputField.value;
    if (userData.trim() != 0) {
        inputBtn.classList.add("active");
    } else {
        inputBtn.classList.remove("active");
    }
};

function showData() {
    let getLocalStorage = JSON.parse(localStorage.getItem("NewToDo")) || [];
    let arrayList = getLocalStorage;

    console.log(arrayList);
    let display = "";

    arrayList.forEach((item, index) => {
        display += `<li>${item} <span onclick="deleteBtn(${index})"><i class="fa fa-trash"></i></span></li>`;
    });

    todoList.innerHTML = display;
    todoStatus.innerHTML = `You have ${arrayList.length} pending Todo`;

    if (arrayList.length == 0) {
        clearAllBtn.classList.remove("active");
    } else {
        clearAllBtn.classList.add("active");
    }
}

showData();

inputBtn.onclick = () => {
    storeData();
    showData();
};

//ADD TODO TO  THE LIST
function storeData() {
    let userData = inputField.value; //user input
    let getLocalStorage = JSON.parse(localStorage.getItem("NewToDo")) || [];
    let arrayList = getLocalStorage;

    arrayList.push(userData);
    console.log(arrayList);
    inputField.value = "";

    inputBtn.classList.remove("active");
    localStorage.setItem("NewToDo", JSON.stringify(arrayList.reverse()));
}

//Delete Button
function deleteBtn(index) {
    let getLocalStorage = JSON.parse(localStorage.getItem("NewToDo")) || [];
    let arrayList = getLocalStorage;
    arrayList.splice(index, 1);

    localStorage.setItem("NewToDo", JSON.stringify(arrayList));
    showData();
}

//Clear All Button
clearAllBtn.onclick = () => {
    let getLocalStorage = JSON.parse(localStorage.getItem("NewToDo")) || [];
    let arrayList = getLocalStorage;

    arrayList = "";

    localStorage.setItem("NewToDo", JSON.stringify(arrayList));
    showData();
};