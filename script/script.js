// Объявляем переменную для хранения счетчиков километров
let kmCounter = document.querySelector('#counter-km');

// Объявляем переменную для хранения счетчиков дней
let dayCounter = document.querySelector('#counter-days')

// Объявляем переменную для метода смещения блока с видео вверх
let kostromaOffset = document.querySelector('#city-kostroma').offsetTop;

// пролонгируем смещение на остальные id
let ekbOffset = document.querySelector('#city-ekb').offsetTop;

let omskOffset = document.querySelector('#city-omsk').offsetTop;

let yablPerevalOffset = document.querySelector('#city-yablonovy-pereval').offsetTop;

let khabarovskOffset = document.querySelector('#city-khabarovsk').offsetTop;


// Создаём функцию обработчика событий для отслеживания положения скролла 
document.addEventListener('scroll', function () {
  // Объявляем переменную для сохранения позиции скролла по вертикали
  let scrollY = window.pageYOffset;

  if (scrollY <= kostromaOffset) {
    kmCounter.textContent = 0;
    dayCounter.textContent = 'начало путешествия';
  } else if (scrollY <= ekbOffset) {
    kmCounter.textContent = 376;
    dayCounter.textContent = '1 день';
  } else if (scrollY <= omskOffset) {
    kmCounter.textContent = 1819;
    dayCounter.textContent = '2 дня';
  } else if (scrollY <= yablPerevalOffset) {
    kmCounter.textContent = 6110;
    dayCounter.textContent = '4 дня';
  } else if (scrollY <= khabarovskOffset) {
    kmCounter.textContent = 8534;
    dayCounter.textContent = '6 дней';
  } else {
    kmCounter.textContent = 9300;
    dayCounter.textContent = '6 дней, конечная';
  }
})


