const quizForm = document.querySelector('.quizForm')
const submitAnswerBtn = document.querySelector('#submitAnswerBtn')
const outputSection = document.querySelector('#output')

const correctAnswer = [ "90", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100", "30", "a + b + c", "no", "45"];

submitAnswerBtn.addEventListener("click", calculateScore)

function calculateScore(){
    var score = 0;
    const result = new FormData(quizForm)
    let tempArr = []
    for(let value of result.values()){
        tempArr.push(value)
    }
    if(tempArr.length == 10){
        for(let i = 0; i < tempArr.length; i++){
            if(tempArr[i] === correctAnswer[i]){
                score += 1;
            }
            score=score;
        }
        outputSection.innerText = `Your score is ${score}`
    }else{
        outputSection.innerText = 'Please attempt all the questions'
    }
    // console.log(tempArr)
}