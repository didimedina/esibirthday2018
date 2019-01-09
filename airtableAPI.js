// Variables
// const quiz = document.getElementById("quiz");
// const birthdayLetter = document.getElementById("birthday-letter");
// const heading = document.getElementById("heading");
// const input = document.getElementById('input-answer');
// const submitBtn = document.getElementById('btn-submit');
// let score = 0;
// let currentQuestion = 0;
// let submittedAnswer = "";

let output = document.getElementById('output').innerHTML;

function fetchQuestions() {
    fetch('https://api.airtable.com/v0/apped63ewykkw1H26/Questions?api_key=keyfWe1gli5Iryn4I')
        .then((res) => res.json())
        .then((jsonData) => {
            console.log(jsonData);
            jsonData = jsonData.records;
            console.log(jsonData)
            // jsonData = Object.entries(jsonData.records);
            let output = '<h2>Questions</h2>'

            jsonData.forEach(function (record) {
                console.log(record.fields.Question);
                output += `
            <ul>
                <li>Question: ${record.fields.Question}</li>
            </ul>
            `;
            });

            document.getElementById('output').innerHTML = output;
            // console.log(jsonData);
        })

}

fetchQuestions();

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

