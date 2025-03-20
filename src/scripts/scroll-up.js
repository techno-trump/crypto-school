document.querySelectorAll('.scroll-up__icon').forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
