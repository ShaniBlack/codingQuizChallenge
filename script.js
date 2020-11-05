let questionsSection = document.querySelector("#questions");
let timer = document.querySelector("#time");
let choicesDiv = document.querySelector("#choices");
let submitButton = document.querySelector("#submit");
let startButton = document.querySelector("#start");
let scoreName = document.querySelector("#name");
let responses = document.querySelector("#response");
let asksQues = document.querySelector("asks")
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

}

startButton.onclick = startQuiz;

function getQuestions() {
    questionNumber++;
    answer = asks[questionNumber].answer;

    asksQues.textContent = asks[questionNumber].ask;
    answerQues.innerHTML = "";

    let choices = asks[questionNumber].choices;

      }
