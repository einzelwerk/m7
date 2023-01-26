/* eslint-disable import/no-unresolved */
import Swiper, { Navigation, EffectFade, Thumbs, FreeMode, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/thumbs';
import 'swiper/scss/free-mode';
import 'swiper/scss/effect-fade';
import 'swiper/scss/effect-creative';
// import breakpoints from './MatchMedia';

class Sliders {
  static servicesSlider() {
    const root = document.querySelector('.services');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.05,

      spaceBetween: 16,
      loop: true,
      loopAdditionalSlides: 3,
      breakpoints: {
        1024: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
      },
    });

    sliderInstance.init();
  }

  static menuSlider() {
    const root = document.querySelector('.menu');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.05,
      spaceBetween: 16,
      breakpoints: {
        1024: {
          spaceBetween: 20,
          slidesPerView: 2.5,
        },
      },
    });

    sliderInstance.init();
  }

  static partnersSlider() {
    const root = document.querySelector('.partners');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.8,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 3.05,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    sliderInstance.init();
  }

  static eventsSlider() {
    const root = document.querySelector('.events');
    const sliderInstance = new Swiper(root, {
      modules: [Navigation, EffectFade],
      effect: 'fade',
      init: false,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1200,
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: root?.querySelector('.slider-navigation__item--next'),
        prevEl: root?.querySelector('.slider-navigation__item--prev'),
        disabledClass: 'slider-navigation__item--disabled',
      },
    });

    sliderInstance.init();
  }

  static defaultSlider() {
    const root = document.querySelector('.default-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Navigation, EffectFade, Pagination],
      effect: 'fade',
      init: false,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1200,
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: root?.querySelector('.slider-navigation__item--next'),
        prevEl: root?.querySelector('.slider-navigation__item--prev'),
        disabledClass: 'slider-navigation__item--disabled',
      },
      pagination: {
        el: root?.querySelector('.slider-pagination'),
        bulletClass: 'slider-pagination__item',
        bulletActiveClass: 'slider-pagination__item--active',
      },

      breakpoints: {
        1024: {
          pagination: false,
        },
      },
    });

    sliderInstance.init();
  }

  static featuresEventsSlider() {
    const root = document.querySelector('.features-events');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.05,
      spaceBetween: 16,
      speed: 1200,
      breakpoints: {
        1024: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
      },
    });

    sliderInstance.init();
  }

  static galleryPrimarySlider() {
    const sliderPrimary = new Swiper('.gallery-primary', {
      modules: [Navigation],

      init: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,

      navigation: {
        nextEl: document.querySelector('.gallery-slider-nav-next'),
        prevEl: document.querySelector('.gallery-slider-nav-prev'),
        disabledClass: 'slider-navigation__item--disabled',
      },
    });
    const sliderSecondary = new Swiper('.gallery-secondary', {
      modules: [Navigation, Pagination],

      init: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,

      navigation: {
        nextEl: document.querySelector('.gallery-slider-nav-next'),
        prevEl: document.querySelector('.gallery-slider-nav-prev'),
        disabledClass: 'slider-navigation__item--disabled',
      },
      pagination: {
        el: document.querySelector('.gallery-secondary').querySelector('.slider-pagination'),
        bulletClass: 'slider-pagination__item',
        bulletActiveClass: 'slider-pagination__item--active',
      },

      breakpoints: {
        1024: {
          pagination: false,
        },
      },
    });
    const sliderTitles = new Swiper('.gallery-secondary__title', {
      modules: [Navigation, EffectFade],

      init: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      allowTouchMove: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },

      navigation: {
        nextEl: document.querySelector('.gallery-slider-nav-next'),
        prevEl: document.querySelector('.gallery-slider-nav-prev'),
        disabledClass: 'slider-navigation__item--disabled',
      },
    });

    sliderSecondary.init();
    sliderPrimary.init();
    sliderTitles.init();
  }

  static videoSlider() {
    const videoThumbs = new Swiper('.video-thumbs', {
      modules: [FreeMode],
      freeMode: {
        enabled: true,
      },
      init: false,
      slidesPerView: 4,
      spaceBetween: 8,
      speed: 1200,
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
    const videoMain = new Swiper('.video-main', {
      modules: [Thumbs, EffectFade],
      thumbs: {
        swiper: videoThumbs,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      init: false,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1200,
    });
    videoThumbs.init();
    videoMain.init();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Sliders.servicesSlider();
  Sliders.menuSlider();
  Sliders.eventsSlider();
  Sliders.featuresEventsSlider();
  Sliders.partnersSlider();
  Sliders.galleryPrimarySlider();
  Sliders.videoSlider();
  Sliders.defaultSlider();
});
