import uniqid from "uniqid"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc } from "firebase/firestore";
export default function Avatars({ characters }) {
    // IMPORTANT DATABASE LOGIC
    // avatars are kept locally
    // the file name is the id to manage the database
    const params = useLocation()
    const [roundCharacters, setRoundCharacters] = useState([])
    useEffect(() => {
        const getCharactersSelection = (e) => {
            let handle = null
            if (e.target.children.length > 0) { // we have the "avatar-container"
                handle = e.target.children[0].alt.split("-").pop()
                if (e.target.classList.contains("highlighted")) {
                    const charToRemove = roundCharacters.find(el => {
                        return (el[0].path.split("/").pop().split(".")[0] === handle)
                    })
                    // document.querySelector(`img[alt="avatar-${handle}"]`).parentElement.classList.remove("highlighted")
                    // setRoundCharacters(roundCharacters.splice(roundCharacters.indexOf(charToRemove, 1)))
                    console.log(roundCharacters)
                }
            } else { // we either have img element or h1 element
                if (e.target === "img") handle = e.target.alt.split("-").pop()
                else handle = e.target.parentElement.children[0].alt.split("-").pop() // if h1 we go to parent and get img
            }
            const character = characters.filter(el => {
                return el.path.split("/").pop().split(".")[0] === handle
            })
            setRoundCharacters(prevChars => [...prevChars, character])
        }
        document.querySelector('#characters-container').addEventListener('click', getCharactersSelection)
        return () => {
            document.querySelector('#characters-container').removeEventListener('click', getCharactersSelection)
        }
    })
    // following useEffect should only add style, doesn't alter data
    useEffect(() => {
        roundCharacters.map(el => {
            const alt = el[0].path.split("/").pop().split(".")[0]
            document.querySelector(`img[alt="avatar-${alt}"]`).parentElement.classList.add("highlighted")
        })
        // const avatars = document.querySelectorAll('img[alt*="avatar-"]')
        // avatars.forEach(el => {
        //     console.log(el.alt)
        //     if (roundCharacters.filter(el => el[0].path.split('/').pop().split(".")[0] === el.alt).length > 0) {
        //         // if roundCharacters is one of the images
        //         if ()
        //     }
        // })
        const avatars = document.querySelectorAll('.avatar-container')
        const arr = []
        avatars.forEach(el => {
            if (el.classList.contains("highlighted")) {
                arr.push(el.children[0].alt)
                // if (roundCharacters.filter(el => el.path.split('/').pop().split('.')[0] === characterAlt).length === 0) {
                //     el.classList.remove('highlighted')
                // }
            }
        })
        const newArr = arr.map(el => {
            return el.split('-').pop()
        })
        console.log(newArr)
    }, [roundCharacters])

    let containerStyle = null
    if (params.pathname === "/") {
        containerStyle = {
            display: "flex",
            flexDirection: "row",
            width: "60vw",
            overflowX: "scroll",
            overflowY: "hidden",
            border: "1px solid black"
        }
    } else {
        containerStyle = {
            display: "flex",
            flexDirection: "row",
            width: "60vw",
            overflowX: "scroll",
            overflowY: "hidden",
            border: "1px solid black"
        }
    }
    const chars = characters.map(el => {
        const alt = el.path.split("/").pop().split(".")[0];
        return (
            <div className="avatar-container" key={uniqid()}>
                <img src={el.path} alt={`avatar-${alt}`}></img>
                <p>{el.name}</p>
            </div>
        )
    })
    return (
        <div id="characters-container"
            style={containerStyle}>
            {chars}
        </div>
    )
}