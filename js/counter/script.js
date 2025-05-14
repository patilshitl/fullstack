let inputNum = document.getElementById("inputNum");
let reset = document.getElementById("reset");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");



function resetNum(){
    inputNum.value=0;
}

function incrementNum(){
    inputNum.value= parseInt(inputNum.value) + 1;
}

// function decrementNum(){
//     inputNum.value= parseInt(inputNum.value) - 1;

//     let i = inputNum.value;
//     if(i > 0){
//         //console.log("cant decrese more")
//         i = i - 1;
//     }
//     else{
//         alert("Cannot decrease below 0");
//     }
// }

function decrementNum() {
    let currentValue = parseInt(inputNum.value);
    
    if (currentValue > 0) {
        inputNum.value = currentValue - 1;
    } else {
        alert("Cannot decrease below 0");
    }
}