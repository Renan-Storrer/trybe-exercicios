// Exercicio 1

let h1 = document.createElement('h1')
h1.innerText = "Exercício 5.2 - JavaScript DOM"
document.body.appendChild(h1)

// exercicio 2

let main = document.createElement('main')
main.className = 'main-content'
document.body.appendChild(main)

// exercicio 3

let section = document.createElement('section')
section.className = 'center-content'
main.appendChild(section)

// exercicio 4

let p = document.createElement('p')
section.appendChild(p)
p.innerText = 'TEXTO TEXTO TEXTO TEXTO TEXTO'

// exercicio 5

let sectionLeft = document.createElement('sextion')
sectionLeft.className = 'left-contente';
main.appendChild(sectionLeft)

// exercicio 6

let sectionRigth = document.createElement('sextion')
sectionRigth.className = 'rigth-contente';
main.appendChild(sectionRigth)

// exercicio 7

let imagem = document.createElement('img')
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
section.appendChild(imagem)

// exercicio 8

let listOrdenada =document.createElement('ol')
let itensList = document.createElement('li')