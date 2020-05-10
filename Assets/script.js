var question = document.getElementById("display");
var firstAnswer = document.getElementById("firstAnswer");
var secondAnswer = document.getElementById("secondAnswer");
var thirdAnswer = document.getElementById("thirdAnswer");
var startButton = document.getElementById("generate");
var answerA = document.getElementById(".btn");
var timer = document.getElementById("#timer");
var startButton = document.getElementById("startButton");

var questionIndex = 0;
var i = 0;
var secondsLeft = 75;
var questionsArray = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["1. <script>", "2. <js>", "3. <javascript>"],
    answer: 0,
  },
  {
    question: "JavaScript is the same as Java.",
    choices: ["1. True", "2. False", "3. Maybe"],
    answer: 0,
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["1. onchange", "2. onclick", "3. onmouseover"],
    answer: 1,
  },
  {
    question: "How do you declare a JavaScript variable?",
    choices: ["1. var CarName", "2. variable carName", "3. v carName"],
    answer: 0,
  },
];
// this.startButton.addEventListener("click")
// var FirstQuestionAnswer = questionsArray.choices[questionsArray.answer]; //nested array
// console.log(questionsArray.answer);
// let firstAnswerChoice = questionsArray[questionIndex].choices[0];

//console.log([questionsArray][(0, 0)]);

startButton.addEventListener("click", function () {
  startButton.outerHTML = "";
  displayPage();
});
//this will increase the question after clicking an answer but i need to log the answer first
// function increaseQuestionIndex() {
//   //console.log(event.target.value);
//   questionIndex++;
//   displayPage();
// }

function displayPage() {
  question.innerHTML = questionsArray[questionIndex].question;
  firstAnswer.textContent = questionsArray[questionIndex].choices[0];
  secondAnswer.textContent = questionsArray[questionIndex].choices[1];
  thirdAnswer.textContent = questionsArray[questionIndex].choices[2];
  assignValue();
}

// function assignValue() {
//   if (firstAnswerChoice === 0) {
//     console.log("pizzatime"); //score = score+1
//   } else if {
//     console.log("notpizzatime");
//   }
// }

// function assignValue() {}
//firstAnswerChoice.setAttribute(firstAnswerChoice, {0 {i}.true})
//know where element is and grab value. id is unique

//.setAttribute(value, {THIS IS WHERE YOU PUT THE CURRENT QUESTION INDEX CHOICE{INDEX}.WRONG OR CORRECT})
