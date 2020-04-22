// Quanti minuti mancano alla fine della lezione?

var minuti_ora = 60;

// scabilisco l'ora di fine della lezione = 13:00
var ora_fine_lezione = 13;
var minuti_fine_lezione = 0;
// converto l'ora in minuti => le 13:00 = 780 minuti (dalla mezzanotte)
var minuti_totali_fine_lezione = (ora_fine_lezione * minuti_ora) + minuti_fine_lezione;

// devo recuperare l'ora e i minuti attuali
var adesso = new Date();
var ora_attuale = adesso.getHours();
var minuti_attuali = adesso.getMinutes();
console.log(ora_attuale);
console.log(minuti_attuali);
// converto l'ora attuale in minuti => es: 12:30 => 750 minuti (dalla mezzanotte)
var minuti_totali = (ora_attuale * minuti_ora) + minuti_attuali;

// faccio la sottrazione: totale minuti fine lezione - totale minuti attuali
var minuti_mancanti = minuti_totali_fine_lezione - minuti_totali;
console.log('mancano ' + minuti_mancanti + ' minuti alla fine della lezione');
