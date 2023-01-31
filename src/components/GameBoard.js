import { useState, useEffect } from "react";
import Timer from "./Timer";
import gameLoop from "./gameLoop";
import TimeSave from "./endGamePrompt";
// import { characters, picture } from "../index.js";
import Avatars from "./Avatars";
export default function GameBoard({ characters, picture }) {
    const [startTimer, setStartTimer] = useState(false)
    const [isStopped, setStopTimer] = useState(false)
    const [[min, sec, hundred], setTime] = useState([0, 0, 0])
    useEffect(() => {
        gameLoop(characters, gameStarts, stopTimer)
        function setGameHeaderPosition() {
            const mainHeader = document.querySelector('.App .header')
            const mainHeaderBottom = mainHeader.offsetTop + mainHeader.offsetHeight
            const progress = document.querySelector('.game-progress')
            if (window.scrollY > mainHeaderBottom) {
                progress.style.position = "fixed"
                progress.style.top = "0"
                document.querySelector('#playground').style.marginTop = `${progress.offsetHeight}px`
                progress.style.backgroundColor = "hsla(197, 40%, 41%, 0.8)"
            } else {
                progress.style.position = "unset"
                progress.style.backgroundColor = "inherit"
                document.querySelector('#playground').style.marginTop = "0"
            }
        }
        window.addEventListener('scroll', setGameHeaderPosition)
        return () => window.removeEventListener('scroll', setGameHeaderPosition)
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
            <div className="game-progress" style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Avatars characters={characters}/>
                {startTimer === true ? <Timer saveTime={saveTime} isStopped={isStopped} /> : null}
            </div>
            <div id="playground">
                <img src="./assets/candidates/game_heroes_by_sandikarakhim_d45gxnm-fullview.jpg" style={{
                    width: "100vw"
                }} alt="poster-img" useMap="#glorious"></img>
                <map name="glorious" >
                    {charMap}
                </map>
            </div>
            {isStopped === true ? <TimeSave time={[min, sec, hundred]} /> : null}
            <a href="https://www.deviantart.com/sandikarakhim/art/Game-Heroes-251052898">Amazing Photo : Sandikarakhim</a>
        </div>
    )
}
