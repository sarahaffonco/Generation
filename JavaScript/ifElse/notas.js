// Elabore um algoritmo em JavaScript que read 4 notas de um participante, 
// exiba na tela a média final do participante.
//CALCULAR MÉDIA = (n1 + n2 + n3 + NOTA4) / 4

const read = require('readline-sync');

let n1;
let n2;
let n3;
let n4;

n1 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua n1 é: " + n1);

n2 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua n2 é: " + n2);

n3 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua n3 é: " + n3);

n4 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua n4 é:  "+ n4);

let mediaFinal = (n1 + n2 + n3 + n4) / 4;
console.log("Sua média é: " + mediaFinal.toFixed(1))