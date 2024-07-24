const number1 = [1, 2, 3];
const number2 = [4, 5, 6];

const concatenar = number1.concat(number2, [7, 8, 9]);

const number3 = [...number1, "Allan", ...number2, ...[7, 8, 9]];
console.log(number3);
