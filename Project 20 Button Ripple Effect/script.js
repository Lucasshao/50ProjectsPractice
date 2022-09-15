const buttons = document.querySelectorAll('.ripple') //找到ripple 这个class

buttons.forEach(button => { //forEach是为了以后多个buttons
  button.addEventListener('click', function (e) { //增加 点击 事件, when click, run a function pass in our event attribute, only fire off if we click the button
    const x = e.clientX // where we click in the viewport
    const y = e.clientY //这两个意思是鼠标相对于浏览器窗口可视区域的X，Y坐标

    const buttonTop = e.target.offsetTop //position of the button itself button的坐标
    const buttonLeft = e.target.offsetLeft  //e.target which is the element that the event fires off of which is the button, and there is a property called offset top

    const xInside = x - buttonLeft // button 内的x y 坐标计算
    const yInside = y - buttonTop

    const circle = document.createElement('span') //create span
    circle.classList.add('circle') //在这里加 class circle，第一次见
    circle.style.top = yInside + 'px' //set top value + px
    circle.style.left = xInside + 'px' // set left value + px

    this.appendChild(circle) //为某个元素添加子元素 ？？？ circle 加到 span 里面么？

    setTimeout(() => circle.remove(), 500) //每次都要remove dom，在vanilla每次都要注意，react不用
  })
})