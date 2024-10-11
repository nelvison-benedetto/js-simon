//const mapRandomNums = new Map(); 
const arrRandomNums = [];
var guessNums = [];
const container = document.querySelector(".container");
const boxesRnums = document.querySelectorAll(".container span strong");
const btn_submit = document.querySelectorAll(".container button");

new_h3 = document.createElement("h3");
new_h4 = document.createElement("h4");
var guessedNums = [];

function readArrGuess(){
    guessedNums = [];
    container.appendChild(new_h3);
    arrRandomNums.forEach( (item,index) => {
        console.log(typeof item);
        if(guessNums[index]=== item){
            console.log(typeof guessNums[index]);
            guessedNums.push(guessNums[index]);
        }
    }); 
    new_h3.textContent = `guessed numbers: ${guessedNums.join(",")}`;
    score();
}


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
    inputBox.required = true;
    return inputBox;
}
function boxesClear(){
    boxesRnums.forEach( (item,index) => {
        //item.innerHTML = null;
        item = item.replaceWith(generateInputBox());
        //guessNums.push(item);
    }); 
}

function guessNum(){
    guessNums = [];
    isNullInput = false;
    const guessnums = document.querySelectorAll(".container span input");
    guessnums.forEach( (item,index) => {
        if(item.value.trim() !== "" && !isNaN(item.value)){
            guessNums.push(Number(item.value));
            //console.log("added to arr guessNums");
        }
        else{
            isNullInput = true;
        }
    });
    if(isNullInput){
        guessNums = [];
        alert("Enter all inputs in numbers!");
    }
    else{ readArrGuess();}
    //console.log(guessNums);
}
function score(){
    container.appendChild(new_h4);
    new_h4.textContent = `success score: ${guessedNums.length * 20}%`;
}

btn_submit[0].addEventListener("click",guessNum);

function thePlay() {
    generateRandomNums();
    boxesRnums.forEach( (item,index) => {
        item.innerHTML = arrRandomNums[index];
    }); 
    const theTimeout = setTimeout(boxesClear, 3000);
}

thePlay();

/**
 * dddd
 * ddd
 * ddd
 */
