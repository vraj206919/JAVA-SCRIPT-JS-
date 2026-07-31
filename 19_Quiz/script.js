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
const timer = document.getElementById("timer");

let currentQuestionIndex = 0;
let selectedAnswer = "";
let totalScore = 0;
let answers = [];

let timeLeft = 30;
let timerInterval;

showQuestion();

function showQuestion() {
  optionContainer.innerHTML = "";

  questionCount.innerText = `Question ${currentQuestionIndex + 1}/${quizData.length}`;

  questionText.innerText = quizData[currentQuestionIndex].question;

  quizData[currentQuestionIndex].options.forEach((optionText) => {
    let column = document.createElement("div");
    column.classList.add("col-md-6");

    let button = document.createElement("button");
    button.innerText = optionText;
    button.classList.add("btn", "btn-outline-primary", "option-btn");

    button.onclick = function () {
      selectedAnswer = optionText;
      nextQuestion();
    };

    column.appendChild(button);
    optionContainer.appendChild(column);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);

  timeLeft = 30;
  timer.innerText = `Time ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;

    timer.innerText = `Time ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      selectedAnswer = "";

      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  clearInterval(timerInterval);

  answers.push({
    question: quizData[currentQuestionIndex].question,
    yourAnswer: selectedAnswer || "Not Answered",
    correctAnswer: quizData[currentQuestionIndex].correctAnswer,
  });

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
  clearInterval(timerInterval);

  questionCount.innerHTML = "";
  timer.innerHTML = "";
  questionText.innerHTML = "<h2 class='text-success'>Quiz Completed</h2>";
  optionContainer.innerHTML = "";

  let html = `
    <h3 class="text-center text-success mb-4">
      Total Score : ${totalScore}/${quizData.length}
    </h3>
  `;

  answers.forEach((item, index) => {
    html += `
      <div class="border rounded p-3 mb-3">
        <h5>Question ${index + 1}</h5>

        <p><strong>Question :</strong> ${item.question}</p>

        <p><strong>Your Answer :</strong> ${item.yourAnswer}</p>

        <p><strong>Correct Answer :</strong> ${item.correctAnswer}</p>
      </div>
    `;
  });

  result.innerHTML = html;
}
