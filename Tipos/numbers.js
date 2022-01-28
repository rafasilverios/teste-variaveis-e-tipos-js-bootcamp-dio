var num1 = 100; // variável number não precisa de aspas
var num2 = 2

let calc1 = num1 + (num2 * num1);
let calc2 = (num1 + num2) * num1;

let resultado1 = `O calculo: ${num1} + (${num2} x ${num1}) é igual a ${calc1}.`;
let resultado2 = `O calculo: (${num1} + ${num2}) x ${num1} é igual a ${calc2}.`;

console.log(resultado1);
console.log(resultado2);