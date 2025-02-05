function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

function interpretBMI(bmi) {
    if (bmi < 18.5)
    {
        return "underweigth";
    }
    else if (bmi < 25) {return "normal";
    }
    else if (bmi < 30) return "overweight";
    else {return "obese";}
}

let weight = 70; // in kg
let height = 1.75 // im meters

let bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
console.log("interpretation:", interpretBMI(bmi));