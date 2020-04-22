/*** esempi vari: commentare e decommentare i vari pezzi di codice ***/

/*** VARIABILI DI TIPO STRINGA ***/
// creo una variabile e le assegno un valore
var saluto = 'Ciao';
console.log(saluto);

// modifico il contenuto della variabile per cambiare il suo valore
saluto = 'Arrivederci';
console.log(saluto);


/*** VARIABILI DI TIPO BOOLEANO (VERO/FALSO) ***/
var variabile_booleana = true;
console.log(variabile_booleana);

/*** VARIABILI DI TIPO NUMERO ***/
// creo una variabile e le assegno un valore
var numero = 5;
console.log(numero);

// creo una seconda variabile e le assegno il valore di un'altra variabile
var numero2 = numero;
console.log(numero2);

// se manipolo la prima variabile, la seconda non subirà alcuna modifica!
numero = 3 * numero;
console.log(numero);
console.log(numero2);

/*** CONCATENAZIONE TRA STRINGHE ***/
// creo due variabili contenenti due stringhe diverse
var colore = 'Rosso';
var caratteristica = 'Acceso';
// concateno i loro valori aggiungendo un carattere "spazio" in mezzo per ottenere una stringa unica
var colore_insieme = colore + ' ' + caratteristica;
console.log(colore_insieme);
document.getElementById('colore').innerHTML = colore_insieme;

// NB: se inserisco dei numeri all'interno di una stringa, l'operatore "+" farà sempre la concatenazione, non la somma dei valori numerici!
var numero_stringa = '8';
var numero_stringa2 = '3';
var somma_numeri_stringa = numero_stringa + numero_stringa2;
console.log(somma_numeri_stringa);

/*** OPERAZIONI CON I NUMERI ***/
var somma = 4 + 4; // addizione, con il segno +
console.log('somma iniziale = ' + somma);
var sottr = somma - 3; // sottrazione, con il segno -
console.log('somma dopo la sottrazione = ' + somma);
console.log('sottrazione = ' + sottr);
var divisione = somma / 2; // divisione, con il segno /
console.log('somma dopo la divisione = ' + somma);
console.log('divisione = ' + divisione);
var molt = sottr * 2; // moltiplicazione, con il segno*
console.log('sottrazione dopo la moltiplicazione = ' + sottr);
console.log('moltiplicazione = ' + molt);

var numero_virgola = 3.14;
var somma_virgola = numero_virgola + 5;
console.log(somma_virgola);
