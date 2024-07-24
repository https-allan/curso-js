const numeros = [12, 45, 67, 23, 89, 34, 56, 78, 90, 21];

const doubleNumber = numeros.map((double) => double * 2);

const pessoas = [
  { nome: "Fernando", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Letícia", idade: 60 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const objectPerson = pessoas.map((person, index) => {
  return {
    id: index + 1,
    nome: person.nome,
    idade: person.idade
  }
});

console.log(JSON.stringify(objectPerson, null, 2));
