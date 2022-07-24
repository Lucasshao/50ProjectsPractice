const counters = document.querySelectorAll('.counter') //a node list which is similar to an array

counters.forEach(counter => {
    counter.innerText = '0' //a string of zero

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') //凌乱了
        const c = +counter.innerText

        const increment = target / 200 //一点点上升

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})