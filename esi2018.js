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
let currentQuestion = 0;

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
        question: "What nickname did I give you?",
        correctAnswers: ["chuchu", "choochoo", "chooch", "chu chu", 'choochoo']
    }
];

//Placing the first question staticly...
function updateQuestion() {
    heading.innerHTML = questions[currentQuestion].question;
    input.placeholder = "Type your answer...";
    heading.style.color = "";
    input.value = "";
};

updateQuestion();

submitBtn.addEventListener('click', () => {
    let submittedAnswer = input.value;
    if (questions[currentQuestion].correctAnswers.indexOf(submittedAnswer) > -1) {
        currentQuestion =+ 1;
        updateQuestion();
    } else {
        heading.style.color = "red";
        input.value = "";
        input.placeholder = "Nope, try again!";
    };

});



// right now the for loop causes the question to be propegated automatically.
// however, you need another for loop to validate answers which isn't working at the moment.
// it might make sense to make the validating the answe step its own function seperately,
// but if it lives locally than that might defeat the purpose.

// if (score < 3){  
//     for (i in questions) {
//         heading.innerHTML = questions[i].question
//         submitBtn.addEventListener("click", () => {
//             let submittedAnswer = input.value;
//             for (j in questions[i].correctAnswers) {
//                 if (submittedAnswer === questions[i].correctAnswers[j]) {
//                     heading.style.color = "green";
//                 } else {
//                     heading.style.color = "red";
//                     input.value = "";
//                     input.placeholder = "Nope, try again!";
//                 }
//                 // console.log(questions[i], ':', questions[i].correctAnswers[j]);
//             };
//         });  
//     };
// };

//Placing the first question via objects...
// heading.innerHTML = questions;


input.addEventListener('click', () => {
    input.placeholder = "Give it your best shot!";
});


// submitBtn.addEventListener("click", () => {
//     let submittedAnswer = input.value;
//     if (submittedAnswer === questions[0].correctAnswers[0]) {
//         heading.style.color = "green";
//     } else {
//         heading.style.color = "red";
//         input.value = "";
//         input.placeholder = "Nope, try again!";
//     }
// });

