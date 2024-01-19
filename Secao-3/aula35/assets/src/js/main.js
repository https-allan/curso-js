addEventListener('DOMContentLoaded', function () {
    const elementos = [
        { tag: 'p', texto: 'Exercício Executado com sucesso!' },
        { tag: 'div', texto: 'Fiz o exercício usando JavaScript para criar as tags.' },
        { tag: 'footer', texto: 'Aprender sempre é bom!' },
        { tag: 'section', texto: 'Estude não seja um procrastinador!' },
    ];

    const container = document.querySelector('.container');

    const div = document.createElement('div');

    for (let i = 0; i < elementos.length; i++) {
        const { tag, texto } = elementos[i];
        const criarTag = document.createElement(tag);

        criarTag.innerHTML = texto;

        div.appendChild(criarTag);
    }

    container.appendChild(div);
})