// const body = document.getElementById('body');
// const question = document.getElementById('question');

// const answerField = document.getElementById('answer');

// answerField.addEventListener('click', () => {
//     answerField.placeholder = "Give it your best shot!";
// });

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––\\

// Variables
const question = document.getElementById("question");
const body = document.getElementsByName('body');
const answerField = document.getElementById('answer');


//Placing the first question...
body.style.color = "black";
question.innerHTML = "What was the resturuant we ate at after I landed in Israel for the first time?";

answerField.addEventListener('click', () => {
    answerField.placeholder = "Give it your best shot!";
});


// const myButton = document.getElementById("myButton");
// const myInput = document.getElementById("myInput");

// myButton.addEventListener("click", () => {
//     let answer = myInput.value;
//     if (answer === "red") {
//         myHeading.style.color = "green";
//         myHeading.innerHTML = "You got it!";
//     } else {
//         myHeading.style.color = "red";
//         myHeading.innerHTML = "Try again.";
//     }
// });

