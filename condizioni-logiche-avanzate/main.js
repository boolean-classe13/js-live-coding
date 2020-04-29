// JSnack 1: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var numero_utente = parseInt(prompt('inserisci un numero'));

// procedimento A: con operatore modulo
if(numero_utente % 2 != 0) {
    // il numero è dispari => stampo il successivo
    // se scrivo numero_utente++ l'incremento viene eseguito DOPO la stampa!
    // console.log(numero_utente++);
    // se scrivo ++numero_utente l'incremento viene eseguito PRIMA della stampa!
    console.log(++numero_utente);
} else {
    // il numero è pari => lo stampo
    console.log(numero_utente);
}


/*************************************************/


// // procedimento B: con una funzione
// if(is_pari(numero_utente)) { // equivalente a (is_pari(numero_utente) == true)
//     // il numero è pari => lo stampo
//     console.log(numero_utente);
// } else {
//     // il numero è dispari => stampo il successivo
//     numero_utente++;
//     console.log(numero_utente);
// }
//
// // funzione che valua se un numero è pari o dispari
// // restituisce true se il numero è pari, false altrimenti
// function is_pari(numero) {
//     // So per certo che:
//     // 1 = true e true = 1
//     // 0 = false e false = 0
//     if(numero % 2) { // equivalente a (numero % 2 == 1) perché 1 = true
//         // il resto della divisione per 2 vale 1 (cioè true) => il numero è dispari => non è pari!
//         return false;
//     } else {
//         // il resto della divisione per 2 vale 0 (cioè false) => il numero è pari!
//         return true;
//     }
// }
