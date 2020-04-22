// var numero1 = 1;
// console.log(numero1); // 1
// numero1++; // equivalente a: numero1 = numero1 + 1;
// console.log(numero1); // 2
// numero1 + 2; // sto eseguendo una somma ma non sto modificando il valore di numero1!
// console.log(numero1); // 2

// var x = 1;
// console.log(x); // 1
// x += 2; // equivalente a: x = x + 2;
// console.log(x); // 3


// Chiedi un numero all’utente e stampa in console il numero successivo.

// creo una variabile con il numero inserito dall'utente
var numero_utente = parseInt(prompt('Inserisci un numero'));
console.log(numero_utente);

if(isNaN(numero_utente)) {
    console.log('errore: non hai inserito un numero!');
} else {
    // stampo il valore della variabile incrementato di 1
    numero_utente += 1;
    console.log(numero_utente);
}
