//Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set.

const read = require('readline-sync');

const numeros = new Set();

while (numeros.size < 10) {
    const numero = parseInt(read.question(`Digite um número inteiro não repetido (${numeros.size + 1}/10): `), 10);
    if (!isNaN(numero)) {
        numeros.add(numero);
    } else {
        console.log('Por favor, digite um número válido.');
    }
}
console.log('Números adicionados:', Array.from(numeros));

