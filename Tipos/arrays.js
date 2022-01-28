// array é o mesmo que vetores
// listas interáveis de elementos
// índice sempre começa com 0

let array = [];

array.push(3); // adicionando num 3 ao índice 0
array.push(2); // adicionando num 2 ao índice 1
console.log(array);


array.pop(); // retira o último elemento do array 
console.log(array);


array.push(2); // retornando 2
array.push(5); // adicionando 5
array.shift(); // retira o primeiro elemento
console.log(array);

array.unshift(1); // adiciona elemento ao ìndice 1
console.log(array);

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}


array.reverse();
console.log(array);