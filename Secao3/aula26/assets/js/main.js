const forms = document.querySelector('#formulario');
forms.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    let divisao = Number(peso / (altura * altura));
    divisao = divisao.toFixed(2);
    if(isNaN(divisao) || isNaN(peso) || isNaN(altura)){
      ResultadoFun('Peso e/ou altura inválidos');
    }
    else if(divisao < 18.5){
      ResultadoFun(`IMC = ${divisao}: Abaixo do peso`);
    }
    else if(divisao >= 18.5 && divisao <= 24.9){
      ResultadoFun(`IMC = ${divisao}: Peso normal`);
    }
    else if(divisao >= 25 && divisao <= 29.9){
      ResultadoFun(`IMC = ${divisao}: Sobrepeso`);
    }
    else if(divisao >= 30 && divisao <= 34.9){
      ResultadoFun(`IMC = ${divisao}: Obesidade grau 1`);
    }
    else if(divisao >= 35 && divisao <= 39.9){
      ResultadoFun(`IMC = ${divisao}: Obesidade grau 2`);
    }
    else if(divisao >= 40){
      ResultadoFun(`IMC = ${divisao}: Obesidade grau 3`);
    }
    else {
      ResultadoFun(divisao);
    }
});

function criaP(){
  const p = document.createElement('p');
  return p;
}

function ResultadoFun(msg){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = "";
  const p = criaP();
  p.classList.add('paragrafo-resultado');
  p.innerHTML = msg;
  resultado.appendChild(p);
}