const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName("choice-text"));

const questionCounterText = document.getElementById("hud-text");

const scoreCounterText = document.getElementById("score-counter");

const game = document.getElementById("game");

const loader = document.getElementById("loader");

const progressBarFill = document.getElementById("progress-bar-fill");

let questions = [];

let questionCounter = 0;
let acceptingAnswers = false;
let currentQuestion = {};
let availableQuestions = [];
let score = 0;

// //CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 8;

// fetch("questions.json")
//     .then((res) => res.json())
//     .then((data) => {
//         questions = data;

//         startGame();
//     })
//     .catch((err) => err);

const fetchingQuestions = async() => {
    try {
        const fetchData = await fetch("questions.json");
        const data = await fetchData.json();
        questions = data;

        startGame();
    } catch (err) {
        err;
    }
};

fetchingQuestions();

const startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    getQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

const getQuestion = () => {
    if (availableQuestions === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFill.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        // console.log(e.target);
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        let applyColor =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectedChoice.parentElement.classList.add(applyColor);
        if (applyColor === "correct") {
            scoreCounterText.innerText = `${(score += CORRECT_BONUS)}`;
        }

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(applyColor);
            getQuestion();
        }, 1500);
    });
});