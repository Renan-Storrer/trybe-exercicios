// exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (segundoIndex = 0; segundoIndex < index; segundoIndex += 1) {
        if (numbers[index] < numbers[segundoIndex]) {
            let posicao = numbers[index];
            numbers[index] = numbers[segundoIndex];
            numbers[segundoIndex] = posicao;
        }
    }
}

console.log(numbers);

// exercicio 2 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (segundoIndex = 0; segundoIndex < index; segundoIndex += 1) {
        if (numbers[index] > numbers[segundoIndex]) {
            let posicao = numbers[index];
            numbers[index] = numbers[segundoIndex];
            numbers[segundoIndex] = posicao;
        }
    }
}

console.log(numbers);

// exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacao = []

for (let index = 0; index < numbers.length; index += 1){
    if(index + 1 < numbers.length) {
        multiplicacao.push(numbers[index] * numbers[index + 1])
    } else {
        multiplicacao.push(numbers[index] * 2);
    }
}

console.log(multiplicacao);