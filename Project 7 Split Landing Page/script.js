// 三个变量 //
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// mouseenter 是一个event，basically a hover//
left.addEventListener('mouseenter', () => container.classList.add('hover-left')) // 箭头函数，记一下结构：('', () => container.classList.add()), 当鼠标移上去，增加hover left，当鼠标移走，remove //
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))