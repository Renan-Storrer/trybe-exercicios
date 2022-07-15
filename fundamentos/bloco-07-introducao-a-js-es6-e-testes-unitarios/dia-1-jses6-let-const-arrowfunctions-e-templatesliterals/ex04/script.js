// função 1

function ola(nome) {
  let frase = 'Tryber x aqui!';
  let fraseSeparada = frase.split(' ');
  let nomeFor = []
  // console.log(nomeSeparado);
  for (let i = 0; i < fraseSeparada.length; i += 1) {
    if (fraseSeparada[i] !== 'x') {
      nomeFor.push(fraseSeparada[i])
    } else {
      nomeFor.push(nome)
    }
  }
  // console.log(nomeFor);
  let nomeFinal = nomeFor.join(' ')
  // console.log(nomeFinal);
  return nomeFinal
}

// ola('Renan');

// função 2

const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let resultado = `
  ${func}
  
  Minhas três principais habilidades são:`;

  skills.forEach((skills) => {
    resultado = `${resultado}
    - ${skills}`;
  });
  return resultado
}

console.log(minhasSkills(ola('renan')));