import { useState, useEffect } from "react";
import Timer from "./Timer";
import gameLoop from "./gameLoop";
import TimeSave from "./endGamePrompt";
import { characters, picture } from "../index.js";
export default function GameBoard() {
    const [startTimer, setStartTimer] = useState(false)
    const [isStopped, setStopTimer] = useState(false)
    const [[min, sec, hundred], setTime] = useState([0, 0, 0])
    // I think this is the main reason that makes the code crash
    useEffect(() => {
        gameLoop(characters, gameStarts, stopTimer)
    }, []);
    const gameStarts = () => {
        setStartTimer(true)
    }
    const stopTimer = () => {
        setStopTimer(true)
    }
    const saveTime = (min, sec, hundred) => {
        setTime([min, sec, hundred])
    }
    // placing the characters on the map accordingly to viewport
    const totalWidth = document.querySelector('body').scrollWidth
    const coefficient = totalWidth / picture.width
    const charMap = characters.map(el => {
        return (
            <area shape="rect"
                coords={`${el.left * coefficient}, ${el.top * coefficient}, ${el.right * coefficient}, ${el.bottom * coefficient}`}
                alt={`${el.name}`}
                className="character"
                key={el.name}
            ></area >
        )
    })
    return (
        <div id="game-container" style={{ position: "relative" }}>
            <img src="./assets/candidates/game_heroes_by_sandikarakhim_d45gxnm-fullview.jpg" style={{
                width: "100vw"
            }} alt="poster-img" useMap="#glorious"></img>
            <map name="glorious" >
                {charMap}
            </map>
            {startTimer === true ? <Timer saveTime={saveTime} isStopped={isStopped} /> : null}
            {isStopped === true ? <TimeSave time={[min, sec, hundred]} /> : null}
            <a href="https://www.deviantart.com/sandikarakhim/art/Game-Heroes-251052898">Amazing Photo : Sandikarakhim</a>
        </div>
    )
}
