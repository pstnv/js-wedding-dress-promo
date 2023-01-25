const collection = document.querySelectorAll('.card');
const inputField = document.querySelectorAll('.inputText');


collection.forEach(item=> {
    item.addEventListener('mouseover', ()=>{
        loseFocus();
        item.classList.add('selected');

        if (window.innerHeight > window.innerWidth && window.innerWidth <= '500') {
            item.scrollIntoView({ block: 'center'});
        }
    });

    function loseFocus () {
        collection.forEach( item => {
            item.classList.remove('selected');
        });
    }
});

//ОБРАТНЫЙ ОТСЧЕТ
function countdown () {

    const msInSecond = 1000;
    const msInMinute = 60 * msInSecond;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;
    
    // функция возвращает падеж (день, час, минута, секунда)
    function declOfNum(number, titles) { 
        const cases = [2, 0, 1, 1, 1, 2]; 
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10 < 5) ? number%10 : 5] ]; 
    }
    
    // определяем разницу между датами (даты отсчета и сегодня)
    let saleOpens = new Date("June, 7 2022 00:00");

    const today = new Date();
    let diff = saleOpens - today;
  
    //1-ый способ: если событие наступило, останавливаем цикл 
    // if (diff <= 0) {
    //     clearInterval(intervalID);
    //     document.querySelector('h2').innerText = 'Платья доступны к заказу';
    // }
    // else {
    //     //считаем и записываем остаток дней
    //     const daysLeft = Math.floor(diff / msInDay);
    //     document.querySelector('#days').innerText = daysLeft;
    //     //склоняем и записываем слово "день"
    //     const dayinRussia = declOfNum(daysLeft, ['день', 'дня', 'дней']);
    //     document.querySelector('#daysCase').innerText = dayinRussia;
    
    
    //     //считаем и записываем остаток часов
    //     const hoursLeft = Math.floor((diff % msInDay) / msInHour);
    //     document.querySelector('#hours').innerText = hoursLeft;
    //     //склоняем и записываем слово "час"
    //     const hourinRussia = declOfNum(hoursLeft, ['час', 'часа', 'часов']);
    //     document.querySelector('#hoursCase').innerText = hourinRussia;
    
    //     //считаем и записываем остаток минут
    //     const minutesLeft = Math.floor((diff % msInHour) / msInMinute);
    //     document.querySelector('#minutes').innerText = minutesLeft;
    //     //склоняем и записываем слово "минута"
    //     const minuteinRussia = declOfNum(minutesLeft,['минуту', 'минуты', 'минут']);
    //     document.querySelector('#minutesCase').innerText = minuteinRussia;
    
    //     //считаем и записываем остаток секунд    
    //     const secondsLeft = Math.floor((diff % msInMinute) / msInSecond);    
    //     document.querySelector('#seconds').innerText = secondsLeft;
    //     //склоняем и записываем слово "секунда"
    //     const secondinRussia = declOfNum(secondsLeft, ['секунду', 'секунды', 'секунд']);
    //     document.querySelector('#secondsCase').innerText = secondinRussia;
    
    //     console.log(document.querySelector('#secondsCase').textContent);
    //     //3-ий способ: если событие наступило, останавливаем цикл
    //     }


    //2-ой способ: если событие наступило, начинаем новый отсчет - сколько ведутся продажи. Ставим новый год отчета
    if (diff <= 0) {
        saleOpens.setFullYear(today.getFullYear());
      //2.1 - если прибавить сегодняшний год и будет разница, то начинаем отсчет по текующем году
      //2.1 - если разницы не будет, то прибавляем год.      
        saleOpens - today > 0 ? diff = saleOpens - today : diff = saleOpens.setFullYear(today.getFullYear() + 1) - today;
    }
  
  
    //считаем и записываем остаток дней
    const daysLeft = Math.floor(diff / msInDay);
    document.querySelector('#days').innerText = daysLeft;
    //склоняем и записываем слово "день"
    const dayinRussia = declOfNum(daysLeft, ['день', 'дня', 'дней']);
    document.querySelector('#daysCase').innerText = dayinRussia;


    //считаем и записываем остаток часов
    const hoursLeft = Math.floor((diff % msInDay) / msInHour);
    document.querySelector('#hours').innerText = hoursLeft;
    //склоняем и записываем слово "час"
    const hourinRussia = declOfNum(hoursLeft, ['час', 'часа', 'часов']);
    document.querySelector('#hoursCase').innerText = hourinRussia;

    //считаем и записываем остаток минут
    const minutesLeft = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector('#minutes').innerText = minutesLeft;
    //склоняем и записываем слово "минута"
    const minuteinRussia = declOfNum(minutesLeft,['минуту', 'минуты', 'минут']);
    document.querySelector('#minutesCase').innerText = minuteinRussia;

    //считаем и записываем остаток секунд    
    const secondsLeft = Math.floor((diff % msInMinute) / msInSecond);    
    document.querySelector('#seconds').innerText = secondsLeft;
    //склоняем и записываем слово "секунда"
    const secondinRussia = declOfNum(secondsLeft, ['секунду', 'секунды', 'секунд']);
    document.querySelector('#secondsCase').innerText = secondinRussia;    
}

let intervalID = setInterval(countdown, 1000);
gsap.from(".card", {opacity: 0, duration: 2, stagger: 0.4})
gsap.from(".imgRings", {y: -200, duration: 1, rotate: 720, opacity: 0, delay: 2.5})