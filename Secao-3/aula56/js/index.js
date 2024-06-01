const display = document.querySelector(".display");

function press(n) {
  display.value += n;
}
function calculate() {
  const resultado = eval(display.value)
  display.value += resultado;
}

const calculadora = criarCalculadora();

document.addEventListener("DOMContentLoaded", function () {
  display.value = "";
});
