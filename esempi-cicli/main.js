// Stampare a schermo una lista di nomi utilizzando un ciclo for e un ciclo while
var nomi = ['pippo', 'pluto', 'paperino'];
console.log(nomi);

console.log('nomi stampati con ciclo for');
for (var i = 0; i < nomi.length; i++) {
    console.log(nomi[i]);
}

console.log('nomi stampati con ciclo while');
var posizione = 0;
while (posizione < nomi.length) {
    console.log(nomi[posizione]);
    posizione++;
}

// Stampare a schermo una lista della spesa
var spesa = ['latte', 'pane', 'burro', 'caffè', 'birra'];
console.log(spesa);

console.log('lista della spesa stampata con ciclo for');
for (var i = 0; i < spesa.length; i++) {
    console.log(spesa[i]);
}

console.log('lista della spesa stampata al contrario con ciclo while');
// per stampare al contrario devo parite dalla fine e arrivare all'inizio
// la prima posizione è 0 e l'ultima è (length - 1)
var indice = spesa.length - 1;
while (indice >= 0) {
    console.log(spesa[indice]);
    // decremento l'indice per andare a retroso e arrivare a 0
    indice--;
}
