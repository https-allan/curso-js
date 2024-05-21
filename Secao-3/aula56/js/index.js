const display = document.querySelector(".display");

function criarCalculadora() {
  return {
    press(number) {
      display.value += number;
    },

    inicia() {
      press();
    },
  };
}

const calculadora = criarCalculadora();
calculadora.inicia()

document.addEventListener("DOMContentLoaded", function () {
  display.value = "";
});
