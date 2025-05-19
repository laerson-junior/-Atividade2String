/**
 * Função que verifica se um texto está vazio, contém apenas espaços em branco
 * ou é nulo/undefined. Retorna true, false se contiver qualquer valor ou string dentro.
 */

function taVazio(texto) {
    return !texto || texto.trim().length === 0;
}

// Testes
console.log(taVazio(''));       // verdadeiro pois dentro do seu espaço está vazio
console.log(taVazio('   '));    // verdadeiro novamente
console.log(taVazio('tem coisa dentro'));  // false
console.log(taVazio(' abc123 '));    // false pois possui string dentro