//  essa Função foi criada para verifica se um valor é do tipo String
function éString(valor) {
    //  o  typeof se usa pra checar se o tipo do valor é 'string'
    return typeof valor === 'string';
}

// Testando esta função com diferentes valores ou tipos:

// Teste com string - retorna verdadeiro pois o motivo da função ser criado pra ver se o valor é string ou não

console.log(éString('oi'));  // da verdadeiro porque  "oi" é uma string

// Teste com número - retorna devido nao ser uma string
console.log(éString(123));   // false

