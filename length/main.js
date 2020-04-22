// Inserisci due parole, quale è la piu lunga?

// recupero le due parole inserite dall'utente
var parola1 = prompt('Inserisci la prima parola');
var parola2 = prompt('Inserisci la seconda parola');

console.log('parola 1: ' + parola1);
console.log('parola 2: ' + parola2);

// calcolo la lunghezza delle due parole
var lunghezza_parola1 = parola1.length;
var lunghezza_parola2 = parola2.length;
console.log('lunghezza parola 1 (' + parola1 + ') = ' + lunghezza_parola1);
console.log('lunghezza parola 2 (' + parola2 + ') = ' + lunghezza_parola2);

// confronto le lunghezze e visualizzo un messaggio appropriato
if(lunghezza_parola1 > lunghezza_parola2) {
    console.log('La parola 1 (' + parola1 + ') è più lunga della parola 2 (' + parola2 + ')');
} else if(lunghezza_parola1 == lunghezza_parola2) {
    console.log('Le due parole hanno la stessa lunghezza');
} else {
    console.log('La parola 2 (' + parola2 + ') è più lunga della parola 1 (' + parola1 + ')');
}
