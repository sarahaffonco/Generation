// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila
// 0: O programa deve ser finalizado.
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.

// * Para resolver este exercício, não se esqueça de criar a Classe Queue

import { Queue } from "./queuMetodo";
import read = require("readline-sync");

const fila = new Queue<string>();


let opcao: number;
let continua: string = 's';

do {
    console.log("###### Fila de atendimento ######");
    console.log("## 1- Adicionar um novo Cliente na fila ##");
    console.log("## 2- Listar todos os Clientes na fila ##");
    console.log("## 3- Retirar uma pessoa da fila ##");
    console.log("## 0- Sair ##");

    opcao = read.questionInt(" -> ");

    switch (opcao) {
        case 1:
            const nome = read.question("Nome do cliente: ");
            fila.enqueue(nome);
            console.log(`${nome} foi adicionado à fila.`);
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                console.log("Clientes na fila:");
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia. Ninguém para chamar.");
            } else {
                const clienteChamado = fila.dequeue();
                console.log(`${clienteChamado} foi chamado(a).`);
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
