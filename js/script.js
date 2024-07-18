function bmi() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter both height and weight.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100)); // BMI formula

    var total = bmi.toFixed(2);
    var bmiResult = "Your Body Mass Index is " + total + ". This is considered ";

    if (bmi < 18.5) {
        bmiResult += "underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiResult += "normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiResult += "overweight.";
    } else {
        bmiResult += "obese.";
    }

    document.getElementById("result").innerHTML = bmiResult;
}
