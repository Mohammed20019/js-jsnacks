let parola1 = prompt("Inserisci la prima parola:");
let parola2 = prompt("Inserisci la seconda parola:");


if (parola1.length < parola2.length) {
  console.log(parola1+"-parola più corta");
  console.log(parola2+"-parola più lunga");
} else if (parola2.length < parola1.length) {
  console.log(parola2+"-parola più corta");
  console.log(parola1+"-parola più  lunga");
} else {
  console.log("Le parole hanno la stessa lunghezza");
}