// Crea un array contenente 3 nomi. Chiedi un numero da 0 a 2 all’utente e stampa l’elemento dell’array corrispondente.

// creo un array con 3 nomi
var nomi = ['pippo', 'pluto', 'paperino'];
console.log(nomi);

// chiedo un numero all'utente tra 0 e 2
var numero = parseInt(prompt('inserisci un numero tra 0 e 2'));
console.log(numero);

// procedimento A
if(isNaN(numero) || numero < 0 || numero > 2) {
    // se il valore inserito non è un numero, oppure è < 0, oppure è > 2
    // => non esiste una posizione corrispondente all'interno dell'array
    console.log('errore: non hai inserito un numero valido!');
} else {
    // il valore è un numero ed è >= 0 ed è <= 2
    // => corrispondente ad una posizione valida all'interno dell'array
    var nome_scelto = nomi[numero];
    console.log(nome_scelto);
}

// procedimento B
if(isNaN(numero) == false && numero >= 0 && numero <= 2) {
    // il valore è un numero ed è >= 0 ed è <= 2
    // => corrispondente ad una posizione valida all'interno dell'array
    var nome_scelto = nomi[numero];
    console.log(nome_scelto);
} else {
    // se il valore inserito non è un numero, oppure è < 0, oppure è > 2
    // => non esiste una posizione corrispondente all'interno dell'array
    console.log('errore: non hai inserito un numero valido!');
}
