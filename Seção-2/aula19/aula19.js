/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbols) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

let a = [1, 2, 3];
let b = a;


console.log(a, b)

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);5