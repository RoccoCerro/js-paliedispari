// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PSEUDOCODICE

const inputNumberUserElement = document.getElementById("input-user");
const selectEvenOddElement = document.getElementById("select-even-odd")
const buttonElement = document.getElementById("button")
let numberUser = 0;
let evenOdd = "";
let numberPC = 0;
const max = 5;
let somma = 0;

buttonElement.addEventListener("click", function(){
    numberUser = parseInt(inputNumberUserElement.value);
    console.log("Numero Utente: ", numberUser)
    evenOdd = selectEvenOddElement.value;
    console.log("Hai scelto: ", evenOdd)

    numberPC = functionNumberPc();
    console.log("Numero PC: ", numberPC)

    somma = numberPC + numberUser;
    console.log("Somma ",somma);
    
    console.log(functionEvenOdd(somma))
    
    if(evenOdd === functionEvenOdd(somma)){
        console.log("hai vinto");
    }else{
        console.log("hai perso");
    }
    
})


function functionNumberPc(){
    return Math.floor(Math.random() * max) +1;    
}

function functionEvenOdd(number){
    let modulo = number % 2;
    if(modulo === 0){
        return "pari";
    }else{
        return "dispari";
    }
}

