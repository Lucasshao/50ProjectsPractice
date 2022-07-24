const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx)) //走过每个小cup，后面加编号，里面加点击的功能，然后点了之后运行highlightCups
})

function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx-- //else if后面 1：idx表示我们点击的是否'full';2,后面的是否不是'full'。如果满足，自减1，
    }
//take all the small cups and loop through (not we click on), so idx2
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        } //看idx2是否小于idx，如果小于，证明后面没点过，添加‘full'反之'remove'
    })  

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length //找所有装有水的杯子
    const totalCups = smallCups.length //下面用

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden' //系统自带？
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px` //根据总高330，比例算px
        percentage.innerText = `${fullCups / totalCups * 100}%` //显示文字，按比例
    }

    if(fullCups === totalCups) { //如果大杯子满了，remained这个就藏起来
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`//显示剩下多少L，文字
    }
}