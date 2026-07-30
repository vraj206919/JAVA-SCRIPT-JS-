const quizData = [
  {
    id: 1,
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
  },
  {
    id: 2,
    question: "Which method removes the last element from an array?",
    options: ["push()", "pop()", "shift()", "slice()"],
    correctAnswer: "pop()",
  },
  {
    id: 3,
    question: "Which method creates a new array by changing each element?",
    options: ["filter()", "map()", "find()", "forEach()"],
    correctAnswer: "map()",
  },
  {
    id: 4,
    question: "Which method returns only elements that match a condition?",
    options: ["map()", "reduce()", "filter()", "findIndex()"],
    correctAnswer: "filter()",
  },
  {
    id: 5,
    question: "Which method returns the first matching element?",
    options: ["find()", "filter()", "map()", "some()"],
    correctAnswer: "find()",
  },
  {
    id: 6,
    question: "Which method is used to calculate a single value from an array?",
    options: ["map()", "reduce()", "forEach()", "find()"],
    correctAnswer: "reduce()",
  },
  {
    id: 7,
    question: "How do you access the name property of this object?",
    options: ["user.name", "user->name", "user[name]", "user::name"],
    correctAnswer: "user.name",
  },
  {
    id: 8,
    question: "Which method loops through every array element?",
    options: ["forEach()", "find()", "reduce()", "sort()"],
    correctAnswer: "forEach()",
  },
  {
    id: 9,
    question: "Which method finds the index of an element?",
    options: ["find()", "findIndex()", "index()", "search()"],
    correctAnswer: "findIndex()",
  },
  {
    id: 10,
    question: "Which keyword is used to create an object?",
    options: ["object", "new", "create", "make"],
    correctAnswer: "new",
  },
];

const questionText = document.getElementById("questionText");
const questionCount = document.getElementById("questionCount");
const optionContainer = document.getElementById("optionContainer");
const result = document.getElementById("result");

let currentQuestionIndex = 0;
let selectedAnswer = "";
let totalScore = 0;

showQuestion();

function showQuestion() {
  optionContainer.innerHTML = "";

  questionCount.innerText = `Question ${currentQuestionIndex + 1}/${quizData.length}`;

  questionText.innerText = quizData[currentQuestionIndex].question;

  quizData[currentQuestionIndex].options.forEach(function (optionText) {
    let column = document.createElement("div");
    column.classList.add("col-md-6");

    let button = document.createElement("button");

    button.innerText = optionText;

    // BLUE COLOR
    button.classList.add("btn", "btn-outline-primary", "option-btn");

    button.onclick = function () {
      selectedAnswer = optionText;

      nextQuestion();
    };

    column.appendChild(button);

    optionContainer.appendChild(column);
  });
}

function nextQuestion() {
  if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
    totalScore++;
  }

  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;

    selectedAnswer = "";

    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionText.innerHTML = "Finally Your MCQ is Completed ";

  optionContainer.innerHTML = "";

  result.innerHTML = `
    <h3 class="text-center text-success">
       Total Score : ${totalScore}/${quizData.length}
    </h3>
  `;
}
