window.onload=function() {
    let seconds=0;
    let tens=0;
    let outputseconds = document.getElementById("seconds");
    let outputtens=  document.getElementById("tens");
    let buttonStart=document.getElementById("start");
    let buttonStop=document.getElementById("stop");
    let buttonReset=document.getElementById("reset");
    let Interval;


function startTimer() {
    tens++;
    if (tens<=9) {
        outputtens.innerHTML= "0"+tens;

    }
    if (tens>9) {
        outputtens.innerHTML=tens;
    }
    if (tens>99) {
        seconds++;

        outputseconds.innerHTML="0"+seconds;
        tens=0;
        outputtens.innerHTML="0"+tens;
    }
    if (seconds>9) {
        outputseconds.innerHTML= seconds;
    }
}

buttonStart.addEventListener("click",() => {
    Interval=setInterval(startTimer,10);
}


)

buttonStop.addEventListener("click", ()=> {
    clearInterval(Interval);
}

)
buttonReset.addEventListener("click",()=> {
    clearInterval(Interval);
    tens=0;
    seconds=0;
    outputtens.innerHTML="0"+tens;
    outputseconds.innerHTML="0"+ seconds;
}

)
}