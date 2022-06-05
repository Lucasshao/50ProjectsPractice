const panels = document.querySelectorAll('.panel') /*创建变量，选全部*/


/*high order array method, these methods take in a function as an argument*/
panels.forEach((panel)/*iteration*/ => {
    panel.addEventListener('click', () => {
      removeActiveClass() /*先remove所有，再加点的那个的active就好了*/
      panel.classList.add('active') /*classlist 给我a list of classes,后面.add是其中的一个methods
    }) /* 第一个加了点一下功能，里面嵌套了点了之后就会变active 这个class，然后加入了移除active*/
})
})

function removeActiveClass() { /*移除其他active*/
    panels.forEach((panel) => {
        panel.classList.remove('active') /*classList 的一个功能：remove*/
  }) /*array function, (argument, index, complete array), if only argument, 可以省略括号 */
}