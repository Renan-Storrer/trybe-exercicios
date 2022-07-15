const button = document.querySelector('button')
button.addEventListener('click', contador);
button.addEventListener('click', contM)
// let contagem = 0;

let contagem = 0
function contador() {
  contagem = contagem + 1
  // console.log(contagem);
  return contagem
}
// console.log(contagem);
let pContagem = document.querySelector('#pContagem')
// console.log(pContagem.innerHTML

function contM () {
  let contagemMostrada = contagem
  console.log(contagemMostrada);
  pContagem.innerHTML = contagemMostrada
}