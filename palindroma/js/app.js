console.log("ciao")

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// - la funzione deve ritornare true se la parola è palindroma
// - deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

// PSEUDOCODICE
// Chiedere all’utente di inserire una parola 
    // Creo una variabile che avrà come valore il contenuto inserito dall'utente tramite prompt
// Creare una funzione per capire se la parola inserita è palindroma
    // Creo una variabile stringRevers in cui inserirò la parola scritta al contrario
    // Confronto la parola inserita dall'utente con stringRevers
    // Se coincidono faccio tornare true
    // altrimenti faccio tornare false
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

const stringInput = prompt("Inserisci una parola");
console.log(stringInput);

function palindrome(string){
    let stringRevers = "";
    for(let i = (string.length - 1); i >= 0; --i){
        stringRevers += string[i];
    }
    return string === stringRevers;
}

console.log("Il nome inserito è palindromo? ",palindrome(stringInput.toLowerCase()));

