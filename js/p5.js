app.pages[5] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p5',
    isFlipReady: false,
    hasBranch: true,
  };
  
  var urlArr = [
    'https://baike.baidu.com/wikisecond/topic?topic=%E4%B8%9C%E5%8C%97%E8%99%8E',
    'https://baike.baidu.com/wikisecond/topic?topic=%E6%B1%9F%E8%B1%9A',
    'https://baike.baidu.com/wikisecond/topic?topic=%E9%AB%98%E9%BC%BB%E7%BE%9A%E7%BE%8A',
    'https://baike.baidu.com/wikisecond/topic?topic=%E5%A4%A7%E8%B1%A1',
    'https://baike.baidu.com/wikisecond/topic?topic=%E7%99%BD%E7%8A%80',
    'https://baike.baidu.com/wikisecond/topic?topic=%E7%A9%BF%E5%B1%B1%E7%94%B2',
    'https://baike.baidu.com/wikisecond/topic?topic=%E6%89%AC%E5%AD%90%E9%B3%84',
    'https://baike.baidu.com/wikisecond/topic?topic=%E9%9B%AA%E8%B1%B9',
    'https://baike.baidu.com/wikisecond/topic?topic=%E9%B2%A8%E9%B1%BC',
    'https://baike.baidu.com/wikisecond/topic?topic=%E9%BA%8B%E9%B9%BF'
  ];

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p5-button1').on('touchend',function(){
      $('.p6').append('<iframe id="myIframe" src="" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>');
      document.getElementById("myIframe").contentWindow.location.replace(urlArr[app.store.curIndex]);
      //console.log(app.store.curIndex);
      app.bgm.pause();
      app.showPage(6);
    });
    $('.p5-button2').on('touchend',function(){
      // $('.d-share').css('display','block');
    // $('.d-share').fadeIn();
      app.showDialog('share');
    });

    $('.d-share').on('touchend', function(){
      $('.d-share').fadeOut();
    });

  }

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();
