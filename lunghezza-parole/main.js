// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedere due parole all'utente con due prompt
var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');

console.log('parola 1: ' + parola1);
console.log('parola 2: ' + parola2);

// recupero la lunghezza delle due stringhe inserite dall'utente
var lunghezza1 = parola1.length;
var lunghezza2 = parola2.length;
console.log('lunghezza parola 1: ' + lunghezza1);
console.log('lunghezza parola 2: ' + lunghezza2);

// faccio la comparazione per capire quale delle due è la più corta
if(lunghezza1 <= lunghezza2) {
    // stampo la parola più corta (parola 1)
    console.log(parola1);
    // stampo la parola più lunga (parola2)
    console.log(parola2);
} else {
    // stampo la parola più corta (parola 2)
    console.log(parola2);
    // stampo la parola più lunga (parola1)
    console.log(parola1);
}
