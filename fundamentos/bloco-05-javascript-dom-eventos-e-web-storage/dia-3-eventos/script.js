function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

function createDays() {
    let days = [29, 30];
    for (let index = 0; index <= 31; index += 1) {
        days.push(index)
    }
    return days
}
let dias = createDays();
// console.log(dias);

let criaLi = document.createElement('li')
let ul = document.getElementById('days')
// ul.appendChild(criaLi)
// console.log(ul);

for (let index2 = 0; index2 < dias.length; index2 += 1){
    ul.appendChild(criaLi);
    criaLi.innerHTML = dias[index2]
}

console.log(ul);

