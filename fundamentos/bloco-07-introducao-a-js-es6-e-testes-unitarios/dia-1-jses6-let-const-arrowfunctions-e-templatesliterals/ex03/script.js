const button = document.querySelector('button')
console.log(button);
button.addEventListener('click', contador);
// let contagem = 0;

let contagem = 0
function contador() {
  contagem = contagem + 1
  console.log(contagem);
  // return contagem
}
