
let convertInto = document.getElementById("convertInto");
let degreeNum = document.getElementById("degreeNum");
let result = document.getElementById("result");
let degreeUnit = document.getElementById("degreeUnit");


convertInto.addEventListener("change", function () {

    if (this.value === "c") {
        degreeUnit.value = "Farenheit";
    } else if (this.value === "f") {
        degreeUnit.value = "Celcius";
    }

    // convertTemp();

});

function convertTemp() {

    let convertedValue;
    let selectedUnit = convertInto.value;

    if (selectedUnit === "f") {
        convertedValue = (degreeNum.value - 32) * 5 / 9;
        convertInto = "°c";
    }
    else {
        convertedValue = (degreeNum.value * 9 / 5) + 32;
        convertInto = "°f";

    }

    result.innerHTML = convertedValue + " " + convertInto;
}