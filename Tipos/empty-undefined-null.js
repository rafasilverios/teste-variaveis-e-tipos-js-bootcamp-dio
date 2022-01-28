// como boolean, retornam valor falso

// Empty: var declarada como zero; string declarada apenas aspas (sem valor); array declarada somente chaves (sem valor)
let abacaxi1 = "";
abacaxi1 = `No console, a variável "abacaxi1" aparecerá como espaço vazio, pois não foi daclarado um valor: "${abacaxi1}"`
console.log(abacaxi1);

// Null: quando propositalmente se quer que um valor não exista. Não foi inicializado.
let abacaxi = null;
let fruta = abacaxi; // fruta será "null" porque abacaxi foi declarado como "null"
console.log(fruta);

// Undefined: não foi declarado. Valor não existe
//let abacaxi;