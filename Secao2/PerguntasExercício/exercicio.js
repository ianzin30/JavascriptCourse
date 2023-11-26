const Nome = prompt("Qual é o seu nome?");
const Idade = prompt("Qual é a sua idade?");
const Cidade = prompt("Qual é a sua cidade?");
const Profissao = prompt("Qual é a sua profissão?");
const Hobbie = prompt("Qual é o seu hobbie?");

document.body.innerHTML += `Olá, ${Nome}! <br>`;
document.body.innerHTML += `Sua idade é ${Idade} anos. <br>`;
document.body.innerHTML += `Você mora em ${Cidade}. <br>`;
document.body.innerHTML += `Sua profissão é ${Profissao}. <br>`;
document.body.innerHTML += `Seu hobbie é ${Hobbie}. <br>`;
document.body.innerHTML += `Obrigado por responder as perguntas! <br>`;