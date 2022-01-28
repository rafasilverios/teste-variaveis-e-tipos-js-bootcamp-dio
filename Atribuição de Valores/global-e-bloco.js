// ver comentários de linha para compreender
// diferença entre var e let

var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // O escopo é global
    let b = 22; // o escopo está dentro de um bloco

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2