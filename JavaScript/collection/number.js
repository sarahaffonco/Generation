//  
const readline = require('readline-sync');

const vetor = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];

function buscarNumero() {
    const numeroBusca = readline.questionInt("Digite o número que deseja buscar: ");
    const posicao = vetor.indexOf(numeroBusca);

    if (posicao !== -1) {
        console.log(`Número encontrado na posição ${posicao + 1} do vetor.`);
    } else {
        console.log(`O número ${numeroBusca} não foi encontrado!`);
    }
}

buscarNumero();
