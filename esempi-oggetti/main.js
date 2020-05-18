// creo un oggetto studente indicando le proprietà: nome, cognome e età
var studente = {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'eta': 30
};

// modifico il valore di una proprietà
studente.eta = 40;
// aggiungo una nuova proprietà
studente.matricola = 'ABC123';

console.log('Ecco i dati di uno studente:');
// stampo tutte le proprietà dell'oggetto
for (var key in studente) {
    console.log(key + ': ' + studente[key]);
}

// creo un array di oggetti di studenti (ognuno ha il proprio nome, cognome e età)
var studenti = [
    {
        'nome': 'Gianni',
        'cognome': 'Neri',
        'eta': 31
    },
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 30
    },
    {
        'nome': 'Luigi',
        'cognome': 'Verdi',
        'eta': 32
    }
];

// chiedo all'utente i dati per creare un nuovo oggetto studente (nome, cognome e età)
var nome_input = prompt('Inserisci il nome');
var cognome_input = prompt('Inserisci il cognome');
var eta_input = parseInt(prompt('Inserisci età'));

// creo un oggetto studente con i dati inseriti dall'utente
var nuovo_studente = {
    'nome': nome_input,
    'cognome': cognome_input,
    'eta': eta_input
};
// console.log(nuovo_studente);

// inserisco il nuovo oggetto nell'array di tutti gli studenti
studenti.push(nuovo_studente);

console.log('Elenco di tutti gli studenti (nome e cognome):');
// ciclo tutti gli oggetti che sono presenti nell'array studenti
for (var i = 0; i < studenti.length; i++) {

    // recupero lo studente corrente (che è un oggetto!)
    var studente_corrente = studenti[i];
    // stampo il nome e il cognome dello studente corrente
    console.log(studente_corrente.nome + ' ' + studente_corrente.cognome);

    // alternativa per stampare solo il nome e il cognome:
    // ciclo tutte le proprietà dell'oggetto studente
    // e solo se si tratta di nome o cognome ne stampo il valore
    // for (var key in studente_corrente) {
    //     if(key == 'nome' || key == 'cognome') {
    //         console.log(studente_corrente[key]);
    //     }
    // }

    // aggiungo ad ogni studente la proprietà "matricola" con un numero incrementale
    studente_corrente.matricola = 'XYZ00' + i;
    console.log('-> tutti i dati dello studente corrente con nuova matricola inserita dinamicamente:');
    console.log(studente_corrente);
}
