/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
class Modal {
  constructor(trigger, modal) {
    this.modal = modal;
    this.trigger = trigger;
    this.closeBtn = '.js-modal-close';
    this.state = false;
  }

  open() {
    document.querySelector(this.modal).style.display = 'block';
    this.state = true;
  }

  close() {
    document.querySelector(this.modal).style.display = 'none';
    this.state = false;
  }

  listener() {
    document.addEventListener('click', (e) => {
      if ((this.state && !e.target.closest('.modal')) || (this.state && e.target.closest(this.closeBtn))) {
        this.close();
      }
      if (!this.state && e.target.closest(this.trigger)) {
        this.open();
      }
    });
  }
}

const modal = document.querySelectorAll('[data-modal]');
modal.forEach((elem) => {
  const val = elem.dataset.modal;

  const modalInstance = new Modal(`[data-modal="${val}"]`, `[data-modal-el="${val}"]`);
  modalInstance.listener();
});

const thankyouModal = new Modal(null, '[data-modal-el="thank-you"]');
thankyouModal.listener();

document.addEventListener(
  'wpcf7mailsent',
  () => {
    thankyouModal.open();
  },
  false
);
