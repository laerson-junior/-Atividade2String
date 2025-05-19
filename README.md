# -Atividade2String
# questão1
>essa Função foi criada para verifica se um valor é do tipo String

### function éString(valor) {
    >o  typeof se usa pra checar se o tipo do valor é 'string'
    return typeof valor === 'string';
}

>Testando esta função com diferentes valores ou tipos:

>Teste com string - retorna verdadeiro pois o motivo da função ser criado pra ver se o valor é string ou não

### console.log(éString('oi'));  >da verdadeiro porque  "oi" é uma string

> Teste com número - retorna devido nao ser uma string
### console.log(éString(123));   > false

## questao2

  >Função que verifica se um texto está vazio, contém apenas espaços em branco
  >ou é nulo/undefined. Retorna true, false se contiver qualquer valor ou string dentro.
 

### function taVazio(texto) {
    return !texto || texto.trim().length === 0;}

>Testes
### console.log(taVazio(''));       >verdadeiro pois dentro do seu espaço está vazio
### console.log(taVazio('   '));    >verdadeiro novamente
### console.log(taVazio('tem coisa dentro'));  >false
### console.log(taVazio(' abc123 '));    >false pois possui string dentro

# questão 3
>Função que corta um texto em partes separadas por espaços
### function cortatexto(separa) {
    >O método .split(' ') divide a string onde tem espaços
    // e retorna como um array com as partes separadas
    return separa.split(' ');
}
### console.log(cortatexto("laerson junior")); 
>Mostra ["laerson", "junior"] - separou os dois nomes

console.log(cortatexto("para lele pipe do")); 
>Mostra ["para", "lele", "pipe", "do"] - ou seja ele separou todas as palavras

# questão 4
>function cortarTexto
### function cortarTexto(palavra, quantidade) {
    return palavra.substring(0, quantidade);
}
## console.log(cortarTexto("pao doce", 3));  a saida fica "pao" 
  ##  console.log(cortarTexto("bambu", 2));  > a saida ficou "ba"
  ## console.log(cortarTexto("eae", 3));  >"a saida ficou eae"

# questão 5

  ABREVIA NOMES - Mantém o primeiro nome completo e abrevia o último
  Exemplo: "Maria Silva" → "Maria S."
 *
  param {string} nome - Nome completo a ser abreviado
  returns {string} Nome no formato abreviado
 /
function abreviador(nome) {
    >Divide o nome em partes separadas por espaço
    ## let partes = nome.split(' ');
    
    > Pega o primeiro nome
    let primeiroNome = partes[0];
    
    > Se só tiver um nome, retorna ele mesmo
    if (partes.length === 1) {
        return primeiroNome;
    }
    
    > Pega a primeira letra do último nome
    ## let ultimaLetra = partes[partes.length - 1][0];
    
     >Retorna primeiro nome + inicial do último
    return primeiroNome + ' ' + ultimaLetra + '.';
}

## console.log(abreviador("laerson Junior"));  // "laerson J."
## console.log(abreviador("laerson Mendes")); // "laerson M."
## console.log(abreviador("Ana"));            // "Ana" (único nome)
