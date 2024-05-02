function criaMultiplicado(multiplicado) {
    return function multiplicacao(number) {
        return number * multiplicado;
    }
}

const duplica = criaMultiplicado(2);
const triplica = criaMultiplicado(3)
const quadriplica = criaMultiplicado(4)

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
