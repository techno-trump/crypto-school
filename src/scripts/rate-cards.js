document.querySelectorAll('[data-rate-card]').forEach(card => {
  const toggler = card.querySelector('[data-rate-card-toggler]')
  if (!toggler) return

  toggler.addEventListener('click', () => {
    card.classList.toggle('rate-card_opened')
  })
})
