/*** esempio 1: lavorare con gli array ***/
//             0        1          2
var nomi = ['pippo', 'pluto', 'paperino'];

console.log(nomi);
console.log(nomi[0]); // pippo
console.log(nomi[1]); // pluto
console.log(nomi[2]); // paperino
console.log(nomi[3]); // undefined
console.log('numero elementi: ' + nomi.length);

// chiedo il nome all'utente
var nome_utente = prompt('come ti chiami?');
// inserisco il nome dell'utente nell'array
nomi.push(nome_utente); // es: nomi.push('topolino');

console.log('inserito nome utente');
console.log(nomi[0]); // pippo
console.log(nomi[1]); // pluto
console.log(nomi[2]); // paperino
console.log(nomi[3]); // nome utente
console.log('numero elementi: ' + nomi.length);
console.log(nomi);

// sovrascrivo il valore dell'elemento in posizione 0
console.log('modifico il primo elemento');
nomi[0] = 'ciao';
console.log('il primo elemento dell\'array ora contiene: ' + nomi[0]); // ciao


/*** esempio 2: creare un array a partire da variabili ***/
// var nome1 = 'lucia';
// var nome2 = 'francesco';
// var nome3 = 'silvio';
//
// var array = [nome1, nome2, nome3];
// console.log(array);
// console.log(array[0]); // lucia
// console.log(array[1]); // francesco
// console.log(array[2]); // silvio


/*** esempio 3: stampare tutti gli elementi di un array usando un ciclo for ***/
// var nomi = ["Luca", "Marco", "Paolo"];
// console.log('numero elementi array = ' + nomi.length);
// for (var i = 0; i < nomi.length; i++) {
//     console.log(nomi[i]);
// }

/*** esempio 4: chiedo 3 nomi all'utente e creo un array, poi con un ciclo for li stampo tutti ***/
// var nome1 = prompt('inserisci un nome');
// var nome2 = prompt('inserisci un nome');
// var nome3 = prompt('inserisci un nome');
// console.log(nome1);
// console.log(nome2);
// console.log(nome3);
//
// // inserisco i 3 nomi in un array
// var nomi = [];
// nomi.push(nome1);
// nomi.push(nome2);
// nomi.push(nome3);
// console.log(nomi);
//
// for (var i = 0; i < nomi.length; i++) {
//     console.log(nomi[i]);
// }
