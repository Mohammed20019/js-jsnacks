let somma = 0;
for (let i = 0; i < 10; i++) {
  let numero = parseFloat(prompt("Inserisci un numero:"));
  somma += numero;
}
console.log("La somma di tutti i numeri inseriti è: " + somma);