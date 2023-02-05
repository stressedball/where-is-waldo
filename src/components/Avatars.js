import uniqid from "uniqid"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc } from "firebase/firestore";

function Avatars({ characters }) {

    // IMPORTANT DATABASE LOGIC
    // avatars are kept locally
    // the file name is the id to manage the database
    const params = useLocation()

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

        <div id="characters-container"
            style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid black"
            }}
        >
            {chars}
        </div>
    )
}

function LandingAvatars({ characters }) {

    const [roundCharacters, setRoundCharacters] = useState([])
   
    useEffect(() => {

        const getCharactersSelection = (e) => {

            let handle = null

            if (e.target.children.length > 0) { // we have the "avatar-container"
                handle = e.target.children[0].alt.split("-").pop()

            } else { // we either have img element or h1 element

                if (e.target === "img") handle = e.target.alt.split("-").pop() // if img
                // if h1 go to parent
                    
                else handle = e.target.parentElement.children[0].alt.split("-").pop()
            }

            // check if parent element is already highlighted
            // going back and forth to elements to avoid code duplication
            if (document.querySelector(`img[alt="avatar-${handle}"]`).parentElement.classList.contains('highlighted')) {

                setRoundCharacters(roundCharacters.filter(el => {
                    return el[0].path.split('/').pop().split('.')[0] !== handle
                }))

                return
            }

            const character = characters.filter(el => {

                return el.path.split("/").pop().split(".")[0] === handle
            })

            setRoundCharacters(prevChars => [...prevChars, character])
        }

        document.querySelector('#characters-container').addEventListener('click', getCharactersSelection)

        return () => {
            if (document.querySelector('#characters-container')) {
                document.querySelector('#characters-container').removeEventListener('click', getCharactersSelection)
            }
        }

    }, [])

    // following useEffect should only add style, doesn't alter data
    useEffect(() => {

        const avatars = document.querySelectorAll('.avatar-container')

        avatars.forEach(el => el.classList.remove('highlighted'))
        roundCharacters.map(el => {

            const alt = el[0].path.split("/").pop().split(".")[0]

            document.querySelector(`img[alt="avatar-${alt}"]`).parentElement.classList.add("highlighted")
        })

    }, [roundCharacters])


    const chars = characters.map(el => {

        const alt = el.path.split("/").pop().split(".")[0];

        return (
            <div
                className="avatar-container"
                key={uniqid()}
            >
                <img
                    src={el.path}
                    alt={`avatar-${alt}`}
                ></img>

                <p>{el.name}</p>
            </div>
        )
    })

    return (

        <div
            id="characters-container"
            style={{
                display: "flex",
                flexDirection: "row",
                width: "60vw",
                overflowX: "scroll",
                overflowY: "hidden",
                border: "1px solid black"
            }}
        >

            {chars}
        </div>
    )
}

export {Avatars, LandingAvatars}