$(document).ready(function() {
  var clockContainer = $("#clock");

  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var timeString = hours + ":" + minutes + ":" + seconds;

    clockContainer.text(timeString);
  }

  setInterval(updateClock, 1000);

  clockContainer.mouseover(function() {
    clockContainer.css("color", "red");
  });

  clockContainer.mouseout(function() {
    clockContainer.css("color", "black");
  });
});
