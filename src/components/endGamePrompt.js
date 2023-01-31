import { setData } from "./fetchAndSet"
import {useNavigate} from "react-router-dom"
export default function TimeSave(arr) {
    const navigate = useNavigate()
    const minutes = arr.time[0]
    const seconds = arr.time[1]
    const hundred = arr.time[2]
    const handleClick = (e) => {
        const name = document.querySelector('input#player-name')
        if (name.validity.valueMissing) {
            document.querySelector('span.error').textContent = "Please enter a name. You can get creative."
        } else {
            setData([minutes, seconds, hundred], e.target.id, name.value)
            navigate('/leader_board')
        }
    }
    const removeError = () => {
        document.querySelector('span.error').textContent = ""
    }
    return (
        <div className="save-time">
            <div id="announcement">
                <p>Well done!</p>
                <p>You found all heroes in {minutes < 10 ? 0 : null}{minutes}:{seconds < 10 ? 0 : null}{seconds}:{hundred < 10 ? 0 : null}{hundred}</p>
            </div>
            <div className="enter-name">
                <p>Save your time to the leader-board</p>
                <input placeholder="Enter your name" id="player-name" required={true} onChange={removeError}></input>
                <span className="error" aria-live="polite"></span>
            </div>
            <div >
                <div className="sign-in">
                    <p>I just want to save my time.</p>
                    <button onClick={handleClick} id="anonymous">Save my time</button>
                </div>
                <div>
                    <div className="sign-in">
                        <p>I want to keep track of my times!</p>
                        <button onClick={handleClick} id="google-auth">Sign in with your Google Account</button>
                    </div>
                </div>
                <p style={{ fontSize: "0.7rem" }}>PS : Only the name you enter will be displayed. Your authentication is for tracking that sweet time.</p>
            </div>
        </div>
    )
}