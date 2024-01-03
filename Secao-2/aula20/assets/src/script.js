function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    form.addEventListener('submit', function (event) {
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        event.preventDefault();

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });

        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;

    });
} meuEscopo();