// chiedo all'utente come si chiama
var nome_utente = prompt('come ti chiami?');

// verifico di aver letto l'input dell'utente stampando in console il contenuto dell variabile
console.log(nome_utente);

// inserisco nello span che ho predisposto nell'html il nome dell'utente
document.getElementById('nome').innerHTML = nome_utente;

// visualizzo l'intero saluto

// soluzione 1 (più veloce, meno elegante): aggiungo il display block con lo stile inline
// document.getElementById('nome-container').style.display = 'block';

// soluzione 2: (più elegante e preferibile): aggiungo una classe al tag h1 così il foglio di stile sovrascrive il display
document.getElementById('nome-container').setAttribute('class', 'visible');
