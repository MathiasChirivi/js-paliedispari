/******************
**PALINDROMA*******/

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindrom

let wordl = prompt("Inserisci una parola");
console.log(wordl)

let parolaInversa = invertiParola(wordl);
console.log("Parola invertita : ", parolaInversa);

if (wordl == parolaInversa) {
    console.log("La parola :", wordl ,"è palindroma")
} else {
    console.log("La parola :", wordl ,"non è palindroma");
}

// soluzione con il for 
 function invertiParola(Parola) {
  var parolaReverse = '';
  for (var i = Parola.length - 1; i >=0; i--){ 
        parolaReverse += Parola [i]; 
        }  
        return parolaReverse;  
      }   

/** // soluzione con split reverse e join
  function invertiParola(str) {
    var strInversa = str.split('').reverse().join('');
    return strInversa;
  }
*/

/****************************** 
***ESERCIZIO PARI DISPARI******/


/**

//chiedere pari o dispari all'utonto

let pariOrDispari = prompt("Pari o Dispari?");
console.log("Hai scelto", pariOrDispari);

//chiedere un numero da 1 a 5 all'utonto
let inpututente = false;
let number;

while (inpututente == false){
  number = parseInt(prompt("Scegli un numero da 1 a 5"));
  
  if(isNaN(number)==false && number>=1 && number<=5){
    inpututente = true;
  }else {
    alert("Inserisci un numero tra 1 e 5");
  }
}

//funzione di un numero dandom da 1 a 5
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funziopne somma tra numero scelto dall'utonto e quello generato random
function somma() {
  var somma = number + rand;
  return somma;
}

//funzione Pari o Dispari
function checkPariDispari(somma) {
  if (somma % 2 == 0) {
    console.log("Pari")
    return "Pari";
  } else{
    console.log("Dispari")
    return "Dispari";
  }
}

//funzione di un numero dandom da 1 a 5
var rand = random(1, 5);
console.log("Numero generato per l'avversario è : " , rand);

// funziopne somma tra numero scelto dall'utonto e quello generato random
var risultato = somma();
console.log("La somma dei due numeri è :", risultato);

//Risultato
var result = checkPariDispari(risultato);

//controllo se l'utonto ha vinto o meno
if (pariOrDispari == result) {
  console.log("vince il giocatore");
  alert("Hai vinto, complimenti");
} else {
  console.log("vince il pc");
  alert("Hai perso, ritenta sarai piu fortunato");
}

*/