const commentsSorterOptions = [
  'Oldest',
  'Newest',
]

document.querySelectorAll('[data-comments-sorter]').forEach(button => {
  let activeOptionIndex = 0

  const label = button.querySelector('[data-comments-sorter-label]')

  function updateOption() {
    activeOptionIndex = (activeOptionIndex + 1) % commentsSorterOptions.length
    const option = commentsSorterOptions[activeOptionIndex]

    label.innerHTML = option
  }

  // initial
  updateOption()

  button.addEventListener('click', updateOption)
})