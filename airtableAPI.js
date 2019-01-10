// Variables
const quiz = document.getElementById("quiz");
const birthdayLetter = document.getElementById("birthday-letter");
const heading = document.getElementById("heading");
const input = document.getElementById('input-answer');
const submitBtn = document.getElementById('btn-submit');
let score = 0;
let currentQuestion = 0;
let submittedAnswer = "";

// Fetch Data From AirTable

fetch('https://api.airtable.com/v0/apped63ewykkw1H26/Questions?api_key=keyfWe1gli5Iryn4I')
    .then(res => res.json())
    .then(json => populateQuiz(json.records))

// Populate Quiz
function populateQuiz(data){
    if (score < data.length) {
        heading.innerHTML = data[currentQuestion].fields.Question;
        input.placeholder = "Type your answer...";
        heading.style.color = "";
        input.value = "";
    } else {
        //show birthday letter. 
        quiz.style.display = "none";
        birthdayLetter.style.display = "flex";
    };
}

submitBtn.addEventListener('click', () => {
    currentQuestion++;
    score++;
    populateQuiz();


    // input.autofocus = true; trying to get the input to autofocus each time but its not working... 
    // submittedAnswer = input.value.toLowerCase();
    // if (questions[currentQuestion].correctAnswers.indexOf(submittedAnswer) > -1) {
    //     currentQuestion++;
    //     score++;
    //     populateQuiz();
    // } else {
    //     heading.style.color = "red";
    //     input.value = "";
    //     input.placeholder = "Nope, try again!";
    // };
});

// function updateQuestion() {
//     if (score < questions.length) {
        

//         heading.innerHTML = questions[currentQuestion].question;
//         input.placeholder = "Type your answer...";
//         heading.style.color = "";
//         input.value = "";
//     } else {
//         //show birthday letter. 
//         quiz.style.display = "none";
//         birthdayLetter.style.display = "flex";

//         // heading.innerHTML = 'happy birthday!';
//     };
// };

// async function getQuestions() {
//     let res = await fetch(
//         "https://api.airtable.com/v0/apped63ewykkw1H26/Questions?api_key=keyfWe1gli5Iryn4I"
//     );
//     let json = await res.json();
//     json = json.records;
//     return json;
// }

// console.log(getQuestions());

// function populateQuiz() {
//     console.log("populate quiz");
//     for (let question of listOfQuestions.records) {
//         console.log(question);
//     }
// }

// let listOfQuestions;
// // time 0
// getQuestions().then(data => {
//     console.log(`Returned data:`);
//     listOfQuestions = data;
//     console.log(listOfQuestions); // returning undefined.
//     // time 1
//     populateQuiz(listOfQuestions);
// });

// populateQuiz();
// time 0

// async function getLotsOfQuestions() {
//   let promiseList = [];
//   for (let i = 0; i < 10; i++) {
//     promiseList.push(getQuestion());
//   }

//   let questionList = await Promise.all(promiseList);

//   console.log(questionList);
// }

// getLotsOfQuestions();



