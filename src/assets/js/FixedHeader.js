let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    header.classList.add('header--hidden');
    if (st > lastScrollTop) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
      header.classList.add('header--fixed');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  } else {
    header.classList.remove('header--hidden');
    header.classList.remove('header--fixed');
  }
});
