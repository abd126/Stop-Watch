var min = 0;
var sec = 0;
var msec =  0;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");

var interval ;

function timer(){
    msec++
    msecHead.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHead.innerHTML = sec
        msec = 0;
    }
    else if(sec >= 60){
        min++
        minHead.innerHTML = min;
        sec = 0;
    }
     if (min >= 1){
        document.getElementById("min").style.display="inline-block";
        document.getElementById("sec").style.fontSize="6em";
        document.getElementById("msec").style.fontSize="6em";

    }  
}

function startBtn(){
    interval = setInterval(timer,10)
    document.getElementById("stBtn").disabled = true;

}

function pauseBtn(){
    clearInterval(interval)
    document.getElementById("stBtn").disabled = false;
}

function resetBtn(){
    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML = min
    secHead.innerHTML = sec
    msecHead.innerHTML = msec
    pauseBtn()

    if (min >= 0){
        document.getElementById("min").style.display="none";
        document.getElementById("sec").style.fontSize="9em";
        document.getElementById("msec").style.fontSize="6em";

    }
}