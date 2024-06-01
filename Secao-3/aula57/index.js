// Função construtora retorna objetos
// Função fabrica cria objeto
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(`${this.nome}: sou um método`);
  };
}

const p1 = new Pessoa("Allan", "Sampaio");
const p2 = new Pessoa("Maria", "Ponce");

p1.metodo();
