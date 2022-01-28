// Palindromo: frase ou palavra que se pode ler, indefinidamente, da esquerda para a direita ou vice-versa
// Ex.: ROMA ME TEM AMOR


// solução 1
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//solução 2
// omo
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    } // length / 2 pois será percorrido apenas metae do loop
    return true;
}

console.log(verificaPalindromo("aibofobia"));
console.log(verificaPalindromo2("aibofobia"));