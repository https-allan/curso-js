const h1 = document.querySelector('h1');
const data = new Date();

function formatNumber(number) {
    return number >= 10 ? number : `0${number}`;
}

function getMonth(diaDoMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[diaDoMes];
}

function getDay (diaDaSemana) {
    const dias = ['Domingo', 'Segundo', 'Terça', 'Quarta', 'Quinta', 'Sext', 'Sábado'];

    return dias[diaDaSemana];
}

function createDate(data) {
    const diaSemana = getDay(data.getDay());
    const numeroMes = getMonth(data.getMonth());

    return `${diaSemana}, ${data.getDate()} de ${numeroMes} de ${data.getFullYear()} ${formatNumber(data.getHours())}:${formatNumber(data.getMinutes())}`
}

h1.innerHTML = createDate(data);
