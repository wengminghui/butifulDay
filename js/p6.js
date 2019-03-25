app.pages[6] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p6',
    isFlipReady: false,
    hasBranch: true,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p6-back').on('touchend',function(){
      app.bgm.play();
      $('#icon-bgm').show();
      app.showPage(5);
    });
  }

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
    $('#icon-bgm').hide();

  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();
