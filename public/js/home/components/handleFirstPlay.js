//si el audio no reproduce, forzar reproduccion
let hasPlayed = false;

let reproduciendo = true

function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    const vid = event.target;

    vid.onplay = null;
  }
}

const pauseMusic = () => {
  const btn_audio = document.querySelector('#music-background')
  if (reproduciendo) {
    btn_audio.pause()
    reproduciendo = false
    return
  }
  btn_audio.play()
  reproduciendo = true
}