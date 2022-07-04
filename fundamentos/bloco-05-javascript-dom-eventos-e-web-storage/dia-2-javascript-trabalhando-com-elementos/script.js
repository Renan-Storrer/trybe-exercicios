let body = document.querySelector('body');
let h1Body = document.createElement('h1');
let mainBody = document.createElement('main');
let sectionMain = document.createElement('section')

h1Body.innerText = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(h1Body)
body.appendChild(mainBody)
mainBody.className = "main-content"
// console.log(body);

let mainBodyElement = document.querySelector('main')
// console.log(mainBodyElement);
mainBodyElement.appendChild(sectionMain)
sectionMain.className = 'center-content'

