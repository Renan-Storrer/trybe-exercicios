let body = document.querySelector('body');
let h1Body = document.createElement('h1');
let mainBody = document.createElement('main');
let sectionMain = document.createElement('section')
let sectionLeft = document.createElement('section')
let sectionRigth = document.createElement('section')
let img = document.createElement('img')

let p = document.createElement('p')

h1Body.innerText = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(h1Body)
body.appendChild(mainBody)
mainBody.className = "main-content"
// console.log(body);

let mainBodyElement = document.querySelector('main')
// console.log(mainBodyElement);
mainBodyElement.appendChild(sectionMain)
sectionMain.className = 'center-content'
sectionMain.id = '3'
// console.log(sectionMain);
mainBodyElement.appendChild(sectionLeft)
sectionLeft.className = 'left-content'

mainBodyElement.appendChild(sectionRigth)
sectionRigth.className = 'right-content'


let sectionMainElement = document.getElementById('3')
// console.log(sectionMainElement);
sectionMainElement.appendChild(p)
p.innerText = 'Olá, requisito 4'

let left = document.getElementsByClassName('left-content')[0]
left.appendChild(img)
img.src = 'https://picsum.photos/200'
img.className = 'small-image'
// console.log(left);

let right = document.querySelector('.right-content')
let createUl = document.createElement('ul')
right.appendChild(createUl)
// console.log(right);
let ulHTML = document.querySelector('ul')
// console.log(ulHTML);
// let li = document.createElement('li')
// let ul = document.querySelector('ul')
// let array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
// ul.appendChild(li).innerText = 'um'
// ul.appendChild(li).innerText = 'um'
// console.log(ul);
