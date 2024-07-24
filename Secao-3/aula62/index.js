const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];

// nomes.splice(indice atual, quatidade de items para deleta, elem1, elem2, elem3)

const removidos = nomes.splice(3, 2, "Allan", "Julia");

console.log(nomes, `Removidos: ${removidos}`);
