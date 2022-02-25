const userName = document.getElementById("username");
const highScoreText = document.getElementById("high-score");
const SaveBtn = document.getElementById("save-score-btn");
const userData = JSON.parse(localStorage.getItem("userData")) || [];

const highScore = localStorage.getItem("mostRecentScore");

highScoreText.innerText = highScore;
const MAX_HIGH_SCORE = 5;

username.addEventListener("keyup", () => {
    SaveBtn.disabled = false;
});

const saveScore = (e) => {
    e.preventDefault();
    // console.log("Just click the save button");

    const Score = {
        score: highScore,
        username: userName.value,
    };

    userData.push(Score);
    userData.sort((a, b) => b.score - a.score);
    userData.splice(MAX_HIGH_SCORE);

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.assign("index.html");
    // console.log(userData);
};