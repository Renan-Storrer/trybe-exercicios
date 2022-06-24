let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem vinda, ' + info.personagem + '!');

info.recorrente = 'sim'
// console.log(info)

for (index in info) {
    // console.log(index)
}

for (index in info) {
    // console.log(info[index])
}

// ---------------------------------------------------------------------------

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}

for (propriedades in info) {
    if (
        propriedades === 'recorrente' &&
        info[propriedades] === 'sim' &&
        info2[propriedades] === 'sim'
    ) {
        console.log('Ambos reccorentes')
    } else {
        console.log(info[propriedades] + ' e ' + info2[propriedades] );
    }
}