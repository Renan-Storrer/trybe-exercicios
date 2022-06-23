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