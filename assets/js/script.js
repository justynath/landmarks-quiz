const questions = [
    {
        image: "assets/images/big-ben.png",
        question: "Where is this building located?",
        answers: [
            { text: "Berlin", correct: false},
            { text: "Manchester", correct: false},
            { text: "London", correct: true},
            { text: "Amsterdam", correct: false},
        ]
    },
    {
        image: "assets/images/brandenburg-gate.png",
        question: "What is the name of this structure?",
        answers: [
            { text: "Arc de Triomphe", correct: false},
            { text: "Marble Arch", correct: false},
            { text: "Golden Gate", correct: false},
            { text: "Brandenburg Gate", correct: true},
        ]
    },
    {
        image: "assets/images/colosseum.png",
        question: "Where is this building located?",
        answers: [
            { text: "Athens", correct: false},
            { text: "Rome", correct: true},
            { text: "Paris", correct: false},
            { text: "London", correct: false},
        ]
    },
    {
        image: "assets/images/dome-of-the-rock.png",
        question: "In what country is this building located?",
        answers: [
            { text: "Israel", correct: false},
            { text: "Greece", correct: false},
            { text: "Jerusalem", correct: true},
            { text: "Turkey", correct: false},
        ]
    },
    {
        image: "assets/images/egyptian-pyramids.png",
        question: "Which pharaoh is commonly associated with the Great Pyramid of Giza?",
        answers: [
            { text: "Ramses II", correct: false},
            { text: "Tutankhamun", correct: false},
            { text: "Khufu", correct: true},
            { text: "Hatshepsut", correct: false},
        ]
    },
    {
        image: "assets/images/eiffel-tower.png",
        question: "In what year was the Eiffel Tower completed and opened to the public?",
        answers: [
            { text: "1819", correct: false},
            { text: "1909", correct: false},
            { text: "1889", correct: true},
            { text: "1959", correct: false},
        ]
    },
    {
        image: "assets/images/empire-state-building.png",
        question: "Where is this building located?",
        answers: [
            { text: "New York", correct: true},
            { text: "Toronto", correct: false},
            { text: "Berlin", correct: false},
            { text: "Hong Kong", correct: false},
        ]
    },
    {
        image: "assets/images/golden-gate-bridge.png",
        question: "In what country is this bridge located?",
        answers: [
            { text: "United States", correct: true},
            { text: "China", correct: false},
            { text: "Canada", correct: false},
            { text: "France", correct: false},
        ]
    },
    {
        image: "assets/images/great-wall-of-china.png",
        question: "How long is this building?",
        answers: [
            { text: "20,340 kilometers", correct: false},
            { text: "21,196 kilometers", correct: true},
            { text: "8,009 kilometers", correct: false},
            { text: "15,996 kilometers", correct: false},
        ]
    },
    {
        image: "assets/images/leaning-tower-of-pisa.png",
        question: "In wahat country is this building located?",
        answers: [
            { text: "Greece", correct: false},
            { text: "Italy", correct: true},
            { text: "United Kingdom", correct: false},
            { text: "Spain", correct: false},
        ]
    },
];

const imageElement = document.getElementById("landmark-image");
const questionElement = document.getElementById("question");
const answerOptions = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

/**
 * Function to start the quiz
 */

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
}

/**
 * Function to display a question: 
 * clear the previous question, 
 * display question text with question number, 
 * show four answer options
 */

function displayQuestion() {
    clearPrevious();

    let currentQuestion = questions[currentQuestionIndex];
    imageElement.innerHTML = `<img src="${currentQuestion.image}">`;
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const newButton = document.createElement("button");
        newButton.innerHTML = answer.text;
        newButton.classList.add("button");
        answerOptions.appendChild(newButton);
        if(answer.correct){
            newButton.dataset.correct = answer.correct;
        }
        newButton.addEventListener('click', chooseAnswer);
    });
}

/**
 * Function to clear the previous question
 */
function clearPrevious() {
    nextButton.style.display = "none";
    while(answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function chooseAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    // Changing the coulour of the button if corect/intorrect to green/blue
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerOptions.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function displayScore() {
    clearPrevious();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    imageElement.innerHTML = "";
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

/**
 * Function to define how the Next button work
 */
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();