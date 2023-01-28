export default async function BoxCharacters(e, characters) {
    return new Promise((res) => {
        makeBox(e, characters)
        function getFeedback(el) {
            document.querySelector('#game-container').removeEventListener('click', getFeedback)
            if (el.target.classList.contains('single-char')) {
                res(el.target.textContent)
            } else {
                res('')
            }
        }
        document.querySelector('#game-container').addEventListener('click', getFeedback)
    })
}
function makeBox(e, characters) {
    const headerOffset = document.querySelector('.header').offsetHeight
    const gameArea = document.querySelector('#game-container')
    const box = document.createElement('div')
    box.classList.add('char-box')
    gameArea.appendChild(box)
    box.style.position = "absolute"
    box.style.top = `${e.pageY - headerOffset}px`
    box.style.left = `${e.x}px`
    for (let char of characters) {
        const item = document.createElement('p')
        item.classList.add('single-char')
        item.textContent = char.name
        if (char.found === true) {
            item.classList.add('green')
        } else {
            item.classList.add('red')
        }
        box.appendChild(item)
    }
}