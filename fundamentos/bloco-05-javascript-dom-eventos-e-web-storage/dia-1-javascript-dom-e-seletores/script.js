// exercicio 1

function mudarTexto() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerText = 'Estar trabalhando em uma empresa que eu goste!'
}
mudarTexto();

// exercicio 2

function mudarBackGround() {
    let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
    quadradoAmarelo.style.background = 'rgb(76,164,109)';
}

// exercicio 3

mudarBackGround();

function mudarBackGround2() {
    let quadradoVermelho = document.getElementsByClassName('center-content')[0];
    quadradoVermelho.style.background = 'white'
}

mudarBackGround2();

// exercicio 4

function corrigeH1() {
    let tituloTexto = document.getElementsByTagName('h1')[0];
    tituloTexto.innerText = "Exercicio 5.1 - JavaScript";
}

corrigeH1();

// exercicio 5

function letrasMaiusculas() {
    let modificap = document.getElementsByTagName('p');
    for (let i of modificap) {
        i.innerText = i.innerText.toUpperCase();
    }
}

letrasMaiusculas();

// exercicio 6

function conteudoParagrafo () {
    let conteudosParagrafo = document.getElementsByTagName('p');
    for (let index = 0; index < conteudosParagrafo.length; index += 1) {
        console.log(conteudosParagrafo[index].innerText);
    }

};

conteudoParagrafo ();