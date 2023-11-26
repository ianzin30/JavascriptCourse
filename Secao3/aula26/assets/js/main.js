const forms = document.querySelector('#formulario');
forms.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Formulário enviado.');
    ResultadoFun('Formulário enviado.');
});

function ResultadoFun(msg){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = "";
  const p = document.createElement('p');
  p.classList.add('paragrafo-resultado');
  p.innerHTML = 'BELLIGOOOOOL';
  resultado.appendChild(p);
}