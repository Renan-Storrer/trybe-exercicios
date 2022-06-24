let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem vinda, ' + info.personagem + '!');

info.recorrente = 'sim'
// console.log(info)

for (index in info) {
    console.log(index)
}