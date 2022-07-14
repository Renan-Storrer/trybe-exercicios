const button = document.querySelector('button')
console.log(button);
button.addEventListener('click', contador);
// let contagem = 0;

let contagem = []
function contador() {
  contagem.push('1')
  console.log(contagem.length);
  // return contagem
}
