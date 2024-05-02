const souUmDado = function() {
    console.log('Sou um dado.');
}

function executaFuncao(funcao) {
    console.log('Vou executar a função abaixo:')
    funcao();
}

executaFuncao(souUmDado);