const quiz = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "None"
        ],
        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "Python",
            "Java"
        ],
        answer: 1
    },

    {
        question: "Which language adds interactivity to websites?",
        options: [
            "C++",
            "JavaScript",
            "Python",
            "Java"
        ],
        answer: 1
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },

    {
        question: "Which CSS property controls text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        answer: 2
    },

    {
        question: "Which HTML tag is used for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "#",
            "<!-- -->",
            "**"
        ],
        answer: 0
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        answer: 2
    },

    {
        question: "Which HTML element is used to insert an image?",
        options: [
            "<image>",
            "<img>",
            "<pic>",
            "<src>"
        ],
        answer: 1
    },

    {
        question: "Which CSS property is used to change background color?",
        options: [
            "bgcolor",
            "background-color",
            "color",
            "background-style"
        ],
        answer: 1
    }

];

let current = 0;
let score = 0;
let selected = null;

let time = 30;
let timer;

/* Load Question */

function loadQuestion() {

    selected = null;

    /* Reset Timer */

    time = 30;
    document.getElementById("timer").innerText = time;

    clearInterval(timer);

    timer = setInterval(() => {

        time--;

        document.getElementById("timer").innerText = time;

        if (time <= 0) {
            clearInterval(timer);
            nextQuestion();
        }

    }, 1000);

    /* Load Question */

    document.getElementById("question").innerText =
        quiz[current].question;

    /* Load Options */

    for (let i = 0; i < 4; i++) {

        let btn = document.getElementById("opt" + i);

        btn.innerText = quiz[current].options[i];

        btn.classList.remove("bg-blue-500", "text-white");

    }

    /* Update Question Counter */

    document.getElementById("currentQuestion").innerText =
        current + 1;

    document.getElementById("totalQuestions").innerText =
        quiz.length;

    /* Update Progress Bar */

    let progress = ((current + 1) / quiz.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

}

/* Select Answer */

function selectAnswer(option) {

    selected = option;

    /* Remove highlight from all */

    for (let i = 0; i < 4; i++) {

        document.getElementById("opt" + i)
            .classList.remove("bg-blue-500", "text-white");

    }

    /* Highlight selected */

    document.getElementById("opt" + option)
        .classList.add("bg-blue-500", "text-white");

}

/* Next Question */

function nextQuestion() {

    clearInterval(timer);

    if (selected === quiz[current].answer) {
        score++;
    }

    current++;

    if (current < quiz.length) {

        loadQuestion();

    }
    else {

        localStorage.setItem("score", score);

        window.location.href = "result.html";

    }

}

/* Enter key support */

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        nextQuestion();
    }

});

/* Start quiz */

loadQuestion();