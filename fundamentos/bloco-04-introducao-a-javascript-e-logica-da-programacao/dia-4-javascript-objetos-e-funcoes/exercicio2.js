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

//---------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------

// exercicio 3 

function indiceDoMenor(numeros) {
    let indiceDoMenorNumero = 0;
    for (let index in numeros) {
        if (numeros[indiceDoMenorNumero] > numeros[index]) {
            indiceDoMenorNumero = index
        }
    }
    return indiceDoMenorNumero;
}

// console.log(indiceDoMenor([2, 4, 6, 7, -10, 0, -3]));

//---------------------------------------------------------------------------------

// exercicio 4

function nomeMaior(nomes) {
    let nomeMaior = nomes[0];
    for (let index in nomes) {
        if (nomeMaior.length < nomes[index].length) {
            nomeMaior = nomes[index]
        }
    }
    return nomeMaior
}

// console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//-------------------------------------------------------------------------------------
// exercicio 5 

function numeroMaisRepetido(numeros) {
    let repetido = 0;
    let numero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                numero = numero + 1;
            }
        }
        if (numero > repetido) {
            repetido = numero;
            indexNumeroRepetido = index;
        }
        numero = 0;
    }
    return numeros[indexNumeroRepetido];
}

// console.log(numeroMaisRepetido([2, 5, 3, 2, 5, 8, 2, 3, 5]));

//---------------------------------------------------------------------------------

// exercicio 6 

function somatorio(numero) {
    let total = 0;
    for (let index = 1; index <= numero; index += 1) {
        total = total + index;
    }
    return total;
}

// console.log(somatorio(3));

//---------------------------------------------------------------------------------

// exercicio 7

function endingWord(word, ending) {
    word = word.split('');
    ending = ending.split('');
    controle = true;
    for (let index = 0; index < ending.length; index += 1) {
        if (word[word.length - ending.length + index] !== ending[index]) {
            controle = false;
        }
    }
    return controle;
}

console.log(endingWord('trybe', 'be'));