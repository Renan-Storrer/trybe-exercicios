// exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// exercicio 2 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}

console.log(resultado);

// exercicio 3 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaTotal += numbers[index];
}

let media = somaTotal / (numbers.length + 1)

console.log(media);

// exercico 4 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaTotal += numbers[index];
}

let media = somaTotal / (numbers.length + 1)

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

console.log(media);

// exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
}
console.log(maiorValor);

// exercicio 6 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
        numerosImpares += 1
    }
}

if (numerosImpares === 0) {
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log(numerosImpares)
}