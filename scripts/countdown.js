// Set the date we're counting down to
var countDownDate = new Date("Aug 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".timer1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);

// timer2

// Set the date we're counting down to
var countDownDate2 = new Date("July 25, 2022 10:24:2").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".timer2").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

}, 1000);

// timer3

// Set the date we're counting down to
var countDownDate3 = new Date("Sep 15, 2022 20:33:35").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;

  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".timer3").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";

}, 1000);

// timer4

// Set the date we're counting down to
var countDownDate4 = new Date("Aug 15, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x4 = setInterval(function() {

  // Get today's date and time
  var now4 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance4 = countDownDate4 - now4;

  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".timer4").innerHTML = days4 + "d " + hours4 + "h "
  + minutes4 + "m " + seconds4 + "s ";

}, 1000);
