const angle1 = document.querySelector('#angle1')
const angle2 = document.querySelector('#angle2')
const angle3 = document.querySelector('#angle3')
const isTriangle = document.querySelector('#isTriangle')
const outputSection = document.querySelector("#outputBox");

isTriangle.addEventListener("click", function doSomething(){
    doAngleValidation()
})

function checkIsTriangle(val1, val2, val3){
    if(val1 <= 0){
        outputSection.innerText = "Angle1 should be positive"
    }
    else if(val2 <= 0){
        outputSection.innerText = "Angle2 should be positive"
    }
    else if(val3 <= 0){
        outputSection.innerText = "Angle 3 should be positive"
    }
    else{
        if(val1 + val2 + val3 == 180){
            outputSection.innerText = "Yay, The angles form a triangle. The sum of angles is 180 degrees"
        }else{
            outputSection.innerText = "Oh Oh! The angles don't form a triangle because the sum of angles is less than 180 degrees"
        }
    }
}

function doAngleValidation(){
    const val1 = Number(angle1.value)
    const val2 = Number(angle2.value)
    const val3 = Number(angle3.value)

    if(val1 && val2 && val3){
        checkIsTriangle(val1, val2, val3)
    }
    else if(val1 == '' && val2 != '' && val3 != ''){
        // console.log("Bazinga!!")
        outputSection.innerText = "Please enter angle1"
    }else if(val2 == '' && val1 != '' && val3 != ''){
        outputSection.innerText = "Please enter angle2"
    }else if(val3 == '' && val1 != '' && val2 != ''){
        outputSection.innerText = "Please enter angle3"
    }
    else{
        outputSection.innerText = "Please enter angle1, angle2 & angle3"
    }
}