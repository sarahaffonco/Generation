// 4.	Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de Animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.Em seguida, mostre na tela qual dos animais foi escolhido, baseado nas três palavras digitadas pelo usuário: 

const read = require('readline-sync');

console.log("Digite 3 características de um Animal, conforme solicitado. Por favor, não utilize acentos.");

const caracter1 = read.question("1ª característica (vertebrado/invertebrado): ").toLowerCase().trim();
const caracter2 = read.question("2ª característica (ave/mamífero/inseto/anelídeo): ").toLowerCase().trim();
const caracter3 = read.question("3ª característica (carnívoro/onívoro/herbívoro/hematófago): ").toLowerCase().trim();

// Triagem do Animal
let animal;

if (caracter1 === "vertebrado") {
    if (caracter2 === "ave") {
        if (caracter3 === "carnívoro" || caracter3 === "carnivoro") {
            animal = "Águia";
        } else if (caracter3 === "onívoro" || caracter3 === "onivoro") {
            animal = "Pomba";
        }
    } else if (caracter2 === "mamífero" || caracter2 === "mamifero") {
        if (caracter3 === "onívoro" || caracter3 === "onivoro") {
            animal = "Homem";
        } else if (caracter3 === "herbívoro" || caracter3 === "herbivoro") {
            animal = "Vaca";
        }
    }
} else if (caracter1 === "invertebrado") {
    if (caracter2 === "inseto") {
        if (caracter3 === "hematófago" || caracter3 === "hematofago") {
            animal = "Pulga";
        } else if (caracter3 === "herbívoro" || caracter3 === "herbivoro") {
            animal = "Lagarta";
        }
    } else if (caracter2 === "anelídeo" || caracter2 === "anelideo") {
        if (caracter3 === "hematófago" || caracter3 === "hematofago") {
            animal = "Sanguessuga";
        } else if (caracter3 === "onívoro" || caracter3 === "onivoro") {
            animal = "Minhoca";
        }
    }
}

// resultado
if (animal) {
    console.log(`O animal é: ${animal}`);
} else {
    console.log("Animal não identificado com essas características.");
}