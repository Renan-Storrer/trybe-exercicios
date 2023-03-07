const readline = require('readline-sync');

function handleImc(peso, altura) {
  console.log(`peso ${peso}, altura ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = peso / alturaAoQuadrado;

  return imc;
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso? (kg) ');
  const altura = readline.questionInt('Qual sua altura? (cm) ');

  const imc = handleImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

