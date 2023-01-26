document.addEventListener('click', (e) => {
  const list = document.querySelector('.lang-switcher__list');

  if (e.target.closest('.lang-switcher__current')) {
    list.classList.toggle('active');
  } else {
    list.classList.remove('active');
  }
});
