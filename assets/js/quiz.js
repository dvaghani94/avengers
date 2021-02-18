var startBtn = document.querySelector(".btn-start");
var quiz = document.querySelector("#quiz-section");
var quizStarter = document.querySelector(".container");

var triviaQuestions = [ {
    question: "Who does Hulk call 'puny god' while throwing them around like a rag doll?",
    options: [
        {option: "Thor", answer: false},
        {option: "Loki", answer: true},
        {option: "Captian America", answer: false},
        {option: "Iron Man", answer: false},
    ],
},
{
    question: "With what is Loki able to control minds?",
    options: [
        {option: "Sceptre", answer: true},
        {option: "Mjolnir", answer: false},
        {option: "Stick", answer: false},
        {option: "Shield", answer: false},
    ],
},
{
    question: "Where was Captain America at the start of the movie?",
    options: [
        {option: "Hospital", answer: false},
        {option: "Aircraft", answer: false},
        {option: "Gym", answer: true},
        {option: "Home", answer: false},
    ],
},
{
    question: "What does Captain America bring to the fight?",
    options: [
        {option: "His shield", answer: true},
        {option: "Mjolnir", answer: false},
        {option: "Sword", answer: false},
        {option: "Bow & Arrow", answer: false},
    ],
},
{
    question: "What is the name of Thor's hammer?", 
    options: [
        {option: "Jupiter", answer: false},
        {option: "Hammer", answer: false},
        {option: "Smasher", answer: false},
        {option: "Mjolnir", answer: true},
    ],
},
{
    question: "Who was the first Avenger?",
    options: [
        {option: "Thor", answer: false},
        {option: "Loki", answer: false},
        {option: "Captian America", answer: true},
        {option: "Iron Man", answer: false},
    ],
},
{
    question: "Who attacked New York?",
    options: [
        {option: "Thanos", answer: false},
        {option: "Loki", answer: false},
        {option: "Asgardians", answer: false},
        {option: "Chitauri", answer: true},
    ],
},
{
    question: "Who was mind controlled by Loki?",
    options: [
        {option: "Steve Rogers", answer: false},
        {option: "Black Widow", answer: false},
        {option: "Hawkeye", answer: true},
        {option: "Nick Fury", answer: false},
    ],
},
{
    question: "What is Black Widows name?",
    options: [
        {option: "Pepper Potts", answer: false},
        {option: "Natasha Romanoff", answer: true},
        {option: "Nebula", answer: false},
        {option: "Jane Foster", answer: false},
    ],
},
{
    question: "Who is the executive director of S.H.I.E.L.D?", 
    options: [
        {option: "Nick Fury", answer: true},
        {option: "Clint Barton", answer: false},
        {option: "Bruce Banner", answer: false},
        {option: "Erik Selvig", answer: false},
    ],
},
{
    question: "How many Avengers are there?", 
    options: [
        {option: "9", answer: false},
        {option: "6", answer: true},
        {option: "4", answer: false},
        {option: "7", answer: false},
    ],
},
{
    question: "What is Hawkeye's speciality?",
    options: [
        {option: "Swords", answer: false},
        {option: "Nunchucks", answer: false},
        {option: "Boomerang", answer: false},
        {option: "Bow & Arrow", answer: true},
    ],
},
{
    question: "Where does Natasha find Bruce?",
    options: [
        {option: "China", answer: false},
        {option: "London", answer: false},
        {option: "India", answer: true},
        {option: "Mexico", answer: false},
    ],
},
{
    question: "What is Tony Starks superpower?",
    options: [
        {option: "Iron Man", answer: true},
        {option: "Super strength", answer: false},
        {option: "Super speed", answer: false},
        {option: "Flying", answer: false},
    ],
},
{
    question: "Whose death resulted in a turning point for the team?",
    options: [
        {option: "Pepper Potts", answer: false},
        {option: "Phil Coulson", answer: true},
        {option: "Nebula", answer: false},
        {option: "Jane Foster", answer: false},
    ],
}
];

startBtn.addEventListener("click", startQuiz);

var quizQuestions = document.querySelector("#question-text");
var answerChoice = document.querySelector("#buttons-group");


function startQuiz() {
    console.log(startBtn);
   startBtn.classList.add("hide");
   quizStarter.classList.add("hide");
   randomQuestions = triviaQuestions.sort()
   currentQuestion = 0;
   quiz.classList.remove("hide");
   setNext()
}

var nextBtn = document.querySelector(".btn-next")
nextBtn.addEventListener("click", () => {
    currentQuestion++
    setNext()
})

function setNext() {
    questionList(randomQuestions[currentQuestion]);
}

function questionList(question) {
    quizQuestions.innerText = question.question;
    if (quizQuestions = "") {
        showScore()
    }

    answerChoice.innerHTML = "";

    question.options.forEach(option => {

        console.log(option.option);
        console.log(option.answer);

        var optionBtn = document.createElement("button");
        optionBtn.innerText = option.option;
        optionBtn.classList.add("btn");
        if (option.answer) {
            optionBtn.dataset.answer = option.answer;
        }
        optionBtn.addEventListener("click", checkAnswer);
        answerChoice.appendChild(optionBtn)

    })
}

function checkAnswer(e) {
    var userChoice = e.target
    var correctAnswer = userChoice.dataset.answer;
    setCorrectAnswer(document.body, correctAnswer);
    Array.from(answerChoice.children).forEach(button => {
        setCorrectAnswer(button, button.dataset.answer)
    })
    if(randomQuestions.length > currentQuestion + 1) {
        nextBtn.classList.remove("hide");
    } 
    else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide")
    }
}

function setCorrectAnswer(element, correctAnswer) {
    clearChoice(element);
    if (correctAnswer) {
        element.classList.add("true");
    }
    else {
        element.classList.add("false");
    }
}

function clearChoice(element) {
    element.classList.remove("true");
    element.classList.remove("false");
}

var userScore = 0;

function showScore() {
    if (document.getElementById("score").innerHTML === correctAmswer) userScore++;
}
