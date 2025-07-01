//7.Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: num1 e num2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

const read = require('readline-sync');

console.log("### Calculadora Simples ###");
console.log("Operações disponíveis:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

const num1 = read.questionFloat("Digite o 1º número: ");
const num2 = read.questionFloat("Digite o 2º número: ");
const operacao = read.questionInt("Operação (1-4): ", {
    limitMessage: 'Digite um número entre 1 e 4'
});

let resultado;
let simboloOperacao;
let mensagem;

switch (operacao) {
    case 1:
        resultado = num1 + num2;
        simboloOperacao = "+";
        mensagem = `${num1} ${simboloOperacao} ${num2} = ${resultado.toFixed(1)}`;
        break;
    case 2:
        resultado = num1 - num2;
        simboloOperacao = "-";
        mensagem = `${num1} ${simboloOperacao} ${num2} = ${resultado.toFixed(1)}`;
        break;
    case 3:
        resultado = num1 * num2;
        simboloOperacao = "×";
        mensagem = `${num1} ${simboloOperacao} ${num2} = ${resultado.toFixed(1)}`;
        break;
    case 4:
        if (num2 !== 0) {
            resultado = num1 / num2;
            simboloOperacao = "/";
            mensagem = `${num1} ${simboloOperacao} ${num2} = ${resultado.toFixed(1)}`;
        } else {
            mensagem = "Erro: Divisão por zero!";
        }
        break;
    default:
        mensagem = "Operação Inválida!";
}

console.log(`\n${mensagem}`);