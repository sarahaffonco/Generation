// Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript

const read = require('readline-sync');

let salario;
let abono;

salario = read.questionInt("\nDigite o valor do salário: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor do salário é: " + salario);

abono = read.questionInt("\nDigite o valor do abono salarial: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor do abono salarial é: " + abono);

console.log("Novo Salário (salário + abono): " + (salario + abono));

