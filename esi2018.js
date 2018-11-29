// const body = document.getElementById('body');
// const question = document.getElementById('question');

// const answerField = document.getElementById('answer');

// answerField.addEventListener('click', () => {
//     answerField.placeholder = "Give it your best shot!";
// });

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––\\

// Variables
const heading = document.getElementById("heading");
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
let questionTracker;

// Question objects...
const questions = [
    {
        question: "What was the resturuant we ate at after I landed in Israel for the first time?",
        correctAnswers: ["kafit", "קפית"]
    },

    {
        question: "What appointment did I cancle in budapest??",
        correctAnswers: ["haircut", "barber", "barber shop", "hair salon"]
    }
];

//Placing the first question staticly...
heading.innerHTML = questions[0].question


//Placing the first question via objects...
// heading.innerHTML = questions;


input.addEventListener('click', () => {
    input.placeholder = "Give it your best shot!";
});


submitBtn.addEventListener("click", () => {
    let submittedAnswer = input.value;
    if (submittedAnswer === questions[0].correctAnswers[0]) {
        heading.style.color = "green";
    } else {
        heading.style.color = "red";
        input.value = "";
        input.placeholder = "Nope, try again!";
    }
});

