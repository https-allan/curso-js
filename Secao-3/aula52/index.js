function returnaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
}

const funcao = returnaFuncao()
console.log(funcao)