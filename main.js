//const mapRandomNums = new Map(); 
const arrRandomNums = [];
boxesRnums = document.querySelectorAll(".container span strong");

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
    inputBox.value = "testtest";
    return inputBox;
}
function boxesClear(){
    boxesRnums.forEach( (item,index) => {
        //item.innerHTML = null;
        item.replaceWith(generateInputBox());
    }); 
}


function guessNum(){

}

function thePlay() {
    generateRandomNums();
    boxesRnums.forEach( (item,index) => {
        item.innerHTML = arrRandomNums[index];
    }); 
    const theTimeout = setTimeout(boxesClear, 3000);

}

thePlay();