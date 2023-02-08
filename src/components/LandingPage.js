import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingAvatars } from "./Avatars";

export default function LandingPage({ characters }) {

    const [mode, setMode] = useState(null)
    const navigate = useNavigate()

    const handleClick = e => {
        if (e.target.dataset.key.split('-').pop() === mode) return
        const buttons = document.querySelectorAll('svg.mode-button')

        buttons.forEach(el => el.classList.remove('highlighted'))
        document.querySelector(`svg[data-key="${e.target.dataset.key}"]`).classList.add('highlighted')
        setMode(Number(e.target.dataset.key.split('-').pop()))
    }

    const checkCharacter = () => {

        if (document.querySelectorAll('.avatar-container.highlighted').length === Number(mode) && mode !== null) {

            const charactersSelection = document.querySelectorAll('.avatar-container.highlighted img')
            const roundCharacters = Array.from(charactersSelection).map(el => el.alt.split('-').pop())
            let string = ''

            for (let char of roundCharacters) {
                string += char + '-'
            }

            navigate(`/where-is-waldo/game/${string}`)
        }

        else {
            document.querySelector('#mode-button-container').classList.add('mode-tip')

            setTimeout(() => {
                document.querySelector('#mode-button-container').classList.remove('mode-tip')
            }, 800)
        }
    }

    return (

        <div id="landing-page">
            <h1
                id="welcome"
            >Welcome to a game of "Where is Waldo?"</h1>

            <div
                id="start-game-container">
                <div>
                <p>Find all the characters to win the game.</p>

                <p>Save your time and compare with the others! Have fun!</p>
                </div>


                <div >
                <div id="mode">

                    <p>How many characters do you want to find?</p>

                    <div id="mode-button-container">
                        <svg
                            className="mode-button"
                            onClick={handleClick}
                            data-key="mode-3"
                            fill="currentColor"
                            width="50px" height="50px"
                            viewBox="-7 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                onClick={handleClick}

                                data-key="mode-3"
                                d="M4.875 8h-2.25c0.063-3.281 2.781-6 6.094-6s6.031 2.719 6.031 6.094c0 1.969-0.969 3.719-2.438 4.813 2.094 1.25 3.5 3.531 3.5 6.125 0 3.938-3.188 7.094-7.094 7.094-3.844 0-6.969-3-7.125-6.781h2.25c0.156 2.531 2.281 4.594 4.875 4.594 2.688 0 4.844-2.219 4.844-4.906s-2.156-4.875-4.844-4.875v-2.219c2.125 0 3.813-1.719 3.813-3.844s-1.688-3.844-3.813-3.844-3.813 1.656-3.844 3.75z"></path>
                        </svg>
                        <svg
                            className="mode-button"
                            onClick={handleClick}
                            data-key="mode-5"
                            fill="currentColor" width="50px" height="50px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                onClick={handleClick}

                                data-key="mode-5"
                                d="M7.938 4.875l-1.125 6c0.625-0.188 1.313-0.281 2.031-0.281 4.281 0 7.75 3.5 7.75 7.781s-3.469 7.75-7.75 7.75c-3.656 0-6.406-2.5-7.25-5.938h2.281c0.781 2.219 2.531 3.813 5 3.813 3.094 0 5.594-2.5 5.594-5.594 0-3.063-2.5-5.625-5.594-5.625-0.813 0-1.656 0.188-2.531 0.438-0.938 0.25-1.594 0.438-2.438 0.844l2.188-11.438h9.906v2.25h-8.063z"></path>
                        </svg>
                        <svg
                            className="mode-button"
                            onClick={handleClick}
                            data-key="mode-8"
                            fill="currentColor"
                            width="50px" height="50px" viewBox="-7.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                onClick={handleClick}

                                data-key="mode-8"
                                d="M12.313 12.906c2.094 1.25 3.5 3.531 3.5 6.125 0 3.938-3.188 7.094-7.094 7.094-3.938 0-7.125-3.156-7.125-7.094 0-2.594 1.375-4.875 3.469-6.125-1.469-1.094-2.438-2.844-2.438-4.813 0-3.375 2.719-6.094 6.094-6.094s6.031 2.719 6.031 6.094c0 1.969-0.938 3.719-2.438 4.813zM4.875 8.094c0 2.125 1.719 3.844 3.844 3.844s3.813-1.719 3.813-3.844-1.688-3.844-3.813-3.844-3.844 1.719-3.844 3.844zM8.719 23.938c2.688 0 4.844-2.219 4.844-4.906s-2.156-4.875-4.844-4.875-4.906 2.188-4.906 4.875 2.219 4.906 4.906 4.906z"></path>
                        </svg>
                    </div>
                </div>

                <LandingAvatars
                    characters={characters}
                    mode={mode}
                />

                <button id="start-game"
                    onMouseEnter={(e) => {
                        e.target.classList.add('reverse')
                        e.target.classList.remove('order')
                    }}
                    onMouseLeave={(e) => {
                        e.target.classList.remove('reverse')
                        e.target.classList.add('order')
                    }}
                    onClick={checkCharacter}
                >Start New Game</button>


                </div>


            </div>

        </div>
    )
}
