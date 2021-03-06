var timer = {
  element: null,
  targetTime: 0,
  init: function() {
    timer.element =  document.querySelector('[data-countdown]');
    var secondsTotal = parseInt(((timer.element.dataset.countdownMinutes || 0) * 60)) + parseInt((timer.element.dataset.countdownSeconds || 0));
    timer.targetTime = new Date(new Date().getTime() + secondsTotal * 1000);
    timer.updateView();
    window.setInterval(timer.updateView, 500);
  },
  updateView: function() {
    var now = new Date();
    var secondsRemaining = timer.targetTime - now;
    if (secondsRemaining < 0) {
      timer.element.innerText = timer.element.dataset.countdownEndText;
    } else {
      var minutes = Math.floor((secondsRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((secondsRemaining % (1000 * 60)) / 1000);
      timer.element.innerText = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }
  },
};

window.addEventListener('load', timer.init);
