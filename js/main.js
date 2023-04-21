 // Chiedere all’utente di inserire una parola
 // Creare una funzione per capire se la parola inserita è palindrom

 // let wordl = prompt("Inserisci una parola");
 // 
 // let parolaInversa = invertiParola(wordl);
 // console.log(parolaInversa);
 // 
 // if (wordl == parolaInversa) {
 //     console.log("La parola :", wordl ,"è palindroma")
 // } else {
 //     console.log("La parola :", wordl ,"non è palindroma");
 // }
 // 
 // function invertiParola(Parola) {
 //   var parolaReverse = '';
 //   for (var i = Parola.length - 1; i >=0; i--){ 
 //         parolaReverse += Parola [i]; 
 //         }  
 //         return parolaReverse;  
 //        }



let pariOrDispari = prompt("Pari o dispari?");
console.log("Hai scelto", pariOrDispari);

let number = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Hai scelto il numero", number);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function somma() {
    var somma = number + rand;
    return somma;
}

function checkPariDispari(numero) {
    if (somma % 2 == 0) {
      console.log("Pari")
      return "Pari";
    }
      console.log("Pari")
      return "Dispari";
    }
    
var rand = random(1, 5);
console.log("Numero generato per l'avversario è : " , rand);

var risultato = somma();
console.log("La somma dei due numeri è :", risultato);

var result = checkPariDispari(risultato);

if (pariOrDispari === result) {
    console.log("vince il giocatore");
  } else {
    console.log("vince il pc");
  }
