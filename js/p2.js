app.pages[2] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p2',
    isFlipReady: false,
    hasBranch: true,
  };


  function init() {
    initEvents();
  }

  function initEvents() {
    
  }

  function onLoad() {
    var str = '一路走来，险阻重重但人类朋友的爱让未来值得期待只是…这份爱我们不敢独享因为在世界的很多地方我的朋友们并不如这般幸运';
    var arr = str.split('');
    var i = 0;
    console.log(arr);
    setTimeout(function(){
      app.bgm.change('media/word.mp3');
      app.bgm.play();
      var timer = setInterval(function(){
        console.log(i);
        if(i < 9){
          $(".p2-text p").eq(0).append(arr[i])
        }else if(i < 23){
          $(".p2-text p").eq(1).append(arr[i])
        }else if(i < 26){
          $(".p2-text p").eq(2).append(arr[i])
        }else if(i < 35){
          $(".p2-text p").eq(3).append(arr[i])
        }else if(i < 45){
          $(".p2-text p").eq(4).append(arr[i])
        }else if(i < 57){
          $(".p2-text p").eq(5).append(arr[i])
        }else{
          app.bgm.pause();
          app.bgm.change('media/bgm.mp3');
          clearInterval(timer);
          $(".p2-button").fadeIn();
          $(".p2-button,.p2-text").on('click',function(){
            app.showPage(3);
          });
        }
        i++
      },100)
    },1000);
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
    $('#icon-bgm').css('position','');
  }

  function onLeave() {
    page.isFlipReady = false;

  }

  return page;
})();
