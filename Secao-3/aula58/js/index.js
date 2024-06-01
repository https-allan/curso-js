function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        calculate();
        return;
      }
    });
  };

  press = (number) => {
    this.display.value += number;
    this.display.focus();
  };

  clearDisplay = () => {
    this.display.value = "";
  };

  del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  calculate = () => {
    try {
      const conta = eval(this.display.value.replace('X', '*'));

      if (!conta) {
        alert("Conta inválida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  this.inicia = () => {
    this.capturaEnter();
  };
}

const calculadora = new Calculadora();

calculadora.inicia();
