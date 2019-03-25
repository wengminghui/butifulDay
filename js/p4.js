app.pages[4] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p4',
    isFlipReady: false,
    hasBranch: true,
  };
  var swiper;
  var curIndex = 0;
  var timer;
  var i = 0;
  var iconData = [{
      bgImg: 'img/icon0_bg.jpg',
      iconT: 'img/icon0_t.png',
      iconDescri1: '高大强壮，行动敏捷，老虎中的战斗虎，爱搞偷袭的独行侠。',
      iconDescri2: '过度的森林采伐和非法盗猎导致东北虎的数量急剧下降，目前野生东北虎全球仅剩500多头。',
      animals: '东北虎'
    },
    {
      bgImg: 'img/icon1_bg.jpg',
      iconT: 'img/icon1_t.png',
      iconDescri1: '眼睛小，视力好，笑容迷人智商高，虽然不在大海中，但也是长江中的“微笑天使”哦~',
      iconDescri2: '至2018年，长江江豚仅剩约1012头。作为前车之鉴的白鳍豚已离我们而去，请留住江豚的微笑',
      animals: '江豚'
    },
    {
      bgImg: 'img/icon2_bg.jpg',
      iconT: 'img/icon2_t.png',
      iconDescri1: '作为动物界的骨灰级元老，为了适应高寒环境，大鼻子可是它的生存法宝呢！',
      iconDescri2: '由于羚羊角是名贵药材，导致它们遭到猎杀。中国的野生种群已经灭绝，现仅见于俄罗斯。',
      animals: '高鼻羚羊'
    },
    {
      bgImg: 'img/icon3_bg.jpg',
      iconT: 'img/icon3_t.png',
      iconDescri1: '作为陆地上最大的哺乳动物，大象的体重，是以“吨”计的，也是著名的举重运动员哦~',
      iconDescri2: '长期的猎杀导致大象逐渐失去了象牙基因，也许将来我们再也看不到长着象牙的大象了。',
      animals: '大象'
    },
    {
      bgImg: 'img/icon4_bg.jpg',
      iconT: 'img/icon4_t.png',
      iconDescri1: '性情温和的它是世界第五大陆生动物。求偶时秒变情歌小王子，撩妹技能一级棒。',
      iconDescri2: '不法分子不断鼓吹犀角的药用价值，这些遭受无妄之灾的白犀牛正渐渐消失在我们的面前。',
      animals: '白犀'
    },
    {
      bgImg: 'img/icon5_bg.jpg',
      iconT: 'img/icon5_t.png',
      iconDescri1: '金钟罩、铁布衫，资深吃货穿山甲，一年吃掉700万只蚂蚁和白蚁，连起来能绕地球几圈？',
      iconDescri2: '大量捕杀穿山甲，导致它们成为最常被走私的动物之一。森林卫士沦为人类欲望的牺牲品。',
      animals: '穿山甲'
    },
    {
      bgImg: 'img/icon6_bg.jpg',
      iconT: 'img/icon6_t.png',
      iconDescri1: '在地球上生存了两亿年的资深居民，动物界活化石。虽然长得凶，但其实很温柔。',
      iconDescri2: '扬子鳄是我国特有的爬行动物，大批湿地改为农田，导致野生扬子鳄的数量一度只剩150条。',
      animals: '扬子鳄'
    },
    {
      bgImg: 'img/icon7_bg.jpg',
      iconT: 'img/icon7_t.png',
      iconDescri1: '生活在北方雪域的雪豹拥有特殊的毛色和保暖机制，严寒天气毫无畏惧，随身自带暖宝宝。',
      iconDescri2: '由于非法捕猎等人为因素，使雪豹的数量逐渐减少。在中国，雪豹的数量甚至少于大熊猫。',
      animals: '雪豹'
    },
    {
      bgImg: 'img/icon8_bg.jpg',
      iconT: 'img/icon8_t.png',
      iconDescri1: '称霸海洋5亿年，比恐龙还要年长3亿岁，论辈分，鲨鱼一出，谁与争锋？',
      iconDescri2: '鲨鱼因为鱼翅和鱼肝油而被人类大量捕杀，据说每年有超过7300万条鲨鱼的鳍被做成鱼翅汤。',
      animals: '鲨鱼'
    },
    {
      bgImg: 'img/icon9_bg.jpg',
      iconT: 'img/icon9_t.png',
      iconDescri1: '头脸像马，角像鹿，颈像骆驼，尾像驴，它是传说中的四不像。与世无争，但也为爱发狂～',
      iconDescri2: '八国联军侵华后，麋鹿在中国的土地上消失。于80年代从英国重回故土，数量增至5000多头。',
      animals: '麋鹿'
    }
  ];
  var animation_num = [11, 13, 13, 13, 13, 7, 12, 7, 15, 11];


  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p4-button').on('touchend',function(){
        clearInterval(timer);
        $('.p5').css({
          'background': 'url(img/icon' + curIndex + '_bg.jpg) no-repeat center center',
          'background-size': 'cover'
        });
       
        //$('.p5-button1').attr('href',urlArr[curIndex]);
        $('.canvas').css({
          'background': 'url(img/icon' + curIndex + '_bg.jpg) no-repeat center center',
          'background-size': 'cover'
        });
        // $('.p5-type').attr('src', iconData[curIndex].iconT);
        $('.p5-animal').attr('src', 'img/animal' + curIndex + '.png');
        if(curIndex == 1 || curIndex == 3 || curIndex == 7 || curIndex == 8){
          $('.p5-animal').css('width','60%');
        }
        // $('.p5-text span').text(iconData[curIndex].iconDescri1);
        // $('.p5-text span').text(iconData[curIndex].iconDescri2);
        app.store.curIndex = curIndex;
        html2canvas($(".canvas").get(0)).then(canvas => {
          var type = 'image/png';
          var imgData = canvas.toDataURL(type);
          $(".p5-save").attr('src', imgData);
        });
        app.showPage(5);
    });

  }

  function change(){
    curIndex=$('.swiper-slide-active').attr('data-index');
    $('.swiper-slide').removeClass('active');
    $('.p4').css('background-image','url(' + iconData[curIndex].bgImg + ')');
    $('.swiper-slide-active img').attr('src','img/icon'+ curIndex +'_b.png');
    $('.swiper-slide-active').addClass('active');
    
    $('.p4-type').attr('src',iconData[curIndex].iconT);
    $('.p4-text1 span').text(iconData[curIndex].iconDescri1);
    $('.p4-text2 span').text(iconData[curIndex].iconDescri2);
    curIndex = $('.swiper-slide-active').attr('data-index');
    let b = 1 - (1.77 - $(window).height() / $(window).width());
    $('.p4-animal').css('transform','scale('+ b +')');
    if($(window).width() <= 325){
      $('.p4-animal').css('transform','scale(0.6)');
    }
    if($(window).height() >= 665 && $(window).height() <= 850){
      $('.p4-animal').css('transform','scale(1)');
    }
    if($(window).height() > 850){
      $('.p4-animal').css('transform','scale(1.5)');
    }
    $('.canvas').css('height', $(window).height() + 'px');
    //console.log('height' + $(window).height());
    animal();
  }

  function animal() {
    //$('.p4-animal').attr('class','');
    clearInterval(timer);
    timer = setInterval(function() {
      i++;
      if (i >= 0) {
        let k = Number(i - 1);
        $('.p4-animal').removeClass('bg-icon' + curIndex + k);
        //console.log('remove1'+ curIndex + k);
      }
      $('.p4-animal').addClass('bg-icon' + curIndex + i);
      // $('.p4-animal').css('width','60%');
      //console.log('外面'+ curIndex + i);
      if (i === animation_num[curIndex]) {
        $('.p4-animal').removeClass('bg-icon' + curIndex + i);
        $('.p4-animal').addClass('bg-icon' + curIndex + '0');
        //console.log('里面'+ curIndex + i);
        i = 0;   
      }
    }, 150);
  }

  function getback(){
    $('.swiper-slide-active img').attr('src','img/icon'+ curIndex +'.png');
    $('.p4-animal').attr('class','p4-animal');
    i = 0;
  }

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
    $('#icon-bgm').css({'z-index':1001});
    curIndex = $('.swiper-slide-active').attr('data-index');
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 1,
      centeredSlides: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    change();
    animal();
    $('.swiper-slide').on('click',function(){
      curIndex=$('.swiper-slide-active').attr('data-index');
      getback();
      curIndex=$(this).attr('data-index');
      //swiper.slideToLoop( Number(curIndex), 400, true);
      curIndex=$('.swiper-slide-active').attr('data-index');
      change();  
    });
    $('.swiper-container').on('touchend',function(){
      curIndex=$('.swiper-slide-active').attr('data-index');
      getback();
      change();
      //clearInterval(timer);
      //animal();
    });
    $('.swiper-button-next,.swiper-button-prev').on('click', function() {
      curIndex=$('.swiper-slide-active').attr('data-index');
      getback();
      change();
      //clearInterval(timer);
      //animal();
    });
  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();
