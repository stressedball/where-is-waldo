import uniqid from "uniqid"
import { useEffect, useState } from "react";

function Avatars({ characters }) {

    // IMPORTANT DATABASE LOGIC
    // avatars are kept locally
    // the file name is the id to manage the database

    const chars = characters.map(el => {

        const alt = el.path.split("/").pop().split(".")[0];

        return (

            <div
                className="avatar-container"
                key={uniqid()}
            >
                <img
                    src={process.env.PUBLIC_URL + `${el.path.slice(1)}`}
                    alt={`avatar-${alt}`}
                ></img>

                <p>{el.name}</p>
            </div>
        )
    })

    return (

        <div >
            {chars}
        </div>
    )
}

function LandingAvatars({ characters }) {

    const [roundCharacters, setRoundCharacters] = useState([])

    const handleSelection = e => {
        document.querySelector(`div.avatar-container[data-key="${e.target.dataset.key}"]`).classList.toggle('highlighted')
    }

    // making the avatars container scroll horizontally
    useEffect(() => {

        const charactersContainer = document.querySelector('#characters-container')

        const handleScroll = e => {
            charactersContainer.scrollLeft += e.deltaY
        }

        window.addEventListener('wheel', handleScroll)
        return () => window.removeEventListener('wheel', handleScroll)
    })

    const chars = characters.map(el => {

        const alt = el.path.split("/").pop().split(".")[0];

        return (
            <div
                className="avatar-container"
                key={uniqid()}
                data-key={`avatar-${alt}`}
                onClick={handleSelection}
                onMouseEnter={(e) => {
                    if (e.target.classList.contains('highlighted')) {
                        return
                    }
                    e.target.classList.add('reverse')
                    e.target.classList.remove('order')
                }}
                onMouseLeave={(e) => {
                    if (e.target.classList.contains('highlighted')) {
                        return
                    }
                    e.target.classList.remove('reverse')
                    e.target.classList.add('order')
                }}
            >
                <img
                
                    src={process.env.PUBLIC_URL + `${el.path.slice(1)}`}
                    alt={`avatar-${alt}`}
                    data-key={`avatar-${alt}`}
                ></img>

                <p
                    data-key={`avatar-${alt}`}
                >{el.name}</p>
            </div>
        )
    })

    return (

        <div
            id="characters-container"
        >
            {chars}
        </div>
    )
}

export { Avatars, LandingAvatars }