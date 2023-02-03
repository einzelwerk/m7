document.addEventListener('click', (e) => {
  if (e.target.closest('.lang-switcher__current')) {
    e.target.closest('.lang-switcher').querySelector('.lang-switcher__list').classList.toggle('active');
  } else {
    document.querySelector('.lang-switcher__list').classList.remove('active');
  }
});
