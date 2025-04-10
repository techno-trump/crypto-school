const iconEyeOn = 'icon-eye'
const iconEyeOff = 'icon-eye-off'

document.querySelectorAll('[data-auth-field-protected]').forEach(field => {
  const input = field.querySelector('input')
  if (!input) return
  
  const icon = field.querySelector('[data-auth-field-protected-icon]')
  if (!icon) return

  icon.addEventListener('click', () => {
    toggleInputType(input)
    toggleIcon(icon)
  })
})

function toggleInputType(input) {
  if (input.type === 'text') return input.type = 'password'
  if (input.type === 'password') return input.type = 'text'
}

function toggleIcon(icon) {
  icon.classList.toggle(iconEyeOn)
  icon.classList.toggle(iconEyeOff)
}
