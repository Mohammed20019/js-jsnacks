let invitati = ["Leonardo di Caprio", "Micheal Jackson", "Momo", "Nicolas cage", "Sabaku"];

let nomeUtente = prompt("Inserisci il tuo nome:");

if (invitati.includes(nomeUtente)) {
  console.log("Benvenuto alla festa del Grande Gatsby, " + nomeUtente + " ci sarà tanto alcol e droga :)");
} else {
  console.log("Mi dispiace signore/a " + nomeUtente + ", fuori dai piedi!");
}