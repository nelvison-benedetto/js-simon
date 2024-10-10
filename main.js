//const mapRandomNums = new Map(); 
const arrRandomNums = [];
boxesRnums = document.querySelectorAll(".container span strong");
btn_submit = document.querySelector(".container button");
var guessNums = [];


function generateRandomNums(){
    for(let i=0; i<5; i++){
        let rnum = Math.floor(Math.random() * 5) + 1;
        arrRandomNums.push(rnum);
        //console.log(arrRandomNums);
    }
}
function generateInputBox(){
    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.placeholder = "guess the number";
    return inputBox;
}
function boxesClear(){
    boxesRnums.forEach( (item,index) => {
        //item.innerHTML = null;
        item = item.replaceWith(generateInputBox());
        //guessNums.push(item);
    }); 
}

isInputOk = false;
function guessNum(){
    const guessnums = document.querySelectorAll(".container span input");
    guessnums.forEach( (item,index) => {
        if(item.value != null){
            guessNums.push(item.value);
            isInputOk = true;
        }
        else{
            isInputOk = false;
        }
    });
    if(!isInputOk){  //FIX THIS LOGIC RESET ARRAT INPUTNUMS IS !isInputOk
        alert("Please fill every input!")
        guessNums = [];
    }
    console.log(guessNums);
}

btn_submit.addEventListener("click",guessNum);

function thePlay() {
    generateRandomNums();
    boxesRnums.forEach( (item,index) => {
        item.innerHTML = arrRandomNums[index];
    }); 
    const theTimeout = setTimeout(boxesClear, 3000);
}

thePlay();


