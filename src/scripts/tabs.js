document.querySelectorAll('[data-tabs]').forEach(tabs => {
  const slider = tabs.querySelector('[data-tabs-slider]')
  
  const links = tabs.querySelectorAll('[data-tabs-link-index]')
  const pages = tabs.querySelectorAll('[data-tabs-page-index]')

  if (slider) {
    slider.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        slider.scrollLeft += e.deltaY
        e.preventDefault()
      }
    }, { passive: false })
  }

  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('palette_active'))
      link.classList.add('palette_active')
  
      pages.forEach(page => page.classList.remove('tabs__page_active'))
      pages[index].classList.add('tabs__page_active')
    })
  })
})