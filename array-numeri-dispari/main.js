// Crea un array di numeri, e stampa solo i numeri dispari
var numeri = [4, 1, 7, 130, 11, 32];
console.log(numeri);

for (var i = 0; i < numeri.length; i++) {
    // estraggo il numero corrente
    var numero_corrente = numeri[i];
    console.log('numero iterazione corrente = ' + numero_corrente);
    // calcolo il resto della divisione per 2
    var resto = numero_corrente % 2;
    console.log('resto della divisione per 2 = ' + resto);
    // se resto è = 1 => numero dispari => lo stampo
    if(resto == 1) {
        console.log(numero_corrente);
    } else {
        // il numero è pari => non lo stampo (la else si può omettere)
    }

}
