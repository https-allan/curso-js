const taskButton = document.querySelector('.add-task-btn');
const newTaskInput = document.querySelector('.new-task-input');
const taskList = document.querySelector('.task')

function createLi() {
     const li = document.createElement('li');

     return li;
}

function createButtonDelete(li) {
     li.innerText += ' ';

     const button = document.createElement('button');

     button.innerText = 'Apagar';

     button.setAttribute('class', 'apagar')
     li.appendChild(button);
}

function createTask(textInput) {
     const li = createLi()

     li.innerText = textInput;

     taskList.appendChild(li);

     clearInput();
     createButtonDelete(li);
     saveTask();
}

function clearInput() {
     newTaskInput.value = '';

     newTaskInput.focus();
}

taskButton.addEventListener('click', function () {
     if (!newTaskInput.value) return;


     createTask(newTaskInput.value);
})

document.addEventListener('click', function(e) {
     const elemento = e.target;

     if(elemento.classList.contains('apagar')){
          elemento.parentElement.remove();
          saveTask();
     }
})

function saveTask() {
     const liTask = taskList.querySelectorAll('li')
     const listaDeTarefas = [];

     for (let tarefa of liTask){
          listaDeTarefas.push(tarefa.innerText.replace('Apagar', '').trim());
     }
     const tarefasJson = JSON.stringify(listaDeTarefas);
     localStorage.setItem('tarefas', tarefasJson);
}

function addTaskSaves() {
     const tarefas = localStorage.getItem('tarefas');
     const listaDeTarefas = JSON.parse(tarefas)

     for (let tarefa of listaDeTarefas) {
          createTask(tarefa);
     }
}

addTaskSaves();