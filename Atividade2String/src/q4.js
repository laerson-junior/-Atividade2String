function cortarTexto(palavra, quantidade) {
    return palavra.substring(0, quantidade);
}


console.log(cortarTexto("pao doce", 3)); //  "pao" a 
console.log(cortarTexto("bambu", 2));    // "ba"
console.log(cortarTexto("eae", 3));      // "eae"