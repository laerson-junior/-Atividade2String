// Função que corta um texto em partes separadas por espaços
function cortatexto(separa) {
    // O método .split(' ') divide a string onde tem espaços
    // e retorna como um array com as partes separadas
    return separa.split(' ');
}


console.log(cortatexto("laerson junior")); 
// Mostra ["laerson", "junior"] - separou os dois nomes

console.log(cortatexto("para lele pipe do")); 
// Mostra ["para", "lele", "pipe", "do"] - ou seja ele separou todas as palavras