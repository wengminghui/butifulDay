(function() {
  var fontSize = document.documentElement.clientWidth / 3.75;

  fontSize = fontSize > 180 ? 180 : fontSize;

  document.documentElement.style.fontSize = fontSize + 'px';
})();
