// JS Loops

let imSoHappyBtn = document.getElementById("imSoHappyBtn");
let multiplesOf4Btn = document.getElementById("multiplesOf4");
let oddFrom55To11Btn = document.getElementById("oddFrom55To11");
let sum5To50Btn = document.getElementById("sum5To50");
let sum10To100Btn = document.getElementById("sum10To100");

imSoHappyBtn.addEventListener("click", imSoHappy);
multiplesOf4Btn.addEventListener("click", multiplesOf4);
oddFrom55To11Btn.addEventListener("click", oddNumbersfrom55To11);
sum5To50Btn.addEventListener("click", sum5To50);
sum10To100Btn.addEventListener("click", sum10To100);

function imSoHappy(){
    for(let i = 0; i < 500; i++){
        console.log("I'm so happy!");
    }
}

function multiplesOf4(){
    for(let i = 12; i <= 800; i += 4){
        console.log(i);
    }
}

function oddNumbersfrom55To11(){
    for(let i = 55; i >= 11; i -= 2){
        console.log(i);
    }
}

function sum5To50(){

    let total = 0;
    for(let i = 5; i <= 50; i++){
        total += i;
    }

    console.log(total);
}

function sum10To100(){
    let total = 0;
    for(let i = 10; i <= 100; i += 10){
        total += i;
    }

    console.log(total);
}