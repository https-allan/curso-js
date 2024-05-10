// Factory function (Função fábrica)
// Constructor function (Funcão construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");

      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");

      console.log(valor);
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;

      return indice.toFixed(2);
    },
  };
}

const pessoa = criaPessoa("Allan", "Sampaio", 1.72, 62);

pessoa.nomeCompleto = "Allan José de oliveira sampaio";

console.log(pessoa.nomeCompleto);
console.log(pessoa.imc);
