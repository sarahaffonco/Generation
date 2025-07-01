//  Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os descontos de um Colaborador, exiba na tela o Salário Líquido.

const read = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

salarioBruto = read.questionFloat ("Informe o valor do Salário Bruto: ")
console.log ("O valor do Salário Bruto é:" + salarioBruto);

adicionalNoturno = read.questionFloat ("Informe o valor do Adicional Noturno: ")
console.log ("O valor do Adicional Noturno é:" + adicionalNoturno);

horasExtras = read.questionFloat ("Informe o valor das Horas Extras: ")
console.log ("O valor do Horas Extras é:" + horasExtras);

descontos = read.questionFloat ("Informe o valor dos descontos: ")
console.log ("O valor do descontos é:" + descontos);

let saraioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos;
console.log ( " O valor do Salário Líquido é: " +saraioLiquido);