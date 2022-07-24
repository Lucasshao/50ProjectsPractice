const tagsEl = document.getElementById('tags')//创建变量tagsEl，从html里的tags这个id中
const textarea = document.getElementById('textarea')//创建变量textarea，从html里的textarea这个id中

textarea.focus() //focus method, if we go to the page, it'll automatically put the cursor光标 in there，用户friendly

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)/**eventlistener “按键盘”，会触发，“e"是event parameter，不知道是不是随便一个字母都行 
  当触发，call a function createTags自动创建标签, e.target.value 意思是going to be whatever we type in**/
  if(e.key === 'Enter') {//如果输入 回车，就会触发随机选择功能
    setTimeout(() => { //等待几毫秒再选择，用户体验
      e.target.value = '' //clear the input value
    }, 10)

    randomSelect()
  }
})

function createTags(input) { //这里就创建上面提到的function createTags
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
/** we want to split at that comma and create an array of whatever is on either side of these comments
 * input => which is a string, split(',') => split by the comma and turn it into array. 这里的意思是输入变成字符，但是输入逗号就会把字符分开
 * filter => a high odor array method that allow you to return certain things based on a conditional. 
 * (tag => tag.trim() !== '') 意思是 for each tag, trim off any white space，if that is not equal to an empty string, we'll return that 很使用的功能！trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
 * a map => manipulate the array ??? */
  tagsEl.innerHTML = '' // take the tags element and clear it ???

  tags.forEach(tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
  })
  //凌乱了，意思是根据输入创建下面橙色标签。知道这个功能。具体为什么凌乱了
}

function randomSelect() {
  const times = 30   //the number of times it's going to highlight each one before it stops

  const interval = setInterval(() => {  //highlight and the remove of highlight of each one
      const randomTag = pickRandomTag()   //又一个function PackRandomTag，

      if (randomTag !== undefined) {
      highlightTag(randomTag)

      setTimeout(() => {
          unHighlightTag(randomTag)
      }, 100)
      }
  }, 100);

  setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
          const randomTag = pickRandomTag()

          highlightTag(randomTag)
      }, 100)

  }, times * 100)
}

function pickRandomTag() {  //凌乱了
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {  //这个function名字highlightTag，让选中的tag运行这个function
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {  //同上，remove
  tag.classList.remove('highlight')
}