const fill = document.querySelector('.fill') //bring in the fill and empty boxes
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart) //for fill we have two events that we want to fire off, 前面是event name，后面是function name
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) { //for loop, this is saying for each empty of the empties array
    empty.addEventListener('dragover', dragOver) 
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
// drag function 
function dragStart() { 
    this.className += ' hold' //this can pertain to whichever element that the event's fired on, 找到上面 fill。 add class name hold, 这样append class 而不是代替 class。前面要加空格！
    setTimeout(() => this.className = 'invisible', 0) //当图片被drag之后，让fill invisible。但是要seTimeout，让他后来触发
}

function dragEnd() {
    this.className = 'fill' //readd the class fill
}

function dragOver(e) {
    e.preventDefault() //stop the default behavior of these event
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered' //plus the class hovered
}

function dragLeave() {
    this.className = 'empty' // reset to empty again
}

function dragDrop() {
    this.className = 'empty' //we always want to make sure that it has a class of empty
    this.append(fill) // this. mean the class empty, 用fill 代替
}

//注意this.className = 'xxx' 和 this.className += ' xxx'的区别