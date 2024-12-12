// Questions for each set
const quizSets = [
  [
    { question: "What is phishing?", answers: ["A type of scam", "A sport", "A cooking method", "A programming language"], correct: 0 },
    { question: "How to set a strong password?", answers: ["12345", "password", "Use symbols and numbers", "Your name"], correct: 2 },
    { question: "What is cyberbullying?", answers: ["Online harassment", "A new game", "A hacking tool", "Social networking"], correct: 0 },
    // Add 7 more questions...
  ],
  [
    { question: "What is malware?", answers: ["Malicious software", "A browser", "A security tool", "An operating system"], correct: 0 },
    { question: "How can you identify fake news?", answers: ["Check the source", "Believe everything", "Ignore it", "Share without reading"], correct: 0 },
    { question: "What is two-factor authentication?", answers: ["Extra security step", "A programming term", "An app", "A website"], correct: 0 },
    // Add 7 more questions...
  ],
  [
    { question: "What should you do if you're being cyberbullied?", answers: ["Ignore it", "Report and block", "Fight back", "Quit social media"], correct: 1 },
    { question: "What is personal information?", answers: ["Your favorite color", "Your password", "Public posts", "None"], correct: 1 },
    { question: "What is the purpose of a firewall?", answers: ["Protect devices", "Heat computers", "Boost performance", "Create viruses"], correct: 0 },
    // Add 7 more questions...
  ],
];

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

function startQuiz(setNumber) {
  currentQuiz = quizSets[setNumber - 1];
  currentQuestion = 0;
  score = 0;

  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";

  showQuestion();
}

function showQuestion() {
  const questionData = currentQuiz[currentQuestion];
  document.getElementById("question").textContent = questionData.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  questionData.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (selected === currentQuiz[currentQuestion].correct) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  const resultText = `You scored ${score}/${currentQuiz.length}. ${score >= 6 ? "You passed!" : "Try again."}`;
  document.getElementById("result").textContent = resultText;

  if (score >= 6) {
    document.getElementById("certificate-link").style.display = "inline";
  }
}

function restartQuiz() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}
