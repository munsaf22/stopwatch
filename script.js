
let mins = 0;
let secs = 0;
let msec = 0;
let timer = false;

function start() {
  timer = true;

}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
 mins=secs=msec=0;
 
 
 document.getElementById('msec').innerHTML = "00";
 document.getElementById('secs').innerHTML = "00" ;
 document.getElementById('mins').innerHTML = "00" ;
}

function display() {
  if (timer == true) {
    msec++;

    if (msec == 100) {
      secs++;
      msec = 00;
      if (secs == 60) {
        mins++;
        secs = 00;
      }

    }
    var minsString = mins;
    var secsString = secs;
    var msecString = msec;
    if (mins < 10) {
      minsString = "0" + mins;
    }
    if (secs < 10) {
      secsString = "0" + secs;
    }
    if (msec < 10) {
      msecString = "0" + msec;
    }
    document.getElementById('msec').innerHTML = msecString;
    document.getElementById('secs').innerHTML = secsString ;
    document.getElementById('mins').innerHTML = minsString ;
  }

}
setInterval(display, 10);



