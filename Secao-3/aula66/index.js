const numeros = [73, 45, 12, 67, 89, 23, 54, 91, 33, 77];

const total = numeros.reduce((acumulador, valor, indice, array) => {
  if (valor % 2 !== 0) {
    console.log("impar " + valor);
  } else {
    console.log("par " + valor);
  }
  return acumulador;
}, []);
