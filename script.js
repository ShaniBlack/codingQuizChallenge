let questionsSection = document.querySelector("#questionsSection");
let timer = document.querySelector("#time");
let choicesDiv = document.querySelector("#choices");
let submitButton = document.querySelector("#submit");
let startButton = document.querySelector("#start");
let scoreName = document.querySelector("#name");
let responses = document.querySelector("#response");

let questionNumber = [0];
let time = 75;
let timeClock;

function startQuiz() {
  let startPageEl = document.getElementById("startPage");
  startPageEl.setAttribute("class", "hide");

  // document.questionsSection.removeAttribute("class");

  timeClock = setInterval(clockCounter, 1000);

  timer.textContent = time;

  getQuestion();
}

startButton.onclick = startQuiz;

function getQuestion() {
      // this is to get current question object from array
    let currentQuestion = questions[questionNumber];
  
    // need to update title with current question
    let questionsAsk = document.getElementById("askQuestions");
    questionsAsk.textContent = currentQuestion.question;
  
    // clear out any old question choices
    choicesDiv.innerHTML = "";
  
    // loop over choices to the questions
    currentQuestion.choices.forEach(function (choice, i) {
      // create new button for each choice
      let choiceOption = document.createElement("button");
      choiceOption.setAttribute("class", "choice");
      choiceOption.setAttribute("value", choice);
  
      choiceOption.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceOption.onclick = nextQuestion;
  
      // display on the page
      choicesDiv.appendChild(choiceOption);
      
    });
  }
 
function questionCheck() {
  if (this.value !== questions[questionNumber].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    timer.textContent = time;
    response.textContent = "Sorry! Wrong answer!";
  } else {
    response.textContent = "Yay! You got it!";
  }

  responses.setAttribute("class", "response");
  setTimeout(function () {
    responses.setAttribute("class", "response hide");
  }, 1000);

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
