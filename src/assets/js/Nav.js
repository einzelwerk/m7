class Nav {
  constructor(btn, menu) {
    this.btn = btn;
    this.menu = menu;
    this.state = false;
    this.listener();
  }

  listener() {
    document.addEventListener('click', (e) => {
      if ((this.state && !e.target.closest('#nav')) || (this.state && e.target.closest('.mobile-nav-wrapper__close'))) {
        this.closeNav();
      } else if (!this.state && this.btn.contains(e.target)) {
        this.openNav();
      }
    });
  }

  openNav() {
    this.state = true;
    document.body.style.overflow = 'hidden';
    this.menu.classList.add('opened');
    this.menu.setAttribute('aria-hidden', false);
    this.btn.classList.add('opened');
    this.btn.setAttribute('aria-expanded', true);
    this.btn.setAttribute('aria-label', 'Menü schließen');
  }

  closeNav() {
    this.state = false;
    document.body.style.overflow = '';
    this.menu.classList.remove('opened');
    this.menu.setAttribute('aria-hidden', true);
    this.btn.classList.remove('opened');
    this.btn.setAttribute('aria-expanded', false);
    this.btn.setAttribute('aria-label', 'Menü öffnen');
  }
}

(() => new Nav(document.querySelector('.js-open-nav'), document.querySelector('#nav')))();
