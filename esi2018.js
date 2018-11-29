// const body = document.getElementById('body');
// const question = document.getElementById('question');

// const answerField = document.getElementById('answer');

// answerField.addEventListener('click', () => {
//     answerField.placeholder = "Give it your best shot!";
// });

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––\\

// Variables
const heading = document.getElementById("heading");
const input = document.getElementById('answer');
const submitBtn = document.getElementById('submit-btn');

// Question objects...
const questions = [
    {
        question: "What was the resturuant we ate at after I landed in Israel for the first time?",
        correctAnswers: ["kafit", "קפית"]
    }

    {
        question: "What appointment did I cancle in budapest??",
        correctAnswers: ["haircut", "barber", "barber shop", "hair salon"]
    }
];

//Placing the first question staticly...
heading.innerHTML = "What was the resturuant we ate at after I landed in Israel for the first time?";


//Placing the first question via objects...
// heading.innerHTML = questions;


input.addEventListener('click', () => {
    input.placeholder = "Give it your best shot!";
});


submitBtn.addEventListener("click", () => {
    let submittedAnswer = input.value;
    if (submittedAnswer === "kafit") {
        heading.style.color = "green";
        heading.innerHTML = "You got it!";
    } else {
        heading.style.color = "red";
        heading.innerHTML = "Try again.";
    }
});

