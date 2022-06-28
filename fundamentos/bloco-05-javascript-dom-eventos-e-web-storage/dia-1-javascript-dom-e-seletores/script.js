// exercicio 1

function mudarTexto () {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerText = 'Estar trabalhando em uma empresa que eu goste'
}
mudarTexto();

// exercicio 2

function mudarBackGround () {
    let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
    quadradoAmarelo.style.background = 'rgb(76,164,109)';
}

mudarBackGround();

function mudarBackGround2 () {
    let quadradoVermelho = document.getElementsByClassName('center-content');
    quadradoVermelho.style.background = 'white'
}

mudarBackGround2