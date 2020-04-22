// stampo i numeri da 0 a 3
for(var i = 0; i < 3; i++) {
    console.log(i);
}

// passaggi del ciclo for:
// i = 0 (inizializzazione della variabile contatore)
// i < 3 ? (0 < 3) ? sì (controllo della condizione di permanenza del ciclo)
// esegue le istruzioni nel corpo del ciclo
// i = i + 1 => i = 1 (incremento della variabile contatore)
// i < 3 ? (1 < 3) ? sì (controllo della condizione di permanenza del ciclo)
// esegue le istruzioni nel corpo del ciclo
// i = i + 1 => i = 2 (incremento della variabile contatore)
// i < 3 ? (2 < 3) ? sì (controllo della condizione di permanenza del ciclo)
// esegue le istruzioni nel corpo del ciclo
// i = i + 1 => i = 3 (incremento della variabile contatore)
// i < 3 ? (3 < 3) ? no (controllo della condizione di permanenza del ciclo)
// esce dal ciclo


// // Stampa tutti i numeri da 0 a 1000
// for(var numero = 0; numero < 1001; numero++) {
//     console.log(numero);
// }
// // N.B.: quando si esce dal ciclo, la variabile contatore esiste ancora
// // e contiene un valore che ha reso falsa la condizione di permanenza nel ciclo
// // in questo esempio, ha una unità in più rispetto al numero finale che si voleva stampare
// console.log('variabile numero fuori dal ciclo ' +  numero);

// // Stampa tutti i numeri da 1000 a 0
// for(var numero2 = 1000; numero2 >= 0; numero2--) {
//     console.log(numero2);
// }

// // chiedo un numero all'utente
// var numero_utente = prompt('quante volte vuoi ripetere il ciclo');
// console.log('numero inserito = ' + numero_utente);
// // il ciclo continua ad eseguire finché non si raggiunge il numero inserito dll'utente
// for(var i = 0; i < numero_utente; i++) {
//     console.log(i);
// }
