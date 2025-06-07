import { Swiper } from 'swiper'
import 'swiper/css'

document.querySelectorAll('[data-tabs]').forEach(tabs => {
  const links = tabs.querySelectorAll('[data-tabs-link-index]')
  const pages = tabs.querySelectorAll('[data-tabs-page-index]')

  new Swiper('[data-tabs-slider]', {
    slidesPerView: 'auto',
    spaceBetween: 20, // gap from css
    freeMode: true,
    mousewheel: true, // enables wheel
    simulateTouch: true, // enables "touch-like" manipulation with mouse
    grabCursor: true,
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