/*Variables for buttons, container and questions set */
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var questionShuffle, currentQuestion;

/*Event listener added, when start button is clicked, the quiz begins(startGame function is initiated) */

startButton.addEventListener("click", startGame);

/*Clicking start hides the start button and displays the questions in the question container, the items in the question array are sorted and shuffled so questions do not appear in the same order each time the quiz is played over*/

/*'currentQuestion' takes the first question at the beginning of the now shuffled array and 'questionContainerElement' removes the CSS property 'hide' so the first question is displayed in the browser*/

/*currentQuestion starts at 0 index of */

function startGame() {
  startButton.classList.add("hide");
  questionShuffle = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

/*When the next button is clicked, the next question is presented as currentQuestion interates through array*/

nextButton.addEventListener("click", () => {
  currentQuestion++;
  setNextQuestion();
});

/*resetState function hides the next button until the user chooses an answer then hides the button again when the next question is populated */

function setNextQuestion() {
  resetState();
  showQuestion(questionShuffle[currentQuestion]);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

/*Takes a question and adds buttons to browser, each is populated with one of the answers from the question array */

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

/*Checks whether the answer the user has clicked on is correct(true or false), */

function selectAnswer(i) {
  var selectedButton = i.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (questionShuffle.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

/*Checks whether answr is correct, adds the 'correct' class if answer is correct otherwise adds the 'incorrect' class*/

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

/**/

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

/* Quiz questions set as an array, each contains a question and multiple possible answers assigned to either a true or false value*/

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
      { text: "Duga Radar", correct: false },
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
