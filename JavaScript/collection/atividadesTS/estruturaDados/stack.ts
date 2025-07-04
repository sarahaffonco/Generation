// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o titulo do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha
// 0: O programa deve ser finalizado.
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.

// * Para resolver este exercício, não se esqueça de criar a Classe Stack


import read = require("readline-sync");
import { Stack } from "./stackMetodo";

const pilha = new Stack<string>();

let opcao: number;
let continua: string = 's';

do {
    console.log("###### Lista de livros ######");
    console.log("## 1- Adicionar um novo livro na pilha ##");
    console.log("## 2- Listar todos os Livros na pilha ##");
    console.log("## 3- Retirar um livro da pilha ##");
    console.log("## 0- Sair ##");

    opcao = read.questionInt(" -> ");

    switch (opcao) {
        case 1:
            const titulo = read.question("Titulo do livro: ");
            pilha.push(titulo);
            console.log(`${titulo} foi adicionado à pilha.`);
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia.");
            } else {
                console.log("Livros na pilha:");
                pilha.printStack();
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia. Nenhum livro foi adicionado.");
            } else {
                const livroExcluido = pilha.pop();
                console.log(`O Livro ${livroExcluido} foi excluido.`);
            }
            break;

        case 0:
            console.log("Encerrando o programa...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

    if (opcao !== 0) {
        continua = read.question("Digite 's' para continuar: ").toLowerCase();
    }
} while (opcao !== 0 && continua === "s");

