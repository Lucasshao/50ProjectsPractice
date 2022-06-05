const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') /*more than one circle, 前面要放 ‘.’，代表一个class*/

let currentActive = 1 /*代表现在是1*/

next.addEventListener('click', () => {
  currentActive++ /*自加，变成2*/

  // console.log(currentActive) 进入控制台可以尝试按按钮，会打出2，3，4.。。

  if(currentActive > circles.length) {
      currentActive = circles.length
  } /*视cricles为array, so it has a length property*/

  update()
})

prev.addEventListener('click', () => {
  currentActive-- /*decrement*/

  if(currentActive < 1) {
      currentActive = 1
  } /*限制最小*/

  update()
})

function update (){
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
  // loop through those with four each, check if the index of that particular circle is less than the active circle. 
  })

  const actives = document.querySelectorAll('.active')

  // change the precentage of progress width，就好像线往前走的动态效果了，作者用 console.log(actives.length / circles.length)，得到0.5，0.75，1，1.25. 转换成CSS precentage proterty就可以了，但是后来证明不对,     subtracting one from those 不懂
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  // 不限制的，意思第一不能再向前
  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true /*第四的时候不能再向后*/
  } else {
    prev.disabled = false
    next.disabled = false
  }

}