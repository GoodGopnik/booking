$('#rangestart').calendar({
    type: 'date',
    startMode : false,
    endCalendar: $('#rangeend'),
    text: {
        days: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        now: 'Сейчас',
        am: 'AM',
        pm: 'PM'
      },
  });
  $('#rangeend').calendar({
    type: 'date',
    startCalendar: $('#rangestart'),
    text: {
        days: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        now: 'Сейчас',
        am: 'AM',
        pm: 'PM'
      },
  });
  

function counter() {
let inputHotel = document.querySelector('.input__hotel');
let inputAdults = document.querySelector('.input__adults');
let inputKids = document.querySelector('.input__kids');
let arrowUpHotel = document.querySelector('#arrow__up__hotel');
let arrowDownHotel = document.querySelector('#arrow__down__hotel');
let arrowUpAdults = document.querySelector('#arrow__up__adults');
let arrowDownAdults = document.querySelector('#arrow__down__adults');
let arrowUpKids = document.querySelector('#arrow__up__kids');
let arrowDownKids = document.querySelector('#arrow__down__kids');


let countHotel = 0;
let countAdults = 0;
let countKids = 0;

function hotel () {
    arrowUpHotel.addEventListener('click', () => {
        countHotel++;
        inputHotel.value = countHotel
    })
    
    arrowDownHotel.addEventListener('click', () => {
        if (countHotel <= 0) {
            return 0
        }
        countHotel--;
        inputHotel.value = countHotel
    })
}
function adults () {
    arrowUpAdults.addEventListener('click', () => {
        countAdults++;
        inputAdults.value = countAdults
    })
    
    arrowDownAdults.addEventListener('click', () => {
        if (countAdults <= 0) {
            return 0
        }
        countAdults--;
        inputAdults.value = countAdults
    })
}
function kids () {
    arrowUpKids.addEventListener('click', () => {
        countKids++;
        inputKids.value = countKids
    })
    
    arrowDownKids.addEventListener('click', () => {
        if (countKids <= 0) {
            return 0
        }
        countKids--;
        inputKids.value = countKids
    })
}

hotel();
adults();
kids()
}

counter()


