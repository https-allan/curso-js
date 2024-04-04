const tarefaInput = document.querySelector('.task-input');
const adicionarTarefaBotao = document.querySelector('.add-task-btn');
const tarefaLista = document.querySelector('.task-list');


function criarTagLi() {
    const li = document.createElement('li');

    return li;
}

function criarBotaoApagar(li) {
    const buttonExcluir = document.createElement('img');
    buttonExcluir.src = '/projeto/listaTarefa/assets/img/excluir.png';

    buttonExcluir.addEventListener('mouseleave', function () {
        buttonExcluir.src = '/projeto/listaTarefa/assets/img/excluir.png';
    });

    buttonExcluir.addEventListener('mouseenter', function () {
        buttonExcluir.src = '/projeto/listaTarefa/assets/img/excluir2.png';
    });

    buttonExcluir.setAttribute('class', 'btn-apagar');

    li.appendChild(buttonExcluir);
}

function criarTarefa(textoInput) {
    const li = criarTagLi();

    li.classList.add('task-item');
    li.innerText = textoInput;

    tarefaLista.appendChild(li);

    criarBotaoApagar(li);
    limparCampo();
    salvaDadosLocalStorage();
}

function limparCampo() {
    tarefaInput.value = '';
    tarefaInput.focus();
}

function salvaDadosLocalStorage() {
    const liTarefa = document.querySelectorAll('li');
    const listaDeTarefa = [];

    for (let tarefa of liTarefa) {
        listaDeTarefa.push(tarefa.innerText.replace('deletar', '').trim())
    }
    const tarefasJson = JSON.stringify(listaDeTarefa);
    localStorage.setItem('tarefas', tarefasJson);

}

function adicionarTarefaSalva() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefa = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefa) {
        criarTarefa(tarefa);
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
        salvaDadosLocalStorage();
    }
})

adicionarTarefaSalva();