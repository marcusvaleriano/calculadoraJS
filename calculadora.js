/* Faça um menu em que as opções são as 4 operações básicas, soma,multiplicação,divisão e subtração. 
Implemente uma calculadora (números reais) com suas funções básicas: soma, subtração, 
multiplicação e divisão. Considerando 2 valores para entrada. Crie uma função para cada operação.
Ao final imprima resultado da operação no programa principal. */

const num1 = document.querySelector('#n1');
const num2 = document.querySelector('#n2');
const resultado = document.querySelector('#result');
function getValue(campo) {
	return parseInt(campo.value);
}


function soma() {
	resultado.value = getValue(num1) + getValue(num2);
}

function multi() {

	resultado.value = getValue(num1) * getValue(num2);
}

function sub() {

	resultado.value = getValue(num1) - getValue(num2);
}


function divid() {

	resultado.value = getValue(num1) / getValue(num2);
}