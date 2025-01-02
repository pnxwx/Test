document.addEventListener("DOMContentLoaded", function () {
    console.log("สวัสดี! ไฟล์ JavaScript ทำงานแล้ว 🎉");
});
let lessonsCompleted = false; // เปลี่ยนเป็น true เมื่อเรียนบทเรียนเสร็จ
let currentQuestion = 0;
let score = 0;

const quizData = [
    {
        question: "ข้อที่ 1: ...",
        options: ["ตัวเลือก 1", "ตัวเลือก 2", "ตัวเลือก 3", "ตัวเลือก 4"],
        answer: 0
    },
    // เพิ่มคำถามอีก 9 ข้อตามนี้
];

function checkLessonsCompleted() {
    if (lessonsCompleted) {
        document.getElementById("status").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        loadQuestion();
    }
}

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        const questionData = quizData[currentQuestion];
        document.getElementById("question-number").textContent = currentQuestion + 1;
        document.getElementById("question-text").textContent = questionData.question;

        const answers = document.getElementById("answers").children;
        for (let i = 0; i < answers.length; i++) {
            answers[i].children[0].textContent = questionData.options[i];
        }
    } else {
        finishQuiz();
    }
}

function checkAnswer(selected) {
    if (quizData[currentQuestion].answer === selected) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("next-btn").style.display = "none";
    loadQuestion();
}

function finishQuiz() {
    document.getElementById("quiz-container").style.display = "none";

    if (score >= 6) {
        document.getElementById("certificate").style.display = "block";
    } else {
        alert("คุณไม่ผ่านแบบทดสอบ");
    }
}

// ตรวจสอบว่าผู้เรียนเรียนบทเรียนเสร็จหรือยัง
checkLessonsCompleted();
