// 5.	Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const read = require('readline-sync');

console.log ("Cardápio :")
console.log ("1 - Cachorro Quente \nValor R$10.00")
console.log ("\n2 - X-Salada \nValor R$15.00")
console.log ("\n3 - X-Bacon \nValor R$18.00")
console.log ("\n4 - Bauru \nValor R$12.00")
console.log ("\n5 - Refrigerante \nValor R$8.00")
console.log ("\n6 - Suco de Laranja \nValor R$13.00")

//número inteiro entre 1 e 6
const codigo = read.questionInt("\nCódigo do Produto (1-6): ", {
    limit: [1, 2, 3, 4, 5, 6],
    limitMessage: 'Digite um número entre 1 e 6'
});

// quantidade comprada deste item
const quantidade = read.questionInt("Quantidade: ", {
    limitMessage: 'Digite um número inteiro'
});

let produto;
let preco;
let valorTotal;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
}

valorTotal = quantidade * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);