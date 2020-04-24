// funzione per fare la somma di due numeri e stampare il risultato
function sommaNumeri(num1,num2) {
    var somma = num1 + num2;
	console.log('la somma di ' + num1 + ' e ' + num2 + ' vale: ' + somma);
}

sommaNumeri(2, 5);


/**********************************/


// funzione per generare un numero random in un intervallo arbitrario
function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

// attraverso un ciclo for, genero 5 numeri casuali, sfruttando la funzione generaRandom
for (var i = 0; i < 5; i++) {
    var numeroGenerato = generaRandom(1, 100);
    console.log('numero random tra 1 e 100: ' + numeroGenerato);
}
