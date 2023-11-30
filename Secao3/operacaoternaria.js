const pontuacao = 1000;

const nivelUsuario = pontuacao >= 1000 ? 'Vip' : 'Normal';

const corUsuario = null;
const corFavorita = corUsuario || 'Preta';

console.log(corFavorita);
console.log(nivelUsuario);