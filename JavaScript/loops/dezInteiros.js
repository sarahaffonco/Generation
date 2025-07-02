//Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares.
const read = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    const numero = read.questionInt(`Digite o ${i + 1}º número: `, {
        limitMessage: 'Digite um número inteiro'
    });

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
