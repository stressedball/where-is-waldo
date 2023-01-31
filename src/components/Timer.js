import { useEffect, useState } from "react"
export default function Timer({ saveTime, isStopped }) {
    const [hundred, setHundred] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    useEffect(() => {
        let intervalId;
        if (!isStopped) {
            intervalId = setInterval(() => {
                if (hundred === 59) {
                    setHundred(0)
                    setSeconds(seconds + 1)
                } else {
                    setHundred(hundred + 1)
                }
                if (seconds === 59) {
                    setSeconds(0)
                    setMinutes(minutes + 1)
                }
            }, 10)
        } else {
            clearInterval(intervalId)
            saveTime(minutes, seconds, hundred)
        }
        return () => clearInterval(intervalId)
    }, [isStopped, hundred, minutes, seconds])
    return (
        <table style={{
            margin:"auto"
        }}>
            <tbody>
                <tr >
                    <td className="timer-count">{minutes < 10 ? 0 : null}{minutes}:</td>
                    <td className="timer-count">{seconds < 10 ? 0 : null}{seconds}:</td>
                    <td className="timer-count">{hundred < 10 ? 0 : null}{hundred}</td>
                </tr>
            </tbody>
        </table>
    )
}