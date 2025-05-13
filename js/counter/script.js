let inputNum = document.getElementById("inputNum");
let reset = document.getElementById("reset");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");



function resetNum(){
    inputNum.value="";
}

function incrementNum(){
    inputNum.value= parseInt(inputNum.value) + 1;
}

function decrementNum(){
    inputNum.value= parseInt(inputNum.value) - 1;

    let i = inputNum.value;
    if(i > 0){
        console.log("cant decrese more")
    }
}

