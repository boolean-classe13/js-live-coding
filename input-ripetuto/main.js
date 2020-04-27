// Chiedere un numero tra 1 e 5 all'utente e ripetere la richiesta finché l'input non è corretto


// procedimento A: ciclo do-while (più naturale)
do {
    var numero = parseInt(prompt('inserisci un numero tra 1 e 5'));
    console.log(numero);
    if(isNaN(numero)) {
        alert('non hai inserito un numero');
    } else if(numero < 1) {
        alert('hai inserito un numero fuori range (< 1)');
    } else if(numero > 5) {
        alert('hai inserito un numero fuori range (> 5)');
    } else {
        alert('va bene!')
    }
} while(isNaN(numero) || numero < 1 || numero > 5);
// a questo punto posso assumere con certezza che la variabile numero contiene un numero intero tra 1 e 5
console.log('hai inserito un numero corretto: ' + numero);


// // procedimento B: ciclo while (alternativo ad A)
// // dichiaro la variabile numero prima di entrare nel ciclo for
// var numero;
// while(isNaN(numero) || numero < 1 || numero > 5) {
//     numero = parseInt(prompt('inserisci un numero tra 1 e 5'));
//     console.log(numero);
//     if(isNaN(numero)) {
//         alert('non hai inserito un numero');
//     } else if(numero < 1) {
//         alert('hai inserito un numero fuori range (< 1)');
//     } else if(numero > 5) {
//         alert('hai inserito un numero fuori range (> 5)');
//     } else {
//         alert('va bene!')
//     }
// }
// // a questo punto posso assumere con certezza che la variabile numero contiene un numero intero tra 1 e 5
// console.log('hai inserito un numero corretto: ' + numero);


// // procedimento C: ciclo for (poco naturale, forzatura)
// // dichiaro la variabile numero prima di entrare nel ciclo for
// var numero;
// for (var i = 1; isNaN(numero) || numero < 1 || numero > 5; i++) {
//     // posso utilizzare il contatore per comunicare all'utente i tentativi
//     var numero = parseInt(prompt('inserisci un numero tra 1 e 5 (tentativo n: ' + i +')'));
//     console.log(numero);
//     if(isNaN(numero)) {
//         alert('non hai inserito un numero');
//     } else if(numero < 1) {
//         alert('hai inserito un numero fuori range (< 1)');
//     } else if(numero > 5) {
//         alert('hai inserito un numero fuori range (> 5)');
//     } else {
//         alert('va bene!')
//     }
// }
// // a questo punto posso assumere con certezza che la variabile numero contiene un numero intero tra 1 e 5
// console.log('hai inserito un numero corretto: ' + numero);
