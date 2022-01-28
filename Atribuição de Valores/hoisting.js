// hoisting é o termo usado quando atribuimos o valor de uma variável antes de declará-la ou até mesmo sem declarar.

numberOne = 1; // supõe-se que é uma variável global, por isso funciona sozinha, sem declarar "var"

console.log(numberOne + 2);

var numberOne;
// não funciona com "let". Tem que declarar antes
