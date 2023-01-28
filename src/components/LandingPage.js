import { Link } from "react-router-dom";
import { gameLoop } from "./ImportCaller";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { useState, useEffect } from "react";

export default function LandingPage() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await firebase.firestore().collection('areas').get().then((doc) => {
                let characters =[]
                doc.forEach(character =>{
                    characters.push(character.data());
                })
                setCharacters(characters)
            });
            setLoading(false)
            setIsLoaded(true)
        }
        fetchData();
    }, []); //  only run the effect on mount and unmount

    while (loading) {
        return <div>Loading...</div>
    }
    const handleClick = () => {
        if (isLoaded) gameLoop(characters)
    }
    return (
        <div id="landing-page" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "center"
        }}>
            <div id="instructions" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                textAlign: "center",
                height: "100%"
            }}>
                <h1>Welcome to a game of "Where is Waldo?"</h1>
                <div id="start-game-container">
                    <p>Find all the characters to win the game.</p>
                    <p>Save your time and compare with the others! Have fun!</p>
                    <Link to='/game' >
                        <button id="start-game" onClick={handleClick}>Start New Game</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}