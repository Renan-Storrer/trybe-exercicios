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

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDayList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday'
            dayItem.innerHTML = day;
            getDayList.appendChild(dayItem)
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day fryday';
            dayItem.innerHTML = day
            getDayList.appendChild(dayItem)
        } else if (day === 25) {
            dayItem.className = 'day holiday froday'
            dayItem.innerHTML = day
            getDayList.appendChild(dayItem)
        } else {
            day.className = 'day'
            dayItem.innerHTML = day
            getDayList.appendChild(dayItem)
        }
    }
}

createDaysOfTheMonth();

function criaBotao() {
    let buttonsContainer = document.getElementsByClassName('buttons-container')[0]
    let button = document.createElement('button')
    // console.log(divButton);
    buttonsContainer.appendChild(button)
    button.id = 'btn-holiday'
    button.innerText = 'FERIADOS'

}

criaBotao();

function displayHolidays() {
    let buttonHolliday = document.querySelector('#btn-holiday');
    let holiday = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)'
    let color = 'white'

    buttonHolliday.addEventListener('click', function alteraCor() {
        for (let index = 0; index < holiday.length; index += 1) {
            if (holiday[index].style.backgroundColor === color) {
                holiday[index].style.backgroundColor = backgroundColor
            } else {
                holiday[index].style.backgroundColor = color
            }
        }
    })
}
displayHolidays()

function criaBotaoSexta() {
    let buttonsContainer = document.getElementsByClassName('buttons-container')[0]
    let button = document.createElement('button')
    // console.log(divButton);
    buttonsContainer.appendChild(button)
    button.id = 'btn-friday'
    button.innerText = 'SEXTA-FEIRA'

}

criaBotaoSexta();