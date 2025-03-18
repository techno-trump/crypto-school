document.querySelectorAll('.range').forEach(elem => {
  const rangeSlider = elem.querySelector('.range-slider')
  const leftValueContainers = elem.querySelectorAll('[data-left]')
  const rightValueContainers = elem.querySelectorAll('[data-right]')

  const recalculateProgress = () => {
    const min = parseFloat(rangeSlider.getAttribute("min"))
    const max = parseFloat(rangeSlider.getAttribute("max"))

    const value = Math.round(rangeSlider.value ?? min)

    const progress = (value - min) / (max - min)
    const left = max - value
    const right = value

    leftValueContainers.forEach(container => {
      container.innerHTML = left
    })
    rightValueContainers.forEach(container => {
      container.innerHTML = right
    })

    rangeSlider.style.setProperty("--progress", `${progress * 100}%`)
  }

  recalculateProgress()

  rangeSlider.addEventListener("input", recalculateProgress)
})
