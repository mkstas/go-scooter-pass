import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';

export const swiper = () => {
  new Swiper('.swiper', {
    modules: [Navigation],

    navigation: {
      nextEl: '.event-slider__button_next',
      prevEl: '.event-slider__button_prev',
    },
  });
};
