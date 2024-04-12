const questions = [
    {
        image: "assets/images/big-ben.png",
        question: "Where is this building located?",
        answers: [
            { text: "Berlin", correct: false},
            { text: "Manchester", correct: false},
            { text: "London", correct: true},
            { text: "Amsterdam", correct: false},
        ],
        info: "Big Ben stands at the north end of the Palace of Westminster in London, England. This iconic clock tower is situated right next to the River Thames, providing not only a picturesque backdrop but also a strategic location for its construction.",
    },
    {
        image: "assets/images/brandenburg-gate.png",
        question: "What is the name of this structure?",
        answers: [
            { text: "Arc de Triomphe", correct: false},
            { text: "Marble Arch", correct: false},
            { text: "Golden Gate", correct: false},
            { text: "Brandenburg Gate", correct: true},
        ],
        info: "During the Cold War era, when Berlin was divided into East and West, the Brandenburg Gate stood as a prominent symbol of the division between the two sides of the city. However, following the fall of the Berlin Wall in 1989, the Brandenburg Gate became a symbol of the reunification of Germany and Europe, signifying hope, peace, and freedom.",
    },
    {
        image: "assets/images/colosseum.png",
        question: "Where is this building located?",
        answers: [
            { text: "Athens", correct: false},
            { text: "Rome", correct: true},
            { text: "Paris", correct: false},
            { text: "London", correct: false},
        ],
        info: "Colosseum was strategically situated in the heart of ancient Rome, near the Roman Forum and the Capitoline Hill. This central location made it easily accessible to the citizens of Rome, allowing tens of thousands of spectators to attend events held at the amphitheater.",
    },
    {
        image: "assets/images/dome-of-the-rock.png",
        question: "In what country is this building located?",
        answers: [
            { text: "Israel", correct: false},
            { text: "Greece", correct: false},
            { text: "Jerusalem", correct: true},
            { text: "Turkey", correct: false},
        ],
        info: "The Dome of the Rock sits atop the Temple Mount in Jerusalem, marking the believed location of the First and Second Temples. This makes it a highly significant site for Jews, Muslims, and Christians.",
    },
    {
        image: "assets/images/egyptian-pyramids.png",
        question: "Which pharaoh is commonly associated with the Great Pyramid of Giza?",
        answers: [
            { text: "Ramses II", correct: false},
            { text: "Tutankhamun", correct: false},
            { text: "Khufu", correct: true},
            { text: "Hatshepsut", correct: false},
        ],
        info: "Khufu, also known as Cheops, oversaw the construction of the Great Pyramid of Giza around 4,500 years ago. It remained the world's tallest man-made structure for over 3,800 years. Its precise alignment with the cardinal points of the compass is a testament to ancient Egyptian engineering ingenuity.",
    },
    {
        image: "assets/images/eiffel-tower.png",
        question: "In what year was the Eiffel Tower completed and opened to the public?",
        answers: [
            { text: "1819", correct: false},
            { text: "1909", correct: false},
            { text: "1889", correct: true},
            { text: "1959", correct: false},
        ],
        info: "Eiffel Tower, completed in 1889, was constructed as the entrance arch for the 1889 World's Fair (Exposition Universelle) held in Paris, France. Designed by Gustave Eiffel's company as a temporary structure, the tower's iconic design and structural innovation quickly captured the world's imagination, leading to its preservation as a permanent landmark.",
    },
    {
        image: "assets/images/empire-state-building.png",
        question: "Where is this building located?",
        answers: [
            { text: "New York", correct: true},
            { text: "Toronto", correct: false},
            { text: "Berlin", correct: false},
            { text: "Hong Kong", correct: false},
        ],
        info: "The Empire State Building was strategically located in Midtown Manhattan, New York City, at the intersection of Fifth Avenue and West 34th Street, making it easily accessible and ensuring its prominence in the city's skyline.",
    },
    {
        image: "assets/images/golden-gate-bridge.png",
        question: "In what country is this bridge located?",
        answers: [
            { text: "United States", correct: true},
            { text: "China", correct: false},
            { text: "Canada", correct: false},
            { text: "France", correct: false},
        ],
        info: "Golden Gate Bridge, located in the United States, was once the longest suspension bridge in the world when it was completed in 1937, with a main span of 4,200 feet (1,280 meters). This iconic bridge, situated in San Francisco, California, has since become a symbol of American engineering prowess and a renowned landmark recognized worldwide.",
    },
    {
        image: "assets/images/great-wall-of-china.png",
        question: "How long is this building?",
        answers: [
            { text: "20,340 kilometers", correct: false},
            { text: "21,196 kilometers", correct: true},
            { text: "8,009 kilometers", correct: false},
            { text: "15,996 kilometers", correct: false},
        ],
        info: "The Great Wall of China's total length, including all its branches and sections, is estimated to be around 13,170 miles (21,196 kilometers). This extensive structure, constructed over centuries by various Chinese dynasties, stands as one of the most impressive architectural achievements in human history.",
    },
    {
        image: "assets/images/leaning-tower-of-pisa.png",
        question: "In wahat country is this building located?",
        answers: [
            { text: "Greece", correct: false},
            { text: "Italy", correct: true},
            { text: "United Kingdom", correct: false},
            { text: "Spain", correct: false},
        ],
        info: "Despite its unintended lean, the Leaning Tower of Pisa, situated in Italy, has become a globally recognized icon. Its tilt, resulting from unstable soil during construction, adds to its allure, drawing millions of visitors each year to marvel at this unique architectural wonder and its intriguing history.",
    },
];

const imageElement = document.getElementById("landmark-image");
const questionElement = document.getElementById("question");
const answerOptions = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");
const frame = document.getElementsByClassName("frame")[0];
const quizElement = document.getElementsByClassName("quiz")[0];

let currentQuestionIndex = 0;
let score = 0;

/**
 * Showing the welcome page
 */
function welcome() {
    clearPrevious();
    let welcomeMessage = document.getElementById('question');
    welcomeMessage.innerHTML = 'Test your knowlegde on landmarks around the world';
    imageElement.innerHTML = "";
    nextButton.style.display = "block";
    nextButton.innerHTML = 'Start Quiz';
    nextButton.addEventListener('click', startQuiz);
}

/**
 * Function to start the quiz
 */

function startQuiz() {
    // Resets the colour of the background
    if (frame.classList.contains("correct-color")) {
        frame.classList.remove('correct-color');
    } else {
        frame.classList.remove('incorrect-color');
    };
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    nextButton.removeEventListener('click', startQuiz);
    nextButton.addEventListener('click', handleNextButton);
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
    //quizElement.removeChild('feedback');
    while(answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function chooseAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    // Creating and element to display an interesting fact linked to the question
    let fact = document.createElement("p");
    fact.classList.add('fact');
    answerOptions.appendChild(fact);
    let currentQuestion = questions[currentQuestionIndex];
    // Changing the colour of the button if corect/incorrect to green/red. Adding interesting fact about the landmark
    if (isCorrect) {
        selectedButton.classList.add('correct-color');
        fact.classList.add('correct-color');
        fact.innerHTML = 'Correct!' + '<br>' + currentQuestion.info;
        score++;
    } else {
        selectedButton.classList.add('incorrect-color');
        fact.classList.add('incorrect-color');
        fact.innerHTML = 'Incorrect!' + '<br>' + currentQuestion.info;
    }
    Array.from(answerOptions.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct-color');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/**
 * Function to give feedback based on final score
 */
function giveFeedback() {
    let scorePercentage = Math.floor((score / (questions.length + 1)) * 100);
    let feedback = document.createElement('h3');
    questionElement.appendChild(feedback);
    feedback.classList.add('feedback-message');

    if (scorePercentage >= 50) {
        feedback.innerHTML = 'Impressive knowledge on landmarks around the world! <br> For more practice play again';
        feedback.style.color = "darkgreen";
        frame.classList.add('correct-color');
    } else {
        feedback.innerHTML = 'Good try! <br> To learn more about the landmaks around the world play again';
        feedback.style.color = "darkred";
        frame.classList.add('incorrect-color');
    }
}

/** 
 * Function to display final score
*/
function displayScore() {
    clearPrevious();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    imageElement.innerHTML = "";
    giveFeedback();
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
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
        nextButton.removeEventListener('click', handleNextButton);
        nextButton.addEventListener('click', startQuiz);
        
    }
}

welcome();
