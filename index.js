var seconds = 0;
var mins = 0;
var hours = 0;
var stopwatchEl = document.getElementById("stopwatch")
var startButtonEl = document.getElementById("start")
var stopButtonEl = document.getElementById("stop")
var resetButtonEl = document.getElementById("reset")
startButtonEl.addEventListener("click", startWatch)
stopButtonEl.addEventListener("click", stopWatch)
resetButtonEl.addEventListener("click", resetStopWatch)
enableStopWatch = true;

function startWatch(){
    enableStopWatch = true;
    calcTimer();
}

function calcTimer(){
    if(enableStopWatch){
        seconds += 1; 
        let tempMins = mins + Math.floor(seconds / 60);
        let tempHours = hours + Math.floor(tempMins / 60);
        seconds = seconds % 60;  
        mins = tempMins;
        hours = tempHours
    
        displayStopWatch();
        setTimeout(()=>{
            calcTimer();
        }, 1000)
    }

}

function displayStopWatch(){
    stopwatchEl.innerHTML = hours +'h ' + mins +'m ' + seconds + 's';
}


function stopWatch(){
    enableStopWatch = false;
}

function resetStopWatch(){
    seconds = mins = hours = 0;
    displayStopWatch();
}

resetStopWatch();