const nome = prompt('Digite seu nome');

document.body.innerHTML = `<center>O seu nome é ${nome}</center>`;
document.body.innerHTML += `<center>Seu nome tem ${nome.length} letras<br></center>`;
document.body.innerHTML += `<center>A segunda letra do seu nome é: ${nome[1]}<br></center>`;
document.body.innerHTML += `<center>Qual o primeiro índice da letra "A" no seu nome? ${nome.indexOf('a')}<br></center>`;
document.body.innerHTML += `<center>Qual o último índice da letra á no seu nome? ${nome.lastIndexOf('a')}<br></center>`;
document.body.innerHTML += `<center>As última 3 letras do seu nome são: ${nome.slice(-3, nome.length)}<br></center>`;
document.body.innerHTML += `<center>As palavras do seu nome são: ${nome.split(' ')}<br></center>`;
document.body.innerHTML += `<center>Seu nome com letra maiúscula: ${nome.toUpperCase()}<br></center>`;
document.body.innerHTML += `<center>Seu nome com letra minúscula: ${nome.toLowerCase()}<br></center>`; 