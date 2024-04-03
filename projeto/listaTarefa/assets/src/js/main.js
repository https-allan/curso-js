const tarefaInput = document.querySelector('.task-input');
const adicionarTarefaBotao = document.querySelector('.add-task-btn');
const tarefaLista = document.querySelector('.task-list');


function criarTagLi() {
    const li = document.createElement('li');

    return li;
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const button = document.createElement('button');

    button.innerHTML = 'deletar';
    button.setAttribute('class', 'btn-apagar');
    li.appendChild(button)
}

function criarTarefa(textoInput) {
    const li = criarTagLi();

    li.innerText = textoInput;

    tarefaLista.appendChild(li);

    criarBotaoApagar(li);
    limpar();
    salvaDadosLocalStorage();
}

function limpar() {
    tarefaInput.value = '';
    tarefaInput.focus();
}

function salvaDadosLocalStorage() {
    const liTarefa = document.querySelectorAll('li');
    const listaDeTarefa = [];

    for (let tarefa of liTarefa) {
        listaDeTarefa.push(tarefa.innerText.replace('Apagar', '').trim())

        const tarefasJson = JSON.stringify(listaDeTarefa);
        localStorage.setItem('tarefas', tarefaJson);
    }

}

adicionarTarefaBotao.addEventListener('click', function () {
    if (!tarefaInput.value) return;

    criarTarefa(tarefaInput.value);
})

document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('btn-apagar')) {
        element.parentElement.remove()
    }
})