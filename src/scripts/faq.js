document.querySelectorAll('[data-faq-item]').forEach(item => {
  const toggler = item.querySelector('[data-faq-item-toggler]')
  if (!toggler) return

  toggler.addEventListener('click', () => {
    item.classList.toggle('palette_active')
    item.classList.toggle('faq-item_opened')
  })
})