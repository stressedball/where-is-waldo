import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Avatars from "./Avatars";
export default function LandingPage({ characters }) {
    // const [character, setCharacter] = useState(null)
    return (
        <div id="landing-page"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
            <div id="instructions"
                style={{
                    textAlign: "center",
                }}>
                <h1 id="welcome">Welcome to a game of "Where is Waldo?"</h1>
                <div id="start-game-container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p>Find all the characters to win the game.</p>
                    <p>Save your time and compare with the others! Have fun!</p>
                    <Avatars characters={characters} />
                    {/* <Link to='/game' >
                    </Link> */}
                    <button id="start-game"
                        style={{
                            fontWeight: "bold",
                            padding: "1rem",
                            fontSize: "1.2rem",
                            backgroundColor: "white",
                            border: "2px solid transparent",
                            boxShadow: "0 0 5px 0 white",
                            color: "hsl(197, 40%, 41%)"
                        }} onMouseOver={(e) => {
                            e.target.style.color = "white"
                            e.target.style.backgroundColor = "hsl(197, 40%, 41%)"
                            e.target.style.boxShadow = "none"
                            e.target.style.border = "2px solid hsl(197, 40%, 80%)"
                        }} onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "white"
                            e.target.style.color = "hsl(197, 40%, 41%)"
                            e.target.style.border = "2px solid transparent"
                            e.target.style.boxShadow = "0 0 5px 0 white"
                        }}
                    >Start New Game</button>
                </div>
            </div>
        </div >
    )
}
const checkCharacter = () => {

}