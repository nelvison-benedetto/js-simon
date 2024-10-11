//const mapRandomNums = new Map(); 
const arrRandomNums = [];
boxesRnums = document.querySelectorAll(".container span strong");
btn_submit = document.querySelectorAll(".container button");
var guessNums = [];

function readArrGuss(){
    console.log(guessNums);
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
        if(item.value != ""){
            guessNums.push(item.value);
            console.log("added to arr guessNums");
        }
        else{
            isNullInput = true;
        }
    });
    if(isNullInput){
        guessNums = [];
        alert("Enter all inputs!");
    }
    console.log(guessNums);
}

btn_submit[0].addEventListener("click",guessNum);
btn_submit[1].addEventListener("click",readArrGuss);

function thePlay() {
    generateRandomNums();
    boxesRnums.forEach( (item,index) => {
        item.innerHTML = arrRandomNums[index];
    }); 
    const theTimeout = setTimeout(boxesClear, 3000);
}

thePlay();


