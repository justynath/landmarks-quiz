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
        question: "In what country is this building located?",
        answers: [
            { text: "Greece", correct: false},
            { text: "Italy", correct: true},
            { text: "United Kingdom", correct: false},
            { text: "Spain", correct: false},
        ],
        info: "Despite its unintended lean, the Leaning Tower of Pisa, situated in Italy, has become a globally recognized icon. Its tilt, resulting from unstable soil during construction, adds to its allure, drawing millions of visitors each year to marvel at this unique architectural wonder and its intriguing history.",
    },
    {
        image: "assets/images/machu-picchu.png",
        question: "In what country is this landmark located?",
        answers: [
            { text: "Mexico", correct: false},
            { text: "Thailand", correct: false},
            { text: "Peru", correct: true},
            { text: "Spain", correct: false},
        ],
        info: "Machu Picchu's location in Peru adds to its allure, with its purpose still debated by historians. It's a captivating archaeological site attracting millions of visitors annually.",
    },
    {
        image: "assets/images/niagara-falls.png",
        question: "What is this natural wonder called?",
        answers: [
            { text: "Victoria Falls", correct: false},
            { text: "Cliffs of Moher", correct: false},
            { text: "Iguazu Falls", correct: false},
            { text: "Niagara Falls", correct: true},
        ],
        info: 'The name "Niagara Falls" likely has its roots in the indigenous language of the Iroquois people, specifically the word "Onguiaahra," which translates to "the strait" or "thundering waters." This linguistic connection highlights the rich cultural heritage associated with this iconic natural wonder.',
    },
    {
        image: "assets/images/notre-dame.png",
        question: "What is this building called called?",
        answers: [
            { text: "Notre Dame Cathedral", correct: true},
            { text: "Westminster Abbey", correct: false},
            { text: "Saint Peter's Basilica", correct: false},
            { text: "Sacré-Cœur Basilica", correct: false},
        ],
        info: 'The name "Notre Dame" translates to "Our Lady" in French, typically referring to the Virgin Mary, the mother of Jesus. The term "Notre Dame" is commonly used to honor her in the Catholic faith and is often associated with churches and cathedrals dedicated to her.',
    },
    {
        image: "assets/images/statue-of-liberty.png",
        question: "What is the official name of this landmark?",
        answers: [
            { text: "Lady of Liberty", correct: false},
            { text: "Statue of Freedom", correct: false},
            { text: "Liberty Enlightening the World", correct: true},
            { text: "Statue of Independence", correct: false},
        ],
        info: "The Statue of Liberty's full name is Liberty Enlightening the World. This iconic statue was a gift from France to the United States and was dedicated on October 28, 1886. Designed by French sculptor Frédéric Auguste Bartholdi, the statue symbolizes freedom and democracy, and it has since become a universal symbol of liberty and democracy worldwide.",
    },
    {
        image: "assets/images/stonehenge.png",
        question: "In what country is this landmark located?",
        answers: [
            { text: "England", correct: true},
            { text: "Scotland", correct: false},
            { text: "Wales", correct: false},
            { text: "Ireland", correct: false},
        ],
        info: "Stonehenge, located in England, is one of the most famous prehistoric monuments in the world. Despite its fame and recognition, the purpose of Stonehenge remains a subject of debate among archaeologists and historians.",
    },
    {
        image: "assets/images/sydney-opera-house.png",
        question: "Where is this landmark located?",
        answers: [
            { text: "San Francisco", correct: false},
            { text: "Sydney", correct: true},
            { text: "Los Angeles", correct: false},
            { text: "Melburne", correct: false},
        ],
        info: "Sydney Opera House is in Sydney, Australia. Its renowned sail-like design was inspired by the natural shape of orange segments. Designed by Danish architect Jørn Utzon, this iconic structure stands as a testament to innovative architectural vision and has become a symbol of artistic excellence and cultural significance not only in Australia but worldwide.",
    },
    {
        image: "assets/images/taj-mahal.png",
        question: "In what country is this landmark located?",
        answers: [
            { text: "Thailand", correct: false},
            { text: "Japan", correct: false},
            { text: "India", correct: true},
            { text: "China", correct: false},
        ],
        info: "Taj Mahal in India was built by Emperor Shah Jahan in the 17th century in memory of his wife, Mumtaz Mahal. This architectural marvel, crafted from white marble, stands as a symbol of love and artistic brilliance in the city of Agra, drawing visitors from across the globe to witness its beauty and history.",
    },
    {
        image: "assets/images/the-acropolis.png",
        question: "Where is this landmark located?",
        answers: [
            { text: "Istanbul", correct: false},
            { text: "Rome", correct: false},
            { text: "Cairo", correct: false},
            { text: "Athens", correct: true},
        ],
        info: "Acropolis in Athens served not only as a religious center but also as a symbol of democracy and the flourishing of arts and sciences in ancient Greece. It stands as a testament to the cultural and intellectual achievements of the Athenian civilization, influencing Western architecture and philosophy for centuries to come.",
    },
    {
        image: "assets/images/the-grand-canyon.png",
        question: "In what state in the USA is this nature wonder located?",
        answers: [
            { text: "Utah", correct: false},
            { text: "Nevada", correct: false},
            { text: "California", correct: false},
            { text: "Arizona", correct: true},
        ],
        info: "Grand Canyon in Arizona is home to a rich variety of plant and animal life, including several species found nowhere else on Earth. From elusive mountain lions and bighorn sheep to ancient bristlecone pines and delicate wildflowers, the Grand Canyon is a biodiversity hotspot, offering endless opportunities for exploration and discovery.",
    },
    {
        image: "assets/images/the-great-sphinx.png",
        question: "What mythical creature is the landmark believed to represent?",
        answers: [
            { text: "Griffin", correct: false},
            { text: "Chimera", correct: false},
            { text: "Sphinx", correct: true},
            { text: "Manticore", correct: false},
        ],
        info: "Sphinx, represented by the Great Sphinx of Giza, combines elements of both human and animal features. While the body of the Great Sphinx resembles that of a lion, symbolizing strength and power, its face is believed to bear the likeness of Pharaoh Khafre, blending human and divine attributes.",
    },
    {
        image: "assets/images/the-little-mermaid.png",
        question: "In what country is this statue located?",
        answers: [
            { text: "Denmark", correct: true},
            { text: "Germany", correct: false},
            { text: "Sweden", correct: false},
            { text: "Poland", correct: false},
        ],
        info: "The Little Mermaid in Denmark was inspired by the famous fairy tale of the same name written by Danish author Hans Christian Andersen. Erected in 1913, the statue has become an iconic symbol of Copenhagen and a popular tourist attraction.",
    },
    {
        image: "assets/images/the-louvre.png",
        question: "What famous painting, housed in this museum, is known for its enigmatic smile?",
        answers: [
            { text: "The Starry Night", correct: false},
            { text: "The Mona Lisa", correct: true},
            { text: "The Persistence of Memory", correct: false},
            { text: "The Creation of Adam", correct: false},
        ],
        info: "Mona Lisa, located in the Louvre, is one of the most famous and valuable paintings in the world, attracting millions of visitors to the museum each year. This iconic painting, created by Leonardo da Vinci in the 16th century, continues to fascinate art enthusiasts with its enigmatic smile and captivating gaze.",
    },
    {
        image: "assets/images/the-pantheon.png",
        question: "Where is this landmark located?",
        answers: [
            { text: "Rome", correct: true},
            { text: "Athens", correct: false},
            { text: "Spain", correct: false},
            { text: "France", correct: false},
        ],
        info: "Pantheon in Rome is one of the best-preserved ancient Roman buildings. Originally built as a temple dedicated to all the gods of ancient Rome, its dome is still the world's largest unreinforced concrete dome.",
    },
    {
        image: "assets/images/tower-bridge.png",
        question: "Where is this landmark located?",
        answers: [
            { text: "Paris", correct: false},
            { text: "Berlin", correct: false},
            { text: "London", correct: true},
            { text: "Amsterdam", correct: false},
        ],
        info: "Tower Bridge in London is not only an iconic symbol of the city but also a marvel of Victorian engineering. When it was completed in 1894, it was the largest and most sophisticated bascule bridge in the world. Its unique design allows it to open in the middle to let large ships pass through, while still providing a vital transportation link across the River Thames for pedestrians and vehicles.",
    },
    {
        image: "assets/images/washington-monument.png",
        question: "Where is this landmark located?",
        answers: [
            { text: "Mexico", correct: false},
            { text: "Canada", correct: false},
            { text: "Brazil", correct: false},
            { text: "Unites States", correct: true},
        ],
        info: "Washington Monument in Wahsington DC. in the United States stands as a tribute to the nation's first president, George Washington. Construction began in 1848 and was completed in 1884, making it one of the oldest monuments in the country.",
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
let randomQuestions = [];

/**
 * Show the welcome page
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

/** Randomly select a question from the array
 */
function getRandomQuestions(allQuestions, numQuestions = 5) {
    // Make a copy of the original allQuestions array to avoid modifying it
    let remainingQuestions = allQuestions.slice();
    let randomQuestions = [];
    // Check if the number of allQuestions requested is greater than the number of available allQuestions
    if (numQuestions > remainingQuestions.length) {
        return remainingQuestions;
    }
    // Iterate until the desired number of allQuestions is reached
    for (let i = 0; i < numQuestions; i++) {
        // Generate a random index within the range of remaining allQuestions
        let randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        // Add the randomly selected question to the result array
        randomQuestions.push(remainingQuestions[randomIndex]);
        // Remove the selected question from the list of remaining allQuestions
        remainingQuestions.splice(randomIndex, 1);
    }
    return randomQuestions;
}

/**
 * Start the quiz
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
    setCurrentQuestions()
    displayQuestion();
}

function setCurrentQuestions() {
    randomQuestions = getRandomQuestions(questions, 7)
}

/** Display a question: 
 * clear the previous question, 
 * display the image, 
 * display question text with question number, 
 * show four answer options
 */
function displayQuestion() {
    clearPrevious();
    let currentQuestion = randomQuestions[currentQuestionIndex];
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
 * Clear the previous question
 */
function clearPrevious() {
    nextButton.style.display = "none";
    while(answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

/** 
 * Identify correct answer and respond accordingly
 */
function chooseAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    // Create an element to display an interesting fact linked to the question
    let fact = document.createElement("p");
    fact.classList.add('fact');
    answerOptions.appendChild(fact);
    let currentQuestion = randomQuestions[currentQuestionIndex];
    // Change the colour of the button if corect/incorrect to green/red. Add interesting fact about the landmark
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
 * Give feedback based on final score
 */
function giveFeedback() {
    let scorePercentage = Math.floor((score / (randomQuestions.length + 1)) * 100);
    let feedback = document.createElement('h3');
    questionElement.appendChild(feedback);
    feedback.classList.add('feedback-message');

    if (scorePercentage >= 50) {
        feedback.innerHTML = 'Impressive knowledge on landmarks around the world! <br> For new set of 7 randomly selected questions play again';
        feedback.style.color = "darkgreen";
        frame.classList.add('correct-color');
    } else {
        feedback.innerHTML = 'Good try! <br> To learn more about the landmaks around the world play again for new set of randomly selected questions';
        feedback.style.color = "darkred";
        frame.classList.add('incorrect-color');
    }
}

/** 
 * Display final score
*/
function displayScore() {
    clearPrevious();
    questionElement.innerHTML = `Your score is ${score} out of ${randomQuestions.length}`;
    imageElement.innerHTML = "";
    giveFeedback();
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

/**
 * Define how the Next button work
 */
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < randomQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
        nextButton.removeEventListener('click', handleNextButton);
        nextButton.addEventListener('click', startQuiz);
        
    }
}

welcome();
