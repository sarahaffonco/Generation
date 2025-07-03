//Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Coction Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

const read = require('readline-sync');

const numerosSet = new Set([12, 45, 67, 23, 89, 34, 56, 78, 90, 11]);

function buscarNumeroNoSet() {
    let numeroBusca;
    let entradaValida = false;

    while (!entradaValida) {
        const input = read.question("Digite o número que deseja buscar: ");

        if (/^-?\d+$/.test(input)) {
            numeroBusca = parseInt(input, 10);
            entradaValida = true;
        } else {
            console.log("Por favor, digite um número inteiro válido!");
        }
    }

    if (numerosSet.has(numeroBusca)) {
        console.log(`O número ${numeroBusca} foi encontrado!`);
    } else {
        console.log(`O número ${numeroBusca} não foi encontrado!`);
    }
}

buscarNumeroNoSet();
