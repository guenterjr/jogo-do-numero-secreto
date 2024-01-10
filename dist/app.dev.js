"use strict";

var numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  var campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  var chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou');
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}