(function() {
    "use strict"
    const dayCount = document.querySelector(".days");
    const minuteCount = document.querySelector(".minutes");
    const hourCount = document.querySelector(".hours");
    const secondCount = document.querySelector(".seconds");
    
    let deadline = "October 31, 2021 12:00 AM";

    
    function getTime(endTime) {
        let currentTime = Date.parse(endTime) - Date.now(); 
        let seconds = Math.floor(currentTime / 1000 % 60);
        let minutes = Math.floor((currentTime/ 1000 / 60) % 60) ;
        let hours = Math.floor(currentTime/ (1000 * 60 * 60) % 24);
        let days = Math.floor(currentTime/ (1000 * 60 * 60 * 24)); 

        return {
            currentTime,
            days,
            hours,
            minutes,
            seconds
        }
    }
    
    function updateCountDown(endTime) {
        const clock = document.querySelector("#clockDiv");
        const time = getTime(endTime);

        if(time.currentTime === 0) {
            clearInterval(countDown);
            clock.innerText = "COMPLETE";
        }else {
            clock.innerText = `${time.days}: ${time.hours}: ${time.minutes}: ${time.seconds}`
        }
    }
    
    let countDown = setInterval(updateCountDown(deadline), 1000)
})();