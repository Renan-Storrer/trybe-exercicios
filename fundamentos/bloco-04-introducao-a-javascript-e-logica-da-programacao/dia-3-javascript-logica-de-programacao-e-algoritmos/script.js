// exercicio 1

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial = fatorial * index;
}

console.log(fatorial);

// exercicio 2

let palavra = "Abacaxi"
let palavraContrario = "";

for (let index = 0; index < palavra.length; index += 1) {
    palavraContrario = palavraContrario +  palavra[palavra.length - 1 - index]
}

console.log(palavraContrario)

// exercicio 3 

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}

console.log(maiorPalavra);