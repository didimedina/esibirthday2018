// Variables
const quiz = document.getElementById("quiz");
const birthdayLetter = document.getElementById("birthday-letter");
const heading = document.getElementById("heading");
const input = document.getElementById('input-answer');
const submitBtn = document.getElementById('btn-submit');
let score = 0;
let currentQuestion = 0;
let submittedAnswer = "";

// Question objects...
const questions = [
    {
        question: "What was the resturuant we ate at after I landed in Israel for the first time?",
        correctAnswers: ["kafit", "קפית"]
    },

    {
        question: "What appointment did I cancle in budapest?",
        correctAnswers: ["haircut", "barber", "barber shop", "hair salon"]
    },

    {
        question: "How did we find our first apartment?",
        correctAnswers: ["yad2", "yad shtayim"]
    },
    
    {
        question: "As the old couple that we are, what is the most common activity we'd do outside the house?",
        correctAnswers: ["movies", "movie", "theaters"]
    },

    {
        question: "What did my Mom call you when I asked her what she thought of you the first time?",
        correctAnswers: ["lollipop", "lolipop", "candy on a stick"]
    }
];


function updateQuestion() {
    if (score < questions.length) {
        heading.innerHTML = questions[currentQuestion].question;
        input.placeholder = "Type your answer...";
        heading.style.color = "";
        input.value = "";
    } else {
        //show birthday letter. 
        quiz.style.display = "none";
        birthdayLetter.style.display = "flex";

        // heading.innerHTML = 'happy birthday!';
    };
};

updateQuestion(); 


// Validate answerw once submit button is clicked.
submitBtn.addEventListener('click', () => {
    // input.autofocus = true; trying to get the input to autofocus each time but its not working... 
    submittedAnswer = input.value.toLowerCase();
    if (questions[currentQuestion].correctAnswers.indexOf(submittedAnswer) > -1) {
        currentQuestion++;
        score++;
        updateQuestion();
    } else {
        heading.style.color = "red";
        input.value = "";
        input.placeholder = "Nope, try again!";
    };
});

