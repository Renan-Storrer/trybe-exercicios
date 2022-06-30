// // Exercicio 1

let h1 = document.createElement('h1')
h1.innerText = "Exercício 5.2 - JavaScript DOM"
document.body.appendChild(h1)

// // exercicio 2

let main = document.createElement('main')
main.className = 'main-content'
document.body.appendChild(main)

// exercicio 3

let section = document.createElement('section')
section.className = 'center-content'
main.appendChild(section)

// // exercicio 4

let p = document.createElement('p')
section.appendChild(p)
p.innerText = 'TEXTO TEXTO TEXTO TEXTO TEXTO'

// exercicio 5

let sectionLeft = document.createElement('sextion')
sectionLeft.className = 'left-contente';
main.appendChild(sectionLeft)

// // exercicio 6

let sectionRigth = document.createElement('sextion')
sectionRigth.className = 'rigth-contente';
main.appendChild(sectionRigth)

// // exercicio 7

let imagem = document.createElement('img')
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
section.appendChild(imagem)

// // exercicio 8

let listU =document.createElement('ul')
sectionRigth.appendChild(listU)
let arrayList = ['Um' ,'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (let index = 0; index < arrayList.length; index += 1){
    let conteudoLi = document.createElement('li')
    conteudoLi.innerHTML = arrayList[index]
    listU.appendChild(conteudoLi)
}