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
} else if (g > e && g > f){
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

if(todosAngulosPositivo) {
    if (somaDosAngulos === 180) {
    console.log (true);
    } else {
    console.log (false);
    }
} else {
    console.log('ERRO - angulo(s) inválido(s)');
} 