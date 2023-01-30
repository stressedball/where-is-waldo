import BoxCharacters from "./BoxCharacters"
export default async function gameLoop(characters, gameStarts, stopTimer) {
    characters.forEach(el => el.found = false)
    await imageIsLoaded()
    gameStarts()
    while (characters.filter(el => el.found === false).length !== 0) {
        const foundChar = await playerClicks(characters)
        if (foundChar !== null) {
            const char = characters.find(el => el.name === foundChar)
            char.found = true
            console.log('ok', foundChar)
            // implement visual handle for characters
        }
    }
    stopTimer()
}
async function playerClicks(characters) {
    return new Promise((res) => {
        // if (characters.filter(el => el.found === false).length === 0) {
        //     res(null)
        // }
        async function getClick(e) {
            document.querySelector('#game-container').removeEventListener('click', getClick)
            // below line must stay at top
            const firstClick = e.target
            const guessBox = await BoxCharacters(e, characters)
            document.querySelector('#game-container').removeChild(document.querySelector('.char-box'))
            let character = null
            if (firstClick.classList.contains('character')) {
                character = characters.filter(el => el.name === e.target.alt)[0]
                if (character.name === guessBox) {
                    res(character.name)
                } else {
                    res(null)
                }
            } else {
                res(null)
            }
        }
        document.querySelector('#game-container').addEventListener('click', getClick)
    })
}

const imageIsLoaded = () => {
    return new Promise((res) => {
        if (document.querySelector('#game-container')) {
            return res()
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector('#game-container')) {
                res(document.querySelector('#game-container'));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    })
}