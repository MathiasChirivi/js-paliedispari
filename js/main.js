// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let wordl = prompt("Inserisci una parola");

let parolaInversa = invertiParola(wordl);

if (wordl == parolaInversa) {
    console.log("La parola :", wordl ,"è palindroma")
} else {
    console.log("La parola :", wordl ,"non è palindroma");
}

function invertiParola(str) {
    var strInversa = str.split('').reverse().join('');
    //console.log("strInversa")
    return strInversa;
}
