//si el audio no reproduce, forzar reproduccion
let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    const vid = event.target;

    vid.onplay = null;
  }
}
