const baseValue = document.querySelector('#baseValue');
const heightValue = document.querySelector('#heightValue');
const calculateBtn = document.querySelector('#isTriangle');
const outputSection = document.querySelector('#outputBox');


calculateBtn.addEventListener("click", checkValues)

function calculateHypotenuse(val1, val2){
    if(val1 <= 0){
        outputSection.innerText = "Base value should be greater than zero"
    }
    else if(val2 <= 0){
        outputSection.innerText = "Height value should be greater than zero"
    }
    else{
        const ans = Math.sqrt(val1*val1 + val2*val2).toFixed(2)
        outputSection.innerText = `The length of hypotenuse is ${ans}`
    }
}

function checkValues(){
    const val1 = Number(baseValue.value)
    const val2 = Number(heightValue.value)
    console.log(val1, val2)
    if(val1 != null && val2 != null){
        calculateHypotenuse(val1, val2)
    }
    else{
        outputSection.innerText = "Please enter base value & height value"
    }
}