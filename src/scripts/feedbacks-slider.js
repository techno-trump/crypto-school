// import  from 'swiper/modules'
import Swiper, { Autoplay } from 'swiper'

document.querySelectorAll("[data-feedbacks-slider]").forEach(root => {
  const direction = root.getAttribute('data-direction')
  const reverse = direction === 'right'

  new Swiper(root, {
    wrapperClass: "feedbacks__list",
    slideClass: "feedback-palette",

    modules: [Autoplay],
    loop: true,
		loopedSlides: 6,
		loopAdditionalSlides: 6,
    speed: 12000,
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
