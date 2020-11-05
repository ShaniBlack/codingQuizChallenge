let questionsSection = document.querySelector("#questions");
let timer = document.querySelector("#time");
let choicesDiv = document.querySelector("#choices");
let submitButton = document.querySelector("#submit");
let startButton = document.querySelector("#start");
let scoreName = document.querySelector("#name");
let responses = document.querySelector("#response");

let questionNumber = 0;
let time = 75;
let timeClock;

function startQuiz() {
  let startPageEl = document.getElementById("startPage");
  startPageEl.setAttribute("class", "hide");

//   questionsSection.removeAttribute("class");

  timeClock = setInterval(clockCounter, 1000);

  timer.textContent = time;

  getQuestion();
}

startButton.onclick = startQuiz;

function getQuestion() {
  let currentQuestion = asks[questionNumber];
  let asksEl = document.getElementById("asksQuestion");
  asksEl.textContent = currentQuestion.ask;

  choicesDiv.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    let choicePick = document.createElement("button");
    choicePick.setAttribute("class", "choice");
    choicePick.setAttribute("value", choice);

    choicePick.textContent = i + 1 + ". " + choice;
    choicePick.onclick = questionClick;
    choicesDiv.appendChild(choicePick);
  });
}

function questionClick() {
  if (this.value !== asks[questionNumber].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    timer.textContent = time;
    response.textContent = "Sorry! Wrong answer!";
  } else {
    response.textContent = "Yay! You got it!";
  }

  questionNumber++;
  if (questionNumber === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
    clearInterval(timer);
    let finishedQuiz = document.getElementById("finished");
    finishedQuiz.removeAttribute("class");
    let finishedScore = document.getElementById("finalScore");
    finishedScore.setAttribute("class", "hide");
}

function clockCounter() {
    time--;
    timer.textContent = time;

    if(time < 0) {
        quizEnd();
    }
}

function calcHighScore() {
    let name = scoreName.value.trim();

    if (name !== "") {
        let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            name: name,
        };
        highScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highScores));

        location.href = "score.html";
    }
}
submitButton.onclick = calcHighScore;
startButton.onclick = startQuiz;
