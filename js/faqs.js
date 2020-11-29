var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

var shuffledQuestions, currentQuestion;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestion++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestion]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

/* Quiz questions */

var questions = [
  {
    question: "In what year did the Chernobyl disaster occur?",
    answers: [
      { text: "1969", correct: false },
      { text: "1986", correct: true },
      { text: "1994", correct: false },
      { text: "1974", correct: false },
    ],
  },
  {
    question: "Which country is Pripyat located in?",
    answers: [
      { text: "Ukraine", correct: true },
      { text: "Russia", correct: false },
      { text: "Belarus", correct: false },
      { text: "Poland", correct: false },
    ],
  },
  {
    question:
      "What is the name of the forest surrounding the Chernobyl Power Plant?",
    answers: [
      { text: "Pink Forest", correct: false },
      { text: "Red Forest", correct: true },
      { text: "Green Forest", correct: false },
      { text: "Yellow Forest", correct: false },
    ],
  },
  {
    question:
      "Which of the below sites contains the highest levels of radiation",
    answers: [
      { text: "Pripyat Amusement park", correct: false },
      { text: "Duga Radar", correct: true },
      { text: "Red Forest", correct: true },
      { text: "Kiev", correct: false },
    ],
  },
  {
    question: "Which reactor did the disaster occur in?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
    ],
  },
];
