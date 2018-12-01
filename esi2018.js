// Variables
const heading = document.getElementById("heading");
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
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
    }
];

function updateQuestion() {
    heading.innerHTML = questions[currentQuestion].question;
    input.placeholder = "Type your answer...";
    heading.style.color = "";
    input.value = "";
};

//Placing the first question staticly...
updateQuestion();


// Validating answers once submitted. 
submitBtn.addEventListener('click', () => {
    submittedAnswer = input.value.toLowerCase();
    //submittedAnswer = submittedAnswer.toLowerCase();
    if (questions[currentQuestion].correctAnswers.indexOf(submittedAnswer) > -1) {
        currentQuestion ++;
        updateQuestion();
    } else {
        heading.style.color = "red";
        input.value = "";
        input.placeholder = "Nope, try again!";
    };

});


