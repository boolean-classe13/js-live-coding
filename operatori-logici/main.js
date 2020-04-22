var eta = prompt('Quanti anni hai?');

// procedimento A
if(eta >= 18 && eta < 90) {
    // solo se hai più di 18 anni e meno di 90 anni puoi guidare
    console.log('puoi guidare');
} else if(eta < 18) {
    // la prima if è false
    // => verifico se era falsificata dalla prima condizione
    // caso in cui (eta >= 18) == false => l'età è < 18
    console.log('non puoi ancora guidare');
} else {
    // la prima if è falsa ed era falsificata dalla seconda condizione
    // caso in cui (eta < 90) == false => l'età è >= 90
    console.log('non puoi più guidare');
}

// procedimento B
if(eta < 18) {
    // l'età inserita è < 18 => minorenne
    console.log('non puoi ancora guidare');
} else if(eta >= 90) {
    // l'età inserita non è < 18
    // l'età inserita é >= 90 => anziano
    console.log('non puoi più guidare');
} else {
    // l'età inserita non è <18 né >= 90 => età ok per guidare
    console.log('puoi guidare');
}
