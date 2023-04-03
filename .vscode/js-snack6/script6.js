let numeroCasuale = Math.floor(Math.random() * 11);
let numeroUtente = parseInt(prompt("Inserisci un numero da 0 a 10:"));


if (numeroUtente === numeroCasuale) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso. Il numero casuale era " + numeroCasuale);
}