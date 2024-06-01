function Calculadora() {
  this.display = document.querySelector(".display");

  press = (number) => {
    this.display.value += number;
  };

  clearDisplay = () => {
    this.display.value = "";
  };

  del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  calculate = () => {
    try {
      this.display.value = eval(this.display.value);
    } catch (e) {
      this.display.value = "Erro";
    }
  };
}

const calculadora = new Calculadora();
