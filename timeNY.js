document.addEventListener('DOMContentLoaded', () =>{
    const date = new Date('Jan 1 2023 00:00:00');
    console.log(date);

    const dVal = document.querySelector('.time-count-days .time-count-val')
    const hVal = document.querySelector('.time-count-hours .time-count-val')
    const mVal = document.querySelector('.time-count-minutes .time-count-val')
    const sVal = document.querySelector('.time-count-seconds .time-count-val')

    const dText = document.querySelector('.time-count-days .time-count-text')
    const hText = document.querySelector('.time-count-hours .time-count-text')
    const mText = document.querySelector('.time-count-minutes .time-count-text')
    const sText = document.querySelector('.time-count-seconds .time-count-text')

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = date - now

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24)

        let hours = Math.floor(leftUntil / 1000 / 60 / 60) %24

        let minutes = Math.floor(leftUntil / 1000 / 60) %60

        let seconds = Math.floor(leftUntil / 1000) %60

        dVal.textContent = days
        hVal.textContent = hours
        mVal.textContent = minutes
        sVal.textContent = seconds

        dText.textContent = declOfNum(days, ['День', 'Дня', 'Дней']);
        hText.textContent = declOfNum(hours, ['Час', 'Часа', 'Часов']);
        mText.textContent = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
        sText.textContent = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
    }

    timeCount()

    setInterval(timeCount, 1000)

})