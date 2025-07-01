// 3.	Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.

const read = require('readline-sync');

let idade;
let nome;
let jaDoou;

idade = read.questionInt("\nDigite sua idade: ", {limitMessage: 'Digite um numero inteiro'});

nome = read.question("\nDigite seu nome: ");

jaDoou = read.question("Já fez outras doações de sangue? (sim/não): ").toLowerCase() === 'sim';

// Para doar sangue é necessário ter entre 18 e 69 anos
if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && idade <= 69) {
        //  60 e 69 anos, só podem doar sangue se não for a sua primeira doação
        if (jaDoou) {
            console.log(`${nome} está Apto para doar sangue.`);
        } else {
            console.log(`${nome} não está Apto para doar sangue.`);
        }
    } else {
        // Se tem entre 18-59 anos, pode doar
        console.log(`${nome} está Apto para doar sangue.`);
    }
} else {
    // Se tem menos de 18 ou mais de 69 anos
    console.log(`${nome} não está Apto para doar sangue.`);
}