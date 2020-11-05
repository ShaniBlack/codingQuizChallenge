let questionsSection = document.querySelector("#questions");
let timer = document.querySelector("#time");
let choicesDiv = document.querySelector("#choices");
let submitButton = document.querySelector("#submit");
let startButton = document.querySelector("#start");
let scoreName = document.querySelector("#name");
let responses = document.querySelector("#response");
let asksQues = document.querySelector("asks");
let answerQues = document.querySelector("answer");

let questionNumber = 0;
let time = 75;
let timeClock;

function startQuiz() {
  let startPageEl = document.getElementById("startPage");
  startPageEl.setAttribute("class", "hide");

  questionsSection.removeAttribute("class");

  timeClock = setInterval(clockCounter, 1000);

  timer.textContent = time;

  getQuestions();
}

startButton.onclick = startQuiz;

function getQuestion() {
  let currentQuestion = asks[currentQuestionIndex];
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
  if (this.value !== asks[currentQuestionIndex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    timer.textContent = time;
    response.textContent = "Sorry! Wrong answer!";
  } else {
    response.textContent = "Yay! You got it!";
  }

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
