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

function guessNum(){
    const guessnums = document.querySelectorAll(".container span input");
    guessnums.forEach( (item,index) => {
        guessNums.push(item.value);
    });
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


