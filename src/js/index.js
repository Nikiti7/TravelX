import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import mobileNav from './modules/mobile-nav';
import loader from './modules/loader';

mobileNav();
loader();

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
	parallax: true,
	speed: 1000,
	
	keyboard: {
		enabled: true
	},

  // If we need pagination
  pagination: {
    el: '.slider__controls-count',
		type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
