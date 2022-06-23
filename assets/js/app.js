const day = document.getElementById('day')
const hour = document.getElementById('hour')
const munite = document.getElementById('munite')
const second = document.getElementById('second')
const newYearEve = '1 jan 2023';

const countDown =()=>{
    const curentDate = new Date();
    const newYearDate = new Date(newYearEve);
    const totalSecond = (newYearDate-curentDate)/1000;

    const day_val = Math.floor(totalSecond/3600/24);
    const hour_val = Math.floor(totalSecond/3600 % 24);
    const munite_val = Math.floor(totalSecond/60 % 60);
    const sceond_val = Math.floor(totalSecond%60);

    day.innerHTML = day_val;
    hour.innerHTML = hour_val;
    munite.innerHTML = munite_val;
    second.innerHTML = sceond_val;

}

countDown();

setInterval(countDown,1000);


