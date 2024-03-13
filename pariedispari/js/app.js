// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PSEUDOCODICE

const buttonElement = document.getElementById("button");
const max = 5;

buttonElement.addEventListener("click", function(){
    const inputNumberUserElement = document.getElementById("input-user");
    const selectEvenOddElement = document.getElementById("select-even-odd");
    const listDomElement = document.querySelector("ul");
    let numberUser = 0;
    let numberPC = 0;
    let evenOdd = "";
    let somma = 0;
    let result="";
    numberUser = parseInt(inputNumberUserElement.value);
    
    if(isInRange(numberUser) === true){
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
            result = "hai vinto"
        }else{
            console.log("hai perso");
            result = "hai perso"
        }
        
        listDomElement.innerHTML = `
        <li>Numero Utente: ${numberUser}</li>
        <li>Hai scelto: ${evenOdd}</li>
        <li>Numero PC: ${numberPC}</li>
        <li>Somma: ${somma}</li>
        <li>Risultato: ${result}</li>
        `    
    }else{
        alert("Devi inserire un numero compreso tra 1 e 5")
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

// function control(variabile){
//     if (variabile > 5 || variabile < 1){
//         return alert("devi inserire un numero compreso tra 1 e 5") 
//     }
// }

function isInRange(number){
    if (number > 5 || number < 1){
        return false;
    }else{
        return true;
    }
}

// function isInRangeBetween(number, min, max){
//     if (number > max || number < min){
//         return false 
//     }else{
//         return true;
//     }
// }