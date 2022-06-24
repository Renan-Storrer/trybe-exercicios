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
let menorPalavra = array[0]

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}

for (let index2 = 0; index2 < array.length; index2 +=1) {
    if (array[index2].length < menorPalavra.length) {
        menorPalavra = array[index2]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);

// exercicio 4

let numeroPrimoMaior = 0;

for (let numero = 2; numero <= 50; numero += 1) {
  let numeroPrimo = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      numeroPrimo = false;
    }
  }
  if (numeroPrimo === true ) {
    numeroPrimoMaior = numero;
  }
}

console.log(numeroPrimoMaior);