//Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (número real), será inicializada com o valor de R$ 1000.00. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

const read = require('readline-sync');

const saldo = read.questionFloat(" Qual o saldo da conta? ")

console.log("### Sistema Bancário ###");
console.log("Operações disponíveis:");
console.log("1 - Consultar Saldo");
console.log("2 - Realizar Saque");
console.log("3 - Realizar Depósito");

// Entrada da operação
const operacao = read.questionInt("Operação (1-3): ", {
    limit: [1, 2, 3],
    limitMessage: 'Digite um número entre 1 e 3'
});

let valor;
let mensagem;

switch (operacao) {
    case 1:
        mensagem = `Operação - Saldo\nSaldo: R$ ${saldo.toFixed(2)}`;
        break;
        
    case 2:
        valor = read.questionFloat("Valor: R$ ");
        if (valor > saldo) {
            mensagem = "Operação - Saque\nSaldo Insuficiente!";
        } else {
           const novoSaldo = saldo - valor;
            mensagem = `Operação - Saque\nNovo Saldo: R$ ${novoSaldo.toFixed(2)}`;
        }
        break;
        
    case 3:
        valor = read.questionFloat("Valor: R$ ");
        const novoSaldo = saldo + valor;
        mensagem = `Operação - Depósito\nNovo Saldo: R$ ${novoSaldo.toFixed(2)}`;
        break;
        
    default:
        mensagem = "Operação Inválida!";
}

console.log(`\n${mensagem}`);