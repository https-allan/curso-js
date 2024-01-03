// Não podemos criar constantes com palavras reservadas
// Constantes precisa ter nome significativos
// Não pode começar constante com número
// Não pode contém espaço o traço
// Utilizamos camelCase
// Não pode modificar o valor de uma constante

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;

resultadoTriplicado = resultado + 5;

console.log(resultaDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero + segundoNumero);

console.log(typeof primeiroNumero);