// Filter, map, reduce

const numeros = [12, 45, 67, 23, 89, 34, 56, 78, 90, 21];

const obterNumerosMaiorQue10 = numeros.filter((numero) => numero > 10);

const pessoas = [
  { nome: "Fernando", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Letícia", idade: 60 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const filterPessoas = pessoas
  .filter((person) => person.nome.length > 5)
  .filter((person) => person.idade >= 50)
  .filter((person) => person.nome.slice(-1) === "a");

console.log(filterPessoas);
