const mostraEscolhaDoJogador = document.getElementById('escolhaDoJogador');
const mostraEscolhaDoComputador = document.getElementById('escolhaDoComputador');
const resultado = document.getElementById('resultado');
const possiveisEscolhas = document.querySelectorAll('button');

let escolhaDoJogador;
let escolhaDoComputador;
let resultadoFinal;

possiveisEscolhas.forEach(possiveisEscolhas => possiveisEscolhas.addEventListener('click', (e) => {
  escolhaDoJogador = e.target.id;
  mostraEscolhaDoJogador.innerHTML = escolhaDoJogador;
  gerarEscolhaDoComputador();
  calcularResultado();
}));

function gerarEscolhaDoComputador() {
  const escolhaAleatoria = Math.floor(Math.random() * possiveisEscolhas.length) + 1;

  if(escolhaAleatoria === 1) {
    escolhaDoComputador = "Pedra";
  } else if(escolhaAleatoria === 2) {
    escolhaDoComputador = "Papel";    
  } else if(escolhaAleatoria === 3){
    escolhaDoComputador = "Tesoura";
  }
  mostraEscolhaDoComputador.innerHTML = escolhaDoComputador;
}

function calcularResultado() {

  if(escolhaDoComputador === escolhaDoJogador) {
    resultadoFinal = "O jogo empatou.";
    mostraEscolhaDoComputador.setAttribute('class', 'default');
    mostraEscolhaDoJogador.setAttribute('class', 'default');
  } else if(escolhaDoComputador === "Pedra" && escolhaDoJogador === "Tesoura") {
    resultadoFinal = "Você perdeu.";
    mostraEscolhaDoComputador.setAttribute('class', 'green');
    mostraEscolhaDoJogador.setAttribute('class', 'red');
  } else if(escolhaDoComputador === "Pedra" && escolhaDoJogador === "Papel") {
    resultadoFinal = "VOCÊ GANHOU!!";
    mostraEscolhaDoComputador.setAttribute('class', 'red');
    mostraEscolhaDoJogador.setAttribute('class', 'green');
  } else if(escolhaDoComputador === "Papel" && escolhaDoJogador === "Tesoura") {
    resultadoFinal = "VOCÊ GANHOU!!";
    mostraEscolhaDoComputador.setAttribute('class', 'red');
    mostraEscolhaDoJogador.setAttribute('class', 'green');
  } else if(escolhaDoComputador === "Papel" && escolhaDoJogador === "Pedra") {
    resultadoFinal = "Você perdeu.";
    mostraEscolhaDoComputador.setAttribute('class', 'green');
    mostraEscolhaDoJogador.setAttribute('class', 'red');
  } else if(escolhaDoComputador === "Tesoura" && escolhaDoJogador === "Pedra") {
    resultadoFinal = "VOCÊ GANHOU!!";
    mostraEscolhaDoComputador.setAttribute('class', 'red');
    mostraEscolhaDoJogador.setAttribute('class', 'green');
  } else if(escolhaDoComputador === "Tesoura" && escolhaDoJogador === "Papel") {
    resultadoFinal = "Você perdeu.";
    mostraEscolhaDoComputador.setAttribute('class', 'green');
    mostraEscolhaDoJogador.setAttribute('class', 'red');
  }
  resultado.innerHTML = resultadoFinal;
}


