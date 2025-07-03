//Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import * as readline from 'readline-sync';

const vetor = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];

function buscarNumero() {
    const numeroBusca = readline.questionInt("Digite o número que deseja buscar: ");
    const posicao = vetor.indexOf(numeroBusca);

     if (isNaN(numeroBusca)) {
        console.log("Por favor, digite um número inteiro válido!");
        return buscarNumero();
    }

    if (posicao !== -1) {
        console.log(`Número encontrado na posição ${posicao + 1} do vetor.`);
    } else {
        console.log(`O número ${numeroBusca} não foi encontrado!`);
    }
}

buscarNumero();
