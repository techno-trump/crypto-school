const sliderNavItemActiveClass = 'slider__nav-item_active'

document.querySelectorAll('[data-slider]').forEach(slider => {
  let activeIndex = 0

  // get data
  const slidesAmount = Number(slider.getAttribute('data-slider-amount')) || 1

  // get controls
  const sliderName = slider.getAttribute('data-slider')

  const slidesList = Array.from(document.querySelectorAll(`[data-slider-for="${sliderName}"][data-slider-slides]`))
  const controlLeftList = Array.from(document.querySelectorAll(`[data-slider-for="${sliderName}"][data-slider-control-left]`))
  const controlRightList = Array.from(document.querySelectorAll(`[data-slider-for="${sliderName}"][data-slider-control-right]`))
  const sliderNavItems = Array.from(document.querySelectorAll(`[data-slider-for="${sliderName}"][data-slider-nav-item]`))

  // setup initial styles
  updateSlider(activeIndex)

  function updateSlider(index) {
    activeIndex = clamp(0, (index + slidesAmount) % slidesAmount, slidesAmount - 1)

    // move slides
    slidesList.filter(Boolean).forEach(slides => {
      slides.style.transform = `translateX(-${100 * activeIndex}%)`
    })

    // update nav items
    sliderNavItems.forEach(navItem => {
      const index = Number(navItem.getAttribute('data-slider-nav-item'))
      
      navItem.classList.remove(sliderNavItemActiveClass)
      if (index === activeIndex) navItem.classList.add(sliderNavItemActiveClass)
    })
  }

  // setup event listeners
  controlLeftList.filter(Boolean).forEach(controlLeft => {
    controlLeft.addEventListener('click', () => {
      updateSlider(activeIndex - 1)
    })
  })
  controlRightList.filter(Boolean).forEach(controlRight => {
    controlRight.addEventListener('click', () => {
      updateSlider(activeIndex + 1)
    })
  })
  sliderNavItems.filter(Boolean).forEach(navItem => {
    navItem.addEventListener('click', () => {
      const index = Number(navItem.getAttribute('data-slider-nav-item'))

      updateSlider(index)
    })
  })
})

function clamp(min, value, max) {
  if (value > max) return max
  if (value < min) return min
  return value
}