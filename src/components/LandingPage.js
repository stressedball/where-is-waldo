import { Link } from "react-router-dom";
export default function LandingPage() {
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
                        <button id="start-game">Start New Game</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}