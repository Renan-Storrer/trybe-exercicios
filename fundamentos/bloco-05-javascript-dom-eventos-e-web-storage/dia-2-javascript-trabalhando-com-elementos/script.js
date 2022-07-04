let body = document.querySelector('body');
let h1Body = document.createElement('h1');
let mainBody = document.createElement('main');
let sectionMain = document.createElement('section')
let sectionClass = document.createElement('section')
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
mainBodyElement.appendChild(sectionClass)
sectionClass.className = 'left-content'

let sectionMainElement = document.getElementById('3')
console.log(sectionMainElement);
sectionMainElement.appendChild(p)
p.innerText = 'Olá, requisito 4'

