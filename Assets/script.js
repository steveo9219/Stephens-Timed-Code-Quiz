var question = document.getElementById("display");
var firstAnswer = document.getElementById("firstAnswer");
var secondAnswer = document.getElementById("secondAnswer");
var thirdAnswer = document.getElementById("thirdAnswer");
var startButton = document.getElementById("generate");
var answerA = document.getElementById(".btn");
var timer = document.getElementById("#timer");
var startButton = document.getElementById("startButton");
var scoreBoardEl = document.getElementById("highScores");

function myTimer() {
  var d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

var questionIndex = 0;
var i = 0;
var secondsLeft = 75;
var score = 0;
var questionArray = 0;

var questionsArray = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["1. <script>", "2. <js>", "3. <javascript>"],
    answer: "a",
  },
  {
    question: "JavaScript is the same as Java.",
    choices: ["1. True", "2. False", "3. Maybe"],
    answer: "a",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["1. onchange", "2. onclick", "3. onmouseover"],
    answer: "b",
  },
  {
    question: "How do you declare a JavaScript variable?",
    choices: ["1. var CarName", "2. variable carName", "3. v carName"],
    answer: "a",
  },
];

firstAnswer.addEventListener("click", increaseQuestionIndex);
secondAnswer.addEventListener("click", increaseQuestionIndex);
thirdAnswer.addEventListener("click", increaseQuestionIndex);

startButton.addEventListener("click", function () {
  startButton.outerHTML = "";
  displayPage();
});
//this will increase the question after clicking an answer but i need to log the answer first
function increaseQuestionIndex() {
  var choice = this.getAttribute("data-value");
  console.log(choice);
  console.log(questionsArray[0].answer);
  //let q = questionArray[questionIndex];
  if (choice === questionsArray[0].answer) {
    score++;

    scoreBoardEl.innerText = score;

    console.log(score);
  } else {
    console.log("wrong");
  }

  questionIndex++;
  displayPage();
}

function displayPage() {
  question.innerHTML = questionsArray[questionIndex].question;
  firstAnswer.textContent = questionsArray[questionIndex].choices[0];
  secondAnswer.textContent = questionsArray[questionIndex].choices[1];
  thirdAnswer.textContent = questionsArray[questionIndex].choices[2];
}
