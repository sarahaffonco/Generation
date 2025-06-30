// Elabore um algoritmo em JavaScript que read 4 notas de um participante, 
// exiba na tela a média final do participante.
//CALCULAR MÉDIA = (N1 + N2 + N3 + NOTA4) / 4

const read = require('readline-sync');

let N1;
let N2;
let N3;
let N4;

N1 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua N1 é: " + N1);

N2 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua N2 é: " + N2);

N3 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua N3 é: " + N3);

N4 = read.questionFloat ("Digite sua nota, se necessário utilize o . ")
console.log("Sua N4 é:  "+ N4);

let mediaFinal = (N1 + N2 + N3 + N4) / 4;
console.log("Sua média é: " + mediaFinal.toFixed(1))