// Set the date to count down to
var countDate = new Date("Dec 14, 2018 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var currentDate = new Date().getTime();

  var clock = distance(countDate, currentDate, x);

  //Function that takes in countDate -- calculate distance
  function distance(countDate, currentDate, x) {
    var distance = countDate - currentDate;
    if (distance < 0) {
      clearInterval(x);
      return document.getElementById("countdown").innerHTML = "I have graduated with a Bachelor's Degree in Digital Media Computer Science.";
    }
    else {
      var countDownTime = getTimes(distance);
      return document.getElementById("countdown").innerHTML = countDownTime[0] + "d " + countDownTime[1] + "h "
        + countDownTime[2] + "m " + countDownTime[3] + "s ";
    }
  }

  function getTimes(distance) {
    var timesArray = [];
    timesArray[0] = Math.floor(distance / (1000 * 60 * 60 * 24));
    timesArray[1] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timesArray[2] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    timesArray[3] = Math.floor((distance % (1000 * 60)) / 1000);
    return timesArray;
  }
});


