app.audios = (function() {
  var ROOT = app.root;

  function myAudio(src, loop) {
    var audio = new Audio();
    audio.src = ROOT + src;
    audio.volume = 1;
    audio.autoplay = false;
    audio.loop = true;
    if (loop != 1) {
      audio.loop = false;
    }
    return audio;
  }

  var list = [];
  list['aClick'] = new myAudio(ROOT + 'media/talk.mp3');

  return {
    list: list,
  };
})();
