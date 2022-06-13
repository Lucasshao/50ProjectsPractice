const boxes = document.querySelectorAll('.box') /*more than one use All, so this will put it into an array or a node list*/

window.addEventListener('scroll', checkBoxes)
/*滑动鼠标，function:checkBoxes,'box' could be any section, image or anything of your website*/

function checkBoxes() { /*where is the trigger point, can't use set number as the height could be different at any point*/
  const triggerBottom = window.innerHeight / 5 * 4 /*没懂*/
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    /*记住就好了*/
    /*see if the top of the box is less than the trigger bottom, if, add the class of show, if more, remove the class of show*/
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
  })
}
