function abreviador(nome) {
    let partes = nome.split(' ');
    let primeiroNome = partes[0];
    if (partes.length === 1) {
    return primeiroNome;
    }
    let ultimaLetra = partes[partes.length - 1][0];
    return primeiroNome + ' ' + ultimaLetra + '.';
}


console.log(abreviador("laerson Junior")); 
console.log(abreviador("laerson Mendes"));