$(document).ready(function(){

  var today = new Date();
  var finalDay = new Date(2019, 10, 19);
  today = today.getTime()/1000;
  finalDay = finalDay.getTime()/1000;
  var dyear = 60 * 60 * 24 * 365;
  var ddays = 60 * 60 * 24;
  var dhours = 60 * 60;

function countdown() {

// increase for 1second for each interval
today = today + 1;

// calculate correct numbers of years, days, hours, minutes, seconds
var seconds = Math.round(finalDay - today);
// years
var years = seconds / dyear;
seconds = seconds % dyear;
years = Math.floor(years);

// days
var days = seconds / ddays;
seconds = seconds % ddays;
days = Math.floor(days);

// hours
var hours = seconds / dhours;
seconds = seconds % dhours;
hours = Math.floor(hours);

// minutes
var minutes = seconds / 60;
seconds = seconds % 60;
minutes = Math.floor(minutes);


// shows zeros in front of hours, minutes, seconds when they are less than 10
if (seconds < 10) {
  seconds = '0' + seconds;
}
if (minutes < 10) {
  minutes = '0' + minutes;
}
if (hours < 10) {
  hours = '0' + hours;
}


// update correct fields
$('#years').html(years);
$('#days').html(days);
$('#hours').html(hours);
$('#minutes').html(minutes);
$('#seconds').html(seconds);
}

var interval = window.setInterval(countdown, 1000);
});
