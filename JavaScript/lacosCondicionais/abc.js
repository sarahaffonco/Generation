// 1. Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.
const read = require('readline-sync');

let numA;
let numB;
let numC;

numA = read.questionInt("\nDigite um valor inteiro para A: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor de A é: " + numA);

numB = read.questionInt("\nDigite um valor inteiro para B: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor de B é: " + numB);

numC = read.questionInt("\nDigite um valor inteiro para C: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor de C é: " + numC);

const sumAB = numA + numB;
console.log(`A soma de A + B: ${sumAB}`);

if (sumAB > numC) {
    console.log("A soma de A + B é maior que C.");
} else if (sumAB < numC) {
    console.log("A soma de A + B é menor que C.");
} else {
    console.log("A soma de A + B é igual a C.");
}