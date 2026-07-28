const quizData = [
  {
    id: 1,
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
];

const quizQuestion = document.getElementById("quizQuestion");
const optionsContainer = document.getElementById("optionsContainer");
const questionCounter = document.getElementById("questionCounter");

let currentIndex = 0;

quizQuestion.innerText = quizData[currentIndex].question;

function displayQuestion() {

  optionsContainer.innerHTML = "";

  const currentQuiz = quizData[currentIndex];

  questionCounter.innerText = `Question ${currentIndex + 1}/${quizData.length}`;

  quizQuestion.innerText = currentQuiz.question;

  currentQuiz.options.forEach(function(optionText) {

    const column = document.createElement("div");
    column.className = "col-6";

    const optionButton = document.createElement("button");
    optionButton.innerText = optionText;
    optionButton.className = "btn btn-outline-primary w-100 my-2";

    column.appendChild(optionButton);
    optionsContainer.appendChild(column);

  });
}

displayQuestion();