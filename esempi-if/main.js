var numero = 6;
console.log('numero iniziale = ' + numero);

// nelle condizioni if bisogna utilizzare il doppio "=" per verificare le uguaglianze
// il simbolo "=" usato singolarmente significa *assegnazione*
if(numero = 5) { /* questo è un ERRORE logico: sto assegnando il valore 5 alla variabile numero anziché verificare se contiene 5! */
    console.log('il numero è = 5');
} else {
    console.log('il numero è diverso da 5');
}
console.log(numero);

numero = 6; /* reimposto il numero = 6 per i prossimi esempi */
console.log('numero iniziale = ' + numero);
if(numero == 5) {
    console.log('il numero è = 5');
} else {
    console.log('il numero è diverso da 5');
}

// il doppio "=" controlla solo i valori, quindi è possibile che un numero sia uguale ad una stringa!
if(numero == '6') {
    console.log('il numero 6 è uguale alla stringa "6"');
} else {
    console.log('i due valori sono diversi');
}

// anche "!=" controlla solo che i valori siano diversi, non ha importanza il tipo
if(numero != '6') {
    console.log('i due valori sono diversi');
} else {
    console.log('il numero 6 è uguale alla stringa "6"');
}

// il triplo "=" controlla che sia il valore che il tipo coincia
// quindi una stringa sarà sempre diversa da un numero, anche se il contenuto è lo stesso
if(numero === '6') {
    console.log('il numero 6 è uguale alla stringa "6"');
} else {
    console.log('i due valori o il loro tipo sono diversi');
}

// il "!==" è l'opposto di "===", quindi è sufficiente che il valore o il tipo siano diversi
if(numero !== '6') {
    console.log('i due valori o il loro tipo sono diversi');
} else {
    console.log('il numero 6 è uguale alla stringa "6"');
}
