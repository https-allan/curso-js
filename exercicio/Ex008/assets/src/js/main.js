const timer = document.querySelector('.timer');

let segundos = 0;

function formatNumber(number) {
    return number <= 10 ? `0${number}` : number;
}4

function iniciar() {
    segundos = setInterval(function () {
        segundos++

        timer.innerHTML = formatNumber(segundos)
    }, 1000)
} iniciar()

function pausar() {

}

function reiniciar() {

}