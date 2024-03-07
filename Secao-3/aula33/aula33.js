const pessoa = {
    nome: 'Allan',
    sobrenome: 'Sampaio',
    idade: 15,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
const { endereco: { rua, numero } } = pessoa;

console.log(rua, numero);