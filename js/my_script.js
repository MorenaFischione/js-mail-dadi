/* 
*   A - Mail:
        - Chiedi all'utente la sua email
        - Crea una lista di email di chi puo accedere
        - Controlla che l'utente sia nella lista
        - Rilascia un messaggio adeguato

    B - Gioco dei Dadi:
        - Genera un numero randomico da 1 a 6 per il giocatore
        - Genera un numero randomico da 1 a 6 per il computer
        - Stabilire chi vince a seconda del numero piu altro
*/


let mailUtente = prompt("Quale è la tua email?");
let listaMail = ["pippo@gmail.com" , "giada@tiscali.it", "nico@alice.it", "steeve@aruba.com"];


if (listaMail.includes(mailUtente)) {
    document.getElementById("inserimento-email").innerHTML= mailUtente + " è correttamente registrato, puoi entrare";
}   else {
    alert("email non registrata");
}

let numeroSfidante = parseInt( prompt("Scegli un numero da 1 a 6"));


if (numeroSfidante < 1 || numeroSfidante > 6 ||Number.isNaN(numeroSfidante)) {
    numeroSfidante = Math.floor( Math.random() * 6) + 1;
    alert("Puoi scegliere esclusivamente un numero tra 1 e 6, ormai sarai un numero casuale, ovvero " + numeroSfidante);
}
console.log(numeroSfidante);

let numeroComputer = Math.floor( Math.random() * 6) + 1;
console.log(numeroComputer);

document.getElementById("num-scelto").innerHTML = numeroSfidante;
console.log(numeroSfidante);
document.getElementById("num-pc").innerHTML = numeroComputer;

if (numeroSfidante < numeroComputer) {
    document.getElementById("risultato").innerHTML = "mi dispiace hai perso";
} else {
    document.getElementById("risultato").innerHTML = "hai vinto";
}






    
