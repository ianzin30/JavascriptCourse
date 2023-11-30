const h1 = document.querySelector('.background .layout');

const date = new Date();
const numerodia = date.getDate();
const dia = date.getDay();
const mes = date.toLocaleString('default', { month: 'long' }); // Get the month as a string
const ano = date.getFullYear(); // Get the full year

let diaSemana;

switch (dia) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda';
        break;
    case 2:
        diaSemana = 'Terça';
        break;
    case 3:
        diaSemana = 'Quarta';
        break;
    case 4:
        diaSemana = 'Quinta';
        break;
    case 5:
        diaSemana = 'Sexta';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
    default:
        diaSemana = '';
}

h1.innerHTML = 'Hoje é ' + diaSemana + ', ' + numerodia + ' de ' + mes + ' de ' + ano + '.';
