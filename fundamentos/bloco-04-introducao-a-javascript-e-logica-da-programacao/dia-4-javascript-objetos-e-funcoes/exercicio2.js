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

function indiceDoMaior(numeros) {
    let indiceDoMaiorNumero = 0;
    for (let index in numeros) {
      if (numeros[indiceDoMaiorNumero] < numeros[index]) {
        indiceDoMaiorNumero = index;
      }
    }
    return indiceDoMaiorNumero;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));