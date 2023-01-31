export default async function BoxCharacters(e, characters) {
    const playground = document.querySelector('#playground')
    return new Promise((res) => {
        makeBox(e, characters)
        function getFeedback(el) {
            playground.removeEventListener('click', getFeedback)
            if (el.target.classList.contains('single-char')) {
                res(el.target.textContent)
            } else {
                res('')
            }
        }
        playground.addEventListener('click', getFeedback)
    })
}
function makeBox(e, characters) {
    const headerOffset = document.querySelector('.header').offsetHeight
    const progress = document.querySelector('.game-progress')
    const gameArea = document.querySelector('#playground')
    const box = document.createElement('div')
    box.classList.add('char-box')
    gameArea.appendChild(box)
    box.style.position = "absolute"
    if (progress.style.position === "fixed") {
        box.style.top = `${e.pageY - headerOffset - progress.offsetHeight}px`
    } else {
        box.style.top = `${e.pageY - headerOffset}px`
    }
    box.style.left = `${e.x}px`
    for (let char of characters) {
        const item = document.createElement('p')
        item.classList.add('single-char')
        item.textContent = char.name
        if (char.found === true) {
            item.classList.add('found')
        } else {
            item.classList.add('missing')
        }
        box.appendChild(item)
    }
}