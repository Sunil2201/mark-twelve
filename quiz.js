const quizForm = document.querySelector('.quizForm')
const submitAnswerBtn = document.querySelector('#submitAnswerBtn')
const outputSection = document.querySelector('#output')

const correctAnswer = [ "90", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100", "30", "a + b + c", "no", "45"];

submitAnswerBtn.addEventListener("click", calculateScore)

function calculateScore(){
    var score = 0;
    var index = 0;
    const result = new FormData(quizForm)
    for(let value of result.values()){
        if(value === correctAnswer[index]){
            score += 1;
        }
        index += 1;
    }
    outputSection.innerText = `Your score is ${score}`
}