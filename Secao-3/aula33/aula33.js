const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const { nome, sobrenome, ...rest } = pessoa;

console.log(nome, sobrenome);
console.log(rest);