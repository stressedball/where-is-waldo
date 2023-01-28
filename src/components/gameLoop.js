import BoxCharacters from "./BoxCharacters"
export default async function gameLoop(characters) {
    await imageIsLoaded()
    characters.forEach(el => el.found = false)
    const time = await playerClicks(characters)
    console.log(time)
}
async function playerClicks(characters){
    return new Promise((res) => {
        document.querySelector('#game-container').addEventListener('click', getHeight)
        async function getHeight(e) {
            const guessBox = document.createElement('div')
            if (e.target.classList.contains('character')) {
                const character = characters.filter(el => el.name === e.target.alt)[0]
                character.found = true
            }
            if (characters.filter(el => el.found === false).length === 0) {
                document.querySelector('#game-container').removeEventListener('click', getHeight)
                res('hello')
            } 
        }
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