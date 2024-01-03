let numero = Number(prompt('Digite um número'));

const numeroTitulo = document.querySelector('#numero-titulo');
const raizQuadrada = document.querySelector('#raiz-quadrada');
const inteiro = document.querySelector('#inteiro');
const eNaN= document.querySelector('#e-nan');

const arredondaParaBaixo = document.querySelector('#arredonda-para-baixo');
const arredondaParaCima = document.querySelector('#arredonda-para-cima');
const duasCasasdecimais = document.querySelector('#duas-casas-decimais');

numeroTitulo.innerHTML =  numero;
raizQuadrada.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
eNaN.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`;
arredondaParaBaixo.innerHTML = `<p>Arredonda para baixo: ${Math.floor(numero)}</p>`;
arredondaParaCima.innerHTML = `<p>Arredonda para cima: ${Math.ceil(numero)}</p>`;
duasCasasdecimais.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`