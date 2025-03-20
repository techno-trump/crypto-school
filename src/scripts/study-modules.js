document.querySelectorAll('.study-module').forEach(module => {
  const summary = module.querySelector('.study-module__summary')

  summary.addEventListener('click', () => {
    module.classList.toggle('study-module_opened')
  })
})