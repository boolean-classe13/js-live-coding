// chiedere all'utente quani anni ha
var anni_utente = prompt('Quanti anni hai? (inserisci un numero intero positivo)');

// chiedere all'utente se è maschio o femmina
var sesso = prompt('Sei maschio o femmina? (indica M o F)');

// recuperare l'anno corrente
var data_corrente = new Date();
var anno_corrente = data_corrente.getFullYear();

// fare la sottrazione tra l'anno corrente e gli anni dell'utente
var anno_nascita = anno_corrente - anni_utente;

if (sesso == 'M') {
    // la variabile contiene 'M' => l'utente ha detto di essere maschio
    // visualizzare l'anno di nascita con la frase al maschile
    document.writeln('Sei nato nel: ' + anno_nascita);
} else if(sesso == 'F') {
    // la variabile contiene F => l'utente ha detto di essere femmina
    // visualizzare l'anno di nascita con la frase al femminile
    document.writeln('Sei nata nel: ' + anno_nascita);
} else {
    // l'utente ha inserito qualcosa che non è né M né F
    // visualizzare una frase generica
    document.writeln('Anno di nascita: ' + anno_nascita)
}
