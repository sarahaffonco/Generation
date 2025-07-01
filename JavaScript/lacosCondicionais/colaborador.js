// 6.	Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const read = require('readline-sync');

console.log("Reajuste Salarial :")
console.log("1 - Gerente\nReajuste 10%")
console.log("\n2 - Vendedor\nReajuste 7%")
console.log("\n3 - Supervisor\nReajuste 9%")
console.log("\n4 - Motorista\nReajuste 6%")
console.log("\n5 - Estoquista\nReajuste 6%")
console.log("\n6 - Técnico de TI\nReajuste 8%")

const nome = read.question("\nNome do Colaborador: ");

const salario = read.questionFloat("Salário atual: R$ ", {
    limitMessage: 'Digite um valor numérico positivo'
});

const codigoCargo = read.questionInt("\nCódigo do Cargo (1-6): ", {
    limit: [1, 2, 3, 4, 5, 6],
    limitMessage: 'Digite um número entre 1 e 6'
});

let cargo;
let percentualReajuste;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 0.08;
        break;
}

const novoSalario = salario + (percentualReajuste * salario);

console.log("\n--- Folha de Reajuste ---");
console.log(`Nome do Colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário Atual: R$ ${salario.toFixed(2)}`);
console.log(`Reajuste (${(percentualReajuste * 100).toFixed(0)}%): R$ ${percentualReajuste.toFixed(2)}`);
console.log(`Novo Salário: R$ ${novoSalario.toFixed(2)}`);