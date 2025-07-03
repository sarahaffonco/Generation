// Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:

const read = require('readline-sync');

const cores = [];
for (let i = 0; i < 5; i++) {
    const cor = read.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}
// Mostre na tela todas as cores adicionadas.
console.log('Cores adicionadas:', cores);
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
const coresOrdenadas = cores.map(cor => cor.toLowerCase()).sort();
console.log('\nCores em ordem crescente (todas em minúsculas):', coresOrdenadas);

