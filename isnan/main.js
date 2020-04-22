var eta = parseInt(prompt('Quanti anni hai?'));
console.log('hai inserito: ' + eta);

if(isNaN(eta)) {
    // la variabile eta contiene un valore che non è un numero intero
    console.log('non hai inserito un numero intero!');
    // non posso fare alcuna valutazione sull'età inserita
} else {
    // la variabile eta contiene un numero intero
    console.log('hai inserito un numero intero corretto.');

    // posso fare le valutazioni sull'età inserita
    if(eta >= 18) {
        console.log('puoi guidare');
    } else {
        console.log('non puoi guidare');
    }
}

// la funzione isNaN restutuisce true se ciò che inserisco tra le parentesi NON è un numero
// per verificare che una variabile contenga un numero, la funzione isNaN deve restituire false!
if(isNaN(eta) == false) { // equivalente a if( !isNaN(eta) )
    // non è vero che non è un numero => è un numero
    // la variabile eta contiene un numero intero
    console.log('hai inserito un numero intero corretto.');

    // posso fare le valutazioni sull'età inserita
    if(eta >= 18) {
        console.log('Puoi guidare');
    } else {
        console.log('non puoi guidare');
    }
} else {
    // è vero che non è un numero => non è un numero!
    // la variabile eta contiene un valore che non è un numero intero
    console.log('non hai inserito un numero intero!');
    // non posso fare alcuna valutazione sull'età inserita
}
