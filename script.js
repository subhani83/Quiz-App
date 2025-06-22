const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyper Transfer Markup Language",
    correct: "a"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const answerBtns = document.querySelectorAll('.answer-btn');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  resetState();
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  answerBtns.forEach((btn, index) => {
    btn.textContent = current[String.fromCharCode(97 + index)];
    btn.onclick = () => checkAnswer(btn.dataset.choice);
  });
}

function checkAnswer(answer) {
  const correct = quizData[currentQuestion].correct;
  if (answer === correct) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer is ${correct.toUpperCase()}`;
  }
  scoreEl.textContent = `Score: ${score}`;
  answerBtns.forEach(btn => btn.disabled = true);
}

function resetState() {
  feedbackEl.textContent = '';
  answerBtns.forEach(btn => btn.disabled = false);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    document.querySelector('ul').style.display = "none";
    nextBtn.style.display = "none";
    feedbackEl.textContent = `Your final score is ${score}/${quizData.length}`;
  }
};

loadQuestion();
