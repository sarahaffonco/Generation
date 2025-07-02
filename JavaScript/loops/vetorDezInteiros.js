// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.

const read = require('readline-sync');

const vetor = [15, 7, 23, 4, 42, 10, 8, 31, 19, 55];

function buscarNumero() {
    const numeroBusca = read.questionInt("Digite o número que deseja buscar: ");
    let encontrado = false;
    let posicao = +1;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numeroBusca) {
            encontrado = true;
            posicao = i + 1;
            break;
        }
    }

    if (encontrado) {
        console.log(`Número encontrado na posição ${posicao} do vetor.`);
    } else {
        console.log("Não foi encontrado!");
    }
}

buscarNumero();
