// Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4

const read = require('readline-sync');

let n1;
let n2;
let n3;
let n4;

n1 = read.questionFloat("Digite o valor de n1: ")
console.log("N1 é: " + n1);

n2 = read.questionFloat("Digite o valor de n2: ")
console.log("N2 é: " + n2);

n3 = read.questionFloat("Digite o valor de n3: ")
console.log("N3 é: " + n3);

n4 = read.questionFloat("Digite o valor de n4: ")
console.log("N4 é: " + n4);

let produtoN1N2 = n1 * n2;
console.log("O produto entre n1 e n2 é: " + produtoN1N2);

let produton3n4 = n3 * n4;
console.log("O produto de n3 e n4 é: " + produton3n4);

let diferenca = produtoN1N2 - produton3n4;
console.log("O resultado de (n1 * n2) – (n3 * n4) é: " + diferenca)
