//const mapRandomNums = new Map(); 
const arrRandomNums = [];

function generateRandomNums(){
    for(let i=0; i<5; i++){
        let rnum = Math.floor(Math.random() * 5) + 1;
        arrRandomNums.push(rnum);
        //console.log(arrRandomNums);
    }
};
generateRandomNums();
emptyxRnums = document.querySelectorAll(".container span strong");

emptyxRnums.forEach( (item,index) => {
    item.innerHTML = arrRandomNums[index];
}); 