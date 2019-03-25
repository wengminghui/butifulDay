app.pages[1] = (function() {
  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p1',
    isFlipReady: false, //标志页面是否可以翻页, 当页面所有动画运行完之后设置为true,离开页面后再重置为false
    hasBranch: false, //标志页面内是否有分支,默认为false,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    var arr = ['A01','A02','A03','A04','B01','B02','B03','C01','C02','C03','C04']
    setTimeout(function(){
      $(".p1-bear").addClass('p1BearShowLeft');
      var i = 0;
      var timer = setInterval(function(){
        if(i < arr.length-4){
          $(".p1-bear").attr('src','img/bear/'+ arr[i] +'.png');
          i++
        }else{
          clearInterval(timer);
          $(".p1-text").css({
            'transform': 'scale(1)'
          });
          app.audios.list.aClick.play();
          setTimeout(function(){
            $(".p1-button").fadeIn();
          },500)
          var j = 0;
          timer2 = setInterval(function(){
            $(".p1-bear").attr('src','img/bear/'+ arr[j+7] +'.png');
            if(j > 2){
              j = 0;
            }else{
              j++;
            }
          },200)
        }
      },200)
    },1000);

    $('.p1-button').on('touchstart',function(){
      app.showPage(2);
    });
  }

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
    app.bgm.pause();
  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();


