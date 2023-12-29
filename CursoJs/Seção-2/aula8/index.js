const nome = 'Allan José';
const sobreNome = 'Oliveira';

const idade = 15;
const peso = 62;
const alturaEmM = 1.70;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu indiceMassaCorporal é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}`);