const yearsEl = document.getElementById("years");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countdown(){
    const newBeginDate = new Date("27 nov 2021")
    
    if (newBeginDate <= 0)
      {newBeginDate.setFullYear(newBeginDate.getFullYear() + 1);
    }

    const currentDate = new Date();

    const totalseconds = (newBeginDate - currentDate)/1000;
    
    if (totalseconds <= 0){
        totalseconds=0;
    }

    const years=Math.floor((Math.floor(totalseconds/3600/24))/365);
    const days=Math.floor((Math.floor(totalseconds/3600/24))%365);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    yearsEl.innerHTML = formatTime(years);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    console.log(years,days,hours,minutes,seconds)

}

function formatTime(time){
    return time < 10? `0${time}` : time;
}



countdown();

setInterval(countdown,1000);