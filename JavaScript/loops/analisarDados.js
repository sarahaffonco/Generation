//Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados

const read = require('readline-sync');

let backend = 0;
let mulheresFront = 0;
let homensMobile40 = 0;
let naoBinariosFullMenores30 = 0;
let totalPessoas = 0;
let somaIdades = 0;

console.log("Pesquisa de Colaboradores de Desenvolvimento\n");

let continuar = 'S';
while (continuar.toUpperCase() === 'S') {
    const idade = read.questionInt("Idade: ");
    somaIdades += idade;
    totalPessoas++;

    console.log("\nIdentidade de Gênero:");
    console.log("1 - Mulher Cis\n2 - Homem Cis\n3 - Não Binário");
    console.log("4 - Mulher Trans\n5 - Homem Trans\n6 - Outros");
    const genero = read.questionInt("Opção: ");
    if (genero < 1 || genero > 6) {
        console.log("Opção inválida. Tente novamente.");
    }

    console.log("\nÁrea de Desenvolvimento:");
    console.log("1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack");
    const area = read.questionInt("Opção: ");
    if (area < 1 || area > 4) {
        console.log("Opção inválida. Tente novamente.");
    }

    if (area === 1) backend++;

    if ((genero === 1 || genero === 4) && area === 2) {
        mulheresFront++;
    }

    if ((genero === 2 || genero === 5) && area === 3 && idade > 40) {
        homensMobile40++;
    }

    if (genero === 3 && area === 4 && idade < 30) {
        naoBinariosFullMenores30++;
    }

    continuar = read.question("\nDeseja cadastrar outro colaborador? (S/N): ");
}

const mediaIdade = totalPessoas > 0 ? (somaIdades / totalPessoas).toFixed(2) : 0;

console.log("\n### Resultados da Pesquisa ###");
// O número de pessoas desenvolvedoras Backend
console.log(`Total de pessoas Backend: ${backend}`);
// O número de Mulheres Cis e Trans desenvolvedoras Frontend
console.log(`Mulheres Cis e Trans Frontend: ${mulheresFront}`);
// O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
console.log(`Homens Cis e Trans Mobile maiores de 40 anos: ${homensMobile40}`);
// O número de Não Binários desenvolvedores FullStack menores de 30 anos
console.log(`Não Binários FullStack menores de 30 anos: ${naoBinariosFullMenores30}`);
// O número total de pessoas que responderam à pesquisa
console.log(`Total de pessoas que responderam: ${totalPessoas}`);
// A média de idade das pessoas que responderam à pesquisa
console.log(`Média de idade: ${mediaIdade}`);
