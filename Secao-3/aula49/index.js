function conta(operado, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operado === "+") acumulador += numero;
    if (operado === "-") acumulador -= numero;
    if (operado === "/") acumulador /= numero;
    if (operado === "*") acumulador *= numero;
  }
  console.log(acumulador);
}

conta("+", 1, 10, 20, 30);
