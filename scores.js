function showHighScores() {
    let highScores = JSON.parse(localstorage.getItem("highscores")) || [];

    highScores.forEach(function (score) {
        let liScore = document.createElement("li")
        liScore.textContent = score.name + " - " + score.score;

        let olScore = document.getElementById("highscores");
        olScore.appendChild(liScore);
    });
}
function clearScores() {
    localStorage.removeItem("highscores");
    location.reload();
}

document.getElementById("clear").onclick = clearScores;

showHighScores();