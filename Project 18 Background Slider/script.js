const body = document.body
const slides = document.querySelectorAll('.slide') //we want all with the class of slide
const leftBtn = document.getElementById('left') //we have id of left
const rightBtn = document.getElementById('right')

let activeSlide = 0 //1,a node list [];2,control background and slide!最重要 3,initial active slide 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0 //1,slide.length will give us the total length of the node list; 2, if true, we want to set it back to zero
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
}) //这两个左右箭头的function最后写的

setBgToBody()

function setBgToBody() { //set the background to body
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
} /* 1，when we deal with CSS through JS, it's going to be camel case like 👆。2，activeSlide 是上面 let 的变量，相当于从 0 位置开始!!!*/


function setActiveSlide() { //set active slide to next image, we'll take the slides what we brought in, which remember is a node list
  slides.forEach((slide) => slide.classList.remove('active'))
//1，不需要打括号因为只有一个变量，2，先remove 再add；3，node list []
  slides[activeSlide].classList.add('active')
}