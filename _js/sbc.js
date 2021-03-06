document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].currentTime = 0;
      audios[i].pause();
    }
  }
}, true);

function playpause(n) {
  p = document.getElementById('audio' + n);
  pbutton = document.getElementById("playbutton" + n);
  if (p.paused) {
    p.play();
    pbutton.innerHTML = '<i class="icon-pause"></i>';
  } else {
    p.pause();
    pbutton.innerHTML = '<i class="icon-volume-up"></i>';
  }
}

@switchlang

function resetbutton(i) {
  pbutton = document.getElementById("playbutton" + i);
  pbutton.innerHTML = '<i class="icon-volume-up"></i>';
}

function pauseaudio() {
  var sounds = document.getElementsByTagName('audio');
  for (i=0; i<sounds.length; i++) {sounds[i].pause()};
}

function autoplay() {
  pauseaudio();
  var canonical = document.getElementsByTagName("link")[2].href;
  var id = canonical.replace(/.*\/(\d{4})\/.*/, "$1");
  var audio = document.getElementById("audio01");
  var pbutton = document.getElementById("playbutton01");
  pbutton.innerHTML = '<i class="icon-pause"></i>';
  window.location = "#text01";
  var index = 2;
  function playNext() {
    len = document.getElementsByClassName("img-responsive").length;
    if(index <= len) {
      z = "0";
      if (index > 9) {
        z = "";
      }
      n = z + index.toString();
      p = z + (index - 1).toString();
      if (p == "9") {
	p = "09";
      }
      audio = document.getElementById("audio" + n);
      au_prev = document.getElementById("audio" + p);
      if (p == "01") {
	au_prev = document.getElementById("audio");
      }

      p3 = document.getElementById("text" + p).getElementsByClassName("def")[0].firstChild;
      p3.style = "background-color:#FFFFFF; font-weight:normal; border-radius:0px; padding:0px";
      pbutton.innerHTML = '<i class="icon-volume-up"></i>';
      window.location = "#text" + n;
      h3 = document.getElementById("text" + n).getElementsByClassName("def")[0].firstChild;
      h3.style = "background-color:#FFDC00; font-weight:bold; border-radius:5px; padding:5px";
      pbutton = document.getElementById("playbutton" + n);
      pbutton.innerHTML = '<i class="icon-pause"></i>';
      var slider = document.getElementById('audio_slider');
      audio.load(); audio.playbackRate = slider.value; audio.play();
      audio.addEventListener('ended', playNext);
      index += 1;
    } else {
      pbutton.innerHTML = '<i class="icon-volume-up"></i>';
      audio.removeEventListener('ended', playNext, false);
    }
  }

  audio.addEventListener('ended', playNext);

  audio.play();
}

function pdfdl() {
  m = window['modal-pdf'];
  m.className == "modal" ? m.className += " active" : m.className = "modal";
}

function adjustslider() {
  tooltip = window.slider_tooltip;
  slider = document.getElementById('audio_slider');

  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    audios[i].playbackRate = slider.value;
  }

  tooltip.setAttribute('data-tooltip', '@readspeed: ' + slider.value + '×');
}

function normalspeed() {
  tooltip = window.slider_tooltip;
  slider = document.getElementById('audio_slider');

  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    audios[i].playbackRate = 1;
  }

  slider.value = 1;
  tooltip.setAttribute('data-tooltip', '@readspeed: 1×');
}
