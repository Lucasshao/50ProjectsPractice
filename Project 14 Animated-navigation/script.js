const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () =>
  nav.classList.toggle('active'))
// arrow functions if only have one single line, don't need this curly braces. 