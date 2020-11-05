function showHighScores() {
    let highScores = JSON.parse(window.localstorage.getItem("finalScore")) || [];

    highScores.forEach(function (score) {
        let liScore = document.createElement("li")
        liScore.textContent = score.name + " - " + score.score;

        let olScore = document.getElementById("finalScore");
        olScore.appendChild(liScore);
    });
}
function clearScores() {
    localStorage.removeItem("finalScore");
    location.reload();
}

// document.getElementById("clear").onclick = clearScores;

// showHighScores();