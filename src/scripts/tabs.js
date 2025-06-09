import { Swiper } from 'swiper'
import 'swiper/css'

document.querySelectorAll('[data-tabs]').forEach(tabs => {
  const links = tabs.querySelectorAll('[data-tabs-link-index]')
  const pages = tabs.querySelectorAll('[data-tabs-page-index]')

  new Swiper('[data-tabs-slider]', {
		wrapperClass: "tabs__links",
		slideClass: "tabs__link",
    slidesPerView: 'auto',
    spaceBetween: 20, // gap from css
    freeMode: true,
    mousewheel: true, // enables wheel
    grabCursor: true,
    setWrapperSize: true, // to make wrapper width equal to width of all slides
  })

  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('palette_active'))
      link.classList.add('palette_active')
  
      pages.forEach(page => page.classList.remove('tabs__page_active'))
      pages[index].classList.add('tabs__page_active')
    })
  })
})