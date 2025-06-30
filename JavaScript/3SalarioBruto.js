//  Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno,
//  as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.

const read = require('readline-sync');

let SalarioBruto;
let AdicionalNoturno;
let HorasExtras;
let Descontos;

SalarioBruto = read.questionFloat ("Informe o valor do Salário Bruto: ")
console.log ("O valor do Salário Bruto é:" + SalarioBruto);

AdicionalNoturno = read.questionFloat ("Informe o valor do Adicional Noturno: ")
console.log ("O valor do Adicional Noturno é:" + AdicionalNoturno);

HorasExtras = read.questionFloat ("Informe o valor das Horas Extras: ")
console.log ("O valor do Horas Extras é:" + HorasExtras);

Descontos = read.questionFloat ("Informe o valor dos Descontos: ")
console.log ("O valor do Descontos é:" + Descontos);

let SalarioLiquido = SalarioBruto + AdicionalNoturno + (HorasExtras*5) - Descontos;
console.log ( " O valor do Salário Líquido é: " +SalarioLiquido);