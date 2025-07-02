//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3

const read = require('readline-sync');

let numero;
let soma = 0;
let contador = 0;

do {
    numero = read.questionInt("Digite um número inteiro (0 para sair): ");
    if (numero !== 0 && numero % 3 === 0) {
        soma += numero;
        contador++;
    }
}

while (numero !== 0);

if (contador > 0) {
    const media = soma / contador;
    console.log(`A média dos números múltiplos de 3 digitados é: ${media}`);
}else {
    console.log("Nenhum número múltiplo de 3 foi digitado.");
}
