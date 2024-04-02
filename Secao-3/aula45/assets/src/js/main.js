const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.reiniciar');

let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    }
    );
}

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');

        clearInterval(timer);
        iniciarRelogio()
    } 
    if(elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado');

        clearInterval(timer);
    } 
    if(elemento.classList.contains('reiniciar')) {
        relogio.classList.remove('pausado');

        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    } 
})