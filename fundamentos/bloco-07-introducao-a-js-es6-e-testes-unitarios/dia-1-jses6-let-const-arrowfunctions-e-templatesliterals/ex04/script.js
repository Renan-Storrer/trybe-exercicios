function ola (nome) {
  let nomeDesejado = 'Tryber x aqui!';
  let nomeSeparado = nomeDesejado.split(' ');
  let nomeFor = []
  // console.log(nomeSeparado);
  for (let i = 0; i < nomeSeparado.length; i += 1) {
    if (nomeSeparado[i] !== 'x') {
      nomeFor.push(nomeSeparado[i])
    } else {
      nomeFor.push(nome)
    }
  }
  // console.log(nomeFor);
  nomeFinal = nomeFor.join(' ')
  console.log(nomeFinal);
}

ola('Renan');