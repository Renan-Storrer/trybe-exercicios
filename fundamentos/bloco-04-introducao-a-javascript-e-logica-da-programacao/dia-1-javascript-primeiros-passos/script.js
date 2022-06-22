// exercicio 1

const a = 2;
const b = 3;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// exercicio 2

const c = 5;
const d = 10;

if (c < d) {
    console.log(d + " é maior que " + c)
} else {
    console.log(c + " é maior que " + d)
}

// exercicio 3

const e = 25;
const f = 25.1;
const g = 24.9;

if (e > f && e > g) {
    console.log(e)
} else if (f > g && f > e) {
    console.log(f)
} else if (g > e && g > f) {
    console.log(g)
}

// exercicio 4

const h = -5;

if (h < 0) {
    console.log("negative");
} else if (h === 0) {
    console.log(0)
} else if (h > 0) {
    console.log("positive");
}

// exercicio 5

const t1 = 45;
const t2 = -45;
const t3 = 90;

let somaDosAngulos = t1 + t2 + t3;

let todosAngulosPositivo = t1 > 0 && t2 > 0 && t3 > 0;

if (todosAngulosPositivo) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('ERRO - angulo(s) inválido(s)');
} 

//exercicio 6

const peca = 'peão';

switch (peca.toLowerCase) {
    case 'rei':
        console.log('Rei-> uma casa para qualquer lado');
        break;
    case 'rainha':
        console.log('Rainha -> qualquer lado, quantas casas quiser');
        break;
    case 'peão':
        console.log('Peão -> um casa para frente, no primeiro movimento poderá ser duas casa para frente');
        break;
    case 'torre':
        console.log('Torre -> horizontal e vertical');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L", pode pular sobre as casas');
        break;
    default:
        console.log('ERRO: peça inválida!');
}

// exercicio 7

let notaDaProva = 40;

if (notaDaProva < 0 || notaDaProva > 100) {
    console.log('ERRO: potuação inválida');
} else if (notaDaProva >= 90) {
    console.log('Você tirou a nota A');
} else if (notaDaProva >= 80) {
    console.log('Você tirou a nota B');
} else if (notaDaProva >= 70) {
    console.log('Você tirou a nota C');
} else if (notaDaProva >=60) {
    console.log('Você tirou a nota D');
} else if (notaDaProva >= 50) {
    console.log('Você tirou a nota E');
} else {
    console.log('Você tirou a nota F');
}

// exercicio 8

const n1 = 1;
const n2 = 5;
const n3 = 10;

if ((n1 % 2 === 0) || (n2 % 2 === 0) || (n3 % 2 === 0)) {
    console.log("true")
} else {
    console.log("false")
}