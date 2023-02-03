/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
class Modal {
  constructor(trigger, modal) {
    this.modal = modal;
    this.trigger = trigger;
    this.closeBtn = '.modal__close';
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

const reserveModal = new Modal('[data-modal="reserve"]', '[data-modal-el="reserve"]');
reserveModal.listener();

const jobsModal = new Modal('[data-modal="jobs"]', '[data-modal-el="jobs"]');
jobsModal.listener();
