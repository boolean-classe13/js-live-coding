var frase = 'Lorem ipsum dolor sit amet';

// suddivido la frase su ogni simbolo  ' '
// => ottengo un array con le parole che compongono la frase (senza spazi)
var singole_parole = frase.split(' ');
console.log(singole_parole);

// ricompongo la frase utilizzando il simbolo ' ' come "collante"
// => ottengo una stringa con tutte le parole separate da spazio
var frase_ricomposta = singole_parole.join(' ');
console.log(frase_ricomposta);
