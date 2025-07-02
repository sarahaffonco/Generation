// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa.

const read = require('readline-sync');

const num1 = read.questionInt("Digite o primeiro número (menor): ", {
    limitMessage: 'Digite um número inteiro'
});

const num2 = read.questionInt("Digite o segundo número (maior): ", {
    limitMessage: 'Digite um número inteiro'
});

if (num1 >= num2) {
    console.log("Intervalo inválido! O primeiro número deve ser menor que o segundo.");
    process.exit();
}
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
console.log(`No intervalo entre ${num1} e ${num2}:`);

let encontrouMultiplos = false;

for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`);
        encontrouMultiplos = true;
    }
}

if (!encontrouMultiplos) {
    console.log("Não há múltiplos de 3 e 5 no intervalo informado.");
}
