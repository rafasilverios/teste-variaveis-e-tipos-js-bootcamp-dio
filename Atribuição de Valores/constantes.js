/* 
- declarada em SNAKE_UPPER_CASE
- escopo de bloco
- não faz hoisting
- não pode ser reatribuída e nem redeclarada
*/

const FIRST_NAME = "Rafael";
var lastName = "Silverio"

if (FIRST_NAME === "Rafael") {
    let lastName = "Santos";
    console.log(FIRST_NAME, lastName);
}

console.log(FIRST_NAME, lastName);