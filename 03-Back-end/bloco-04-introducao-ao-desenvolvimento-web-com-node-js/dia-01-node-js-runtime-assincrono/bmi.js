const pesoEmKg = 120;
const alturaEmCm = 180;

function handleImc(peso, altura) {
  console.log(`peso ${peso}, altura ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = peso / alturaAoQuadrado;

  return imc;
}

function main() {
  const imc = handleImc(pesoEmKg, alturaEmCm);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();