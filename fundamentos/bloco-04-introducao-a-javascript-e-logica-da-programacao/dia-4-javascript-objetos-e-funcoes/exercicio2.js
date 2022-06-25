// exercicio 1

function verificaPalindrome(word) {
    for (index in word) {
        if (word[index] !== word[(word.length - 1) - index]) {
            return false;
        }
    }
    return true;
}
function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

// exercicio 2

function indiceDoMaior(arrayDeNumeros) {
    let indiceDoMaiorNumero = 0;
    for (let index in arrayDeNumeros) {
      if (arrayDeNumeros[indiceDoMaiorNumero] < arrayDeNumeros[index]) {
        indiceDoMaiorNumero = index;
      }
    }
    return indiceDoMaiorNumero;
  }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// exercicio 3 
function indiceDoMenor(numeros) {
    let indiceDoMenorNumero = 0;
    for(let index in numeros) {
        if(numeros[indiceDoMenorNumero] > numeros[index]) {
            indiceDoMenorNumero = index
        }
    }
    return indiceDoMenorNumero;
}

console.log(indiceDoMenor([2, 4, 6, 7, -10, 0, -3]));