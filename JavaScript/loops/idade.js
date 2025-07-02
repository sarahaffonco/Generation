// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.
const read = require('readline-sync');

let menoresDeVinteUm = 0;
let maioresDeCinquenta = 0;
let idade;

do {
    idade = read.questionInt("Digite a idade (negativa para sair): ", {
        limitMessage: 'Digite um número inteiro'
    });

    if (idade >= 0) {
        if (idade < 21) {
            menoresDeVinteUm++;
        } else if (idade > 50) {
            maioresDeCinquenta++;
        }
    }
}

while (idade >= 0);

console.log(`Total de pessoas com idade menor que 21 anos: ${menoresDeVinteUm}`);
console.log(`Total de pessoas com idade maior que 50 anos: ${maioresDeCinquenta}`);
