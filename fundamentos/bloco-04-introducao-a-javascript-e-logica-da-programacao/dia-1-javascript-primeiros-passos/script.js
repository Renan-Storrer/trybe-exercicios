// exercicio 1

const a = 2;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// exercicio 2

const c = 5;
const d = 10;

if (c > d) {
    console.log(c)
} else {
    console.log(d)
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
const t2 = 45;
const t3 = 90;

if (t1 + t2 + t3 === 180) {
    console.log (true);
} else {
    console.log (false);
}