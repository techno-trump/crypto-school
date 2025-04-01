import throttle from "lodash.throttle";
const MAX_DELTA = 10


document.querySelectorAll('[data-hero-coins]').forEach(container => {
  let windowHeight = window.innerHeight
  let windowWidth = window.innerWidth

  let centerX = windowWidth / 2
  let centerY = windowHeight / 2
  
  document.addEventListener('mousemove', throttle((e) => {
    const pageX = e.pageX
    const pageY = e.pageY

    const dx = (pageX - centerX) / centerX * MAX_DELTA
    const dy = (pageY - centerX) / centerY * MAX_DELTA

    container.style.setProperty('--dx', `${dx}px`)
    container.style.setProperty('--dy', `${dy}px`)
  }, 50))

  window.addEventListener('resize', throttle(() => {
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth

    centerX = windowWidth / 2
    centerY = windowHeight / 2
  }, 50))
})