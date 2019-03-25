app.pages[3] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p3',
    isFlipReady: false,
    hasBranch: true,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p3-button').on('touchend',function(){
      //console.log(44);
      app.showPage(4);
    });
    // $('#icon-bgm').on('touchend',function(){
    //   app.bgm.pause();
    // })
  }

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
    $('#icon-bgm').css('position','fixed');
    app.bgm.change('media/bgm.mp3');
    app.bgm.play();
    setTimeout(function(){
      $('.p3-button').css('display','block');
      $('.p3-text-one').css('display','block');
      $('.p3-text-two').css('display','block');
      setTimeout(function(){
        $('.northeast-tiger').css('display','block');
        $('.northeast-tiger').addClass('p3-animation');
      },50);
      setTimeout(function(){
        $('.elk').css('display','block');
        $('.elk').addClass('p3-animation');
      },200);
      setTimeout(function(){
        $('.snow-leopard').css('display','block');
        $('.snow-leopard').addClass('p3-animation');
      },350);
      setTimeout(function(){
        $('.chinese-alligator').css('display','block');
        $('.chinese-alligator').addClass('p3-animation');
      },500);
      setTimeout(function(){
        $('.pangolin').css('display','block');
        $('.pangolin').addClass('p3-animation');
      },650);
      setTimeout(function(){
        $('.high-nose-antelope').css('display','block');
        $('.high-nose-antelope').addClass('p3-animation');
      },800);
      setTimeout(function(){
        $('.shark').css('display','block');
        $('.shark').addClass('p3-animation');
      },950);
      setTimeout(function(){
        $('.the-finless-porpoise').css('display','block');
        $('.the-finless-porpoise').addClass('p3-animation');
      },1100);
    },400)

  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();
