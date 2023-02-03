class Accordion {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.vacancy-accordion__button');
    this.content = this.element.querySelector('.vacancy-accordion__content-wrapper');

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.content.classList.toggle('vacancy-accordion__content--active');
    const isExpanded = this.content.classList.contains('vacancy-accordion__content--active');

    if (isExpanded) {
      this.content.style.height = `${this.content.scrollHeight}px`;
      this.content.classList.add('active');
      this.element.classList.add('active');
    } else {
      this.content.style.height = 0;
      this.content.classList.remove('active');
      this.element.classList.remove('active');
    }
  }
}

const accordions = document.querySelectorAll('.vacancy-accordion__item');
accordions.forEach((accordion) => new Accordion(accordion));
