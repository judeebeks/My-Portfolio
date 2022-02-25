const highScoreList = document.getElementById("highscorelist");
const highScore = JSON.parse(localStorage.getItem("userData")) || [];

// highScore
//     .map((users) => {
//         // console.log(users);
//         console.log(
//             (highScoreList.innerText = `<li class="highscore">${users.username} => ${users.score}</li>`)
//         );
//     })
//     .join("");

highScore.map((users) => {
    const li = document.createElement("li");
    li.classList.add("highscore");
    li.innerHTML = `${users.username}  -  ${users.score}`;
    highScoreList.append(li);
});