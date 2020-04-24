// chiedo un numero all'utente
var numero = prompt('inserisci un numero di 4 cifre');

// procedimento A: lavoro con la stringa usando charAt()

// predispongo una variabile che conterrà la somma (valore iniziale della somma = 0)
var somma = 0;

// ripeto le operazioni finché ci sono caratteri nella stringa
for (var i = 0; i < numero.length; i++) {
    // recupero la cifra nella posizione i, dove i va da 0 a 4 escluso
    var cifra = parseInt(numero.charAt(i));
    //console.log('cifra in posizione i = ' + i + ' corrisponde a ' + cifra);
    somma = somma + cifra;
    //console.log('la somma parziale fino adesso vale ' + somma);
}
console.log('la somma totale delle cifre del numero ' + numero + ' è uguale a ' + somma);


/************************************/


// procedimento B: lavoro con un array

// suddivido il numero inserito dall'utente nei singoli caratteri
// => ottengo così un array con le singole cifre
var cifre = numero.split('');
console.log(cifre);

// predispongo una variabile che conterrà la somma (valore iniziale della somma = 0)
var somma = 0;

// ripeto le operazioni finché ci sono elementi nell'array
for (var i = 0; i < cifre.length; i++) {
    // recupero la cifra corrente
    var cifra_corrente = parseInt(cifre[i]);
    //console.log('cifra in posizione i = ' + i + ' corrisponde a ' + cifra_corrente);
    somma = somma + cifra_corrente;
    //console.log('la somma parziale fino adesso vale ' + somma);
}
console.log('la somma totale delle cifre del numero ' + numero + ' è uguale a ' + somma);
