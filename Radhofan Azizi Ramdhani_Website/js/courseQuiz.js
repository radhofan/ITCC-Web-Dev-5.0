
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hypertext Markup Language",
            b: "Hightext Machine Language",
            c: "Hyperlink and Text Markup Language",
            d: "Hypertext Marking Language"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        answers: {
            a: "head",
            b: "title",
            c: "meta",
            d: "header"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: {
            a: "break",
            b: "lb",
            c: "br",
            d: "breakline"
        },
        correctAnswer: "c"
    }
];



let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultsContainer = document.getElementById("results");
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");


function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const answers = [];

    for (const letter in currentQuestion.answers) {
        answers.push(
            `<label class="radio-label">
                <input type="radio" name="answer" value="${letter}">
                <span class="custom-radio"></span> ${letter}: ${currentQuestion.answers[letter]}
             </label><br>`
        );
    }

    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>
    `;


    updateProgress();
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        alert("Please select an answer before proceeding.");
        return;
    }


    if (selectedAnswer.value === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
    }


    currentQuestionIndex++;


    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextButton.style.display = "none"; 
        submitButton.style.display = "inline-block"; 
    }


    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    }
}



function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;


    progressBar.style.width = `${progress}%`;


    questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
}


function showResults() {
    quizContainer.innerHTML = ""; 
    resultsContainer.innerHTML = `You got ${score} out of ${quizQuestions.length} correct!`;
    submitButton.style.display = "none"; 
    const continueButton = document.createElement('button'); 
    continueButton.id = 'continue-btn'; 
    continueButton.className = 'continue-btn'; 
    continueButton.textContent = 'Go to Next Page'; 
    continueButton.onclick = function() {
        window.location.href = "courseSite.html"; 
    };
    resultsContainer.appendChild(continueButton); 
}


showQuestion();


nextButton.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", showResults);
