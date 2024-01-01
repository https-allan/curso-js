/*
 * Operadores Aritmético
 * +  -> Adição / Concatenação
 * ** -> Potenciação
 * %  -> Resto da divisão
 * /  -> Divisão
 * *  -> Multiplicação
*/

/* 
  * Orde de precendência
  * ()
  * **
  * * / %
  * + -
  *  
*/

const number1 = 5;
const number2 = 2;
const number3 = 10;

console.log((number1 + number2) * number3);

/*
 * Incremento = ++
 * Decremento = --
*/

let contador = 10;

console.log(contador++);

/*
  * NaN -> Not a number parseInt(inteiro), parseFloat(decimais)
*/
const num1 = 10;
const num2 = Numbe('5.2');

console.log(num1 + num2);
console.log(typeof num2);