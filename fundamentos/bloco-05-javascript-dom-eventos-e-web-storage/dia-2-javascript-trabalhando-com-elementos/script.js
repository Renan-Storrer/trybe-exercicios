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
