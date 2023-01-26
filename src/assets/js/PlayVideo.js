const videoBtn = document.querySelectorAll('.js-play-video');
videoBtn.forEach((elem) => {
  const el = elem;
  el.addEventListener('click', () => {
    const target = el.querySelector('video');
    if (target.paused) {
      target.play();
      el.classList.add('active');
    } else {
      target.pause();
      el.classList.remove('active');
    }
  });
});
