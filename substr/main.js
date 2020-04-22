var data = new Date();

var anno = data.getFullYear();
console.log(anno); // 2020

// l'anno restituito dalla funzione "getFullYear()" è un numero intero
// per usare substr devo trasformarlo in stringa
var anno_string = anno.toString();

// estraggo dalla stringa "2020" le ultime due cifre
// N.B.: i numeri delle posizioni all'interno delle stringhe partono da 0 e non da 1!
var anno2 = anno_string.substr(2);
console.log(anno2);
