import { setLogLevel } from "firebase/app"
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
            document.querySelector(`img[alt="avatar-${char.path.split('/').pop().split(".")[0]}"]`).classList.add('dim')
            document.querySelector(`img[alt="avatar-${char.path.split('/').pop().split(".")[0]}"] + p`).classList.add('found')
        }
    }
    
    stopTimer()
}
async function playerClicks(characters) {

    const playground = document.querySelector('#playground')

    return new Promise((res) => {

        async function getClick(e) {

            // below line must stay at top
            playground.removeEventListener('click', getClick)

            const firstClick = e.target
            const guessBox = await BoxCharacters(e, characters)
            let character = null

            playground.removeChild(document.querySelector('.char-box'))

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
        playground.addEventListener('click', getClick)
    })
}

const imageIsLoaded = () => {

    const playground = document.querySelector('#playground')

    return new Promise((res) => {

        if (playground) {
            return res()
        }

        const observer = new MutationObserver(mutations => {

            if (playground) {

                res(playground);
                observer.disconnect();
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    })
}