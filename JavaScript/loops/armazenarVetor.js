// Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:

const read = require('readline-sync');

function processarVetor() {
    const vetor = [];
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        const numero = read.questionInt(`Digite o ${i+1}º número inteiro: `);
        vetor.push(numero);
        soma += numero;
    }
// Todos os elementos dos índices ímpares do vetor
    console.log("\nElementos dos índices ímpares:");
    for (let i = 1; i < vetor.length; i += 2) {
        console.log(`Índice ${i}: ${vetor[i]}`);
    }
// Todos os elementos do vetor que são números pares
    console.log("\nElementos pares do vetor:");
    for (const numero of vetor) {
        if (numero % 2 === 0) {
            console.log(numero);
        }
    }
// A Soma de todos os elementos do vetor
    console.log(`\nSoma de todos os elementos: ${soma}`);
// A Média de todos os elementos do vetor, armazenada em uma variável do tipo real
    const media = soma / vetor.length;
    console.log(`Média dos elementos: ${media.toFixed(2)}`);
}

processarVetor();
