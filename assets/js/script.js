let bigBen = new Image();
bigBen.src = "assets/images/big-ben.png";

const questions = [
    {
        image: bigBen,
        guestion: "Where can you find this building?",
        answers: [
            { text: "Berlin", correct: false},
            { text: "Manchester", correct: false},
            { text: "London", correct: true},
            { text: "Amsterdam", correct: false},
        ]
    },
    {
        image: "assets/images/brandenburg-gate.png",
        guestion: "What is the name of this structure?",
        answers: [
            { text: "Arc de Triomphe", correct: false},
            { text: "Marble Arch", correct: false},
            { text: "Golden Gate", correct: false},
            { text: "Brandenburg Gate", correct: true},
        ]
    },
    {
        image: "assets/images/colosseum.png",
        guestion: "Where can you find this building?",
        answers: [
            { text: "Athens", correct: false},
            { text: "Rome", correct: true},
            { text: "Paris", correct: false},
            { text: "London", correct: false},
        ]
    },
    {
        image: "assets/images/dome-of-the-rock.png",
        guestion: "Where can you find this building?",
        answers: [
            { text: "Israel", correct: false},
            { text: "Greece", correct: true},
            { text: "Jerusalem", correct: false},
            { text: "Turkey", correct: false},
        ]
    },
    {
        image: "assets/images/egyptian-pyramids.png",
        guestion: "Which pharaoh is commonly associated with the Great Pyramid of Giza?",
        answers: [
            { text: "Ramses II", correct: false},
            { text: "Tutankhamun", correct: false},
            { text: "Khufu", correct: true},
            { text: "Hatshepsut", correct: false},
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

    let currentImage = image[currentQuestionIndex];
    imageElement.innerHTML = currentImage.image;

    let currentQuestion = question[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const newButton = document.createElement("newButton")
        newButton.innerHTML = answer.text;
        newButton.classList.add("button");
        answerOptions.appendChild(newButton); 
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

startQuiz();