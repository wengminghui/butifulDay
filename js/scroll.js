(function() {
  var selScrollable = '.scrollable';
  // Uses document because document will be topmost level in bubbling
  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, {passive: false});
  $('body').on('touchstart', selScrollable, function(e) {
    if (e.currentTarget.scrollTop === 0) {
      e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
      e.currentTarget.scrollTop -= 1;
    }
    if (e.currentTarget.scrollLeft === 0) {
      e.currentTarget.scrollLeft = 1;
    } else if (e.currentTarget.scrollWidth === e.currentTarget.scrollLeft + e.currentTarget.offsetWidth) {
      e.currentTarget.scrollLeft -= 1;
    }
  });
  $(selScrollable).on('touchmove', function(e) {
    if ($(this)[0].scrollHeight > $(this).innerHeight() || $(this)[0].scrollWidth > $(this).innerWidth()) {
      e.stopPropagation();
    }
  });
})();

(function() {
  var agent = navigator.userAgent.toLowerCase(); //检测是否是ios
  var iLastTouch = null; //缓存上一次tap的时间
  if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) {
    document.body.addEventListener('touchend', function(event) {
      var iNow = new Date().getTime();
      iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */ ;
      var delta = iNow - iLastTouch;
      if (delta < 500 && delta > 0) {
        event.preventDefault();
        return false;
      }
      iLastTouch = iNow;
    }, false);
  }
})();