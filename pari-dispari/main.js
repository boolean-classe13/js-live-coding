// genero un numero casuale tra 1 e 10
var numero = Math.floor(Math.random() * 10) + 1;
console.log(numero);

// valuto se è pari o dispari e stampo un messaggio appropriato

// procedimento:
// calcolo il resto della divisione per 2 => operatore % (modulo)
// se il resto è 0 => il numero è pari
// altrimenti (il resto è 1) => il numero è dispari
var resto = numero % 2;

// soluzione A
if(resto == 0) {
    console.log('il numero è pari');
} else {
    console.log('il numero è dispari');
}

// soluzione B
if(resto != 1) {
    console.log('il numero è pari');
} else {
    console.log('il numero è dispari');
}
