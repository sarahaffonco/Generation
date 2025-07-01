// 2.	Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.
const read = require('readline-sync');

let numInt;

numInt = read.questionInt("\nDigite um valor inteiro: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor digitado é: " + numInt);

if (numInt >= 0) {
  console.log("O valor digitado é Positivo.");  
}  else {
    console.log("O valor digitado é Negativo.");
}