import { Autoplay } from 'swiper/modules'
import Swiper from 'swiper'

document.querySelectorAll("[data-feedbacks-slider]").forEach(root => {
  const direction = root.getAttribute('data-direction')
  const reverse = direction === 'right'

  new Swiper(root, {
    wrapperClass: "feedbacks__list",
    slideClass: "feedback-palette",

    modules: [Autoplay],
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverse
    },
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 30,
  });
});
