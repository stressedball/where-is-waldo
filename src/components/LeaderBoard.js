import { useEffect, useState } from "react"
import { getTimes } from "./fetchAndSet"
import uniqid from "uniqid"
export default function LeaderBoard() {
    const [times, setTimes] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const listOfTimes = await getTimes();
                listOfTimes.sort((a, b) => {
                    if (a.time[0] !== b.time[0]) {
                        return a.time[0] - b.time[0];
                    } else if (a.time[1] !== b.time[1]) {
                        return a.time[1] - b.time[1];
                    } else {
                        return a.time[2] - b.time[2];
                    }
                });
                setTimes(listOfTimes);
            } catch (error) {
                console.error('error getting documents', error);
            }
        }
        fetchData();
    }, []);
    const leaderboard = times.map(el => {
        return (
            <tr className="row" key={uniqid()}>
                <td style={{ padding: "0.5rem"}}>
                    {el.name}
                </td>
                <td style={{ padding: "0.5rem"}}>
                    {el.time[0] < 10 ? "0" : null}{el.time[0]}:{el.time[1] < 10 ? "0" : null}{el.time[1]}:{el.time[2] < 10 ? "0" : null}{el.time[2]}
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h1 style={{
                textAlign: "center"
            }}>Leaderboard</h1>
            <table style={{
                margin: "auto"
            }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard}
                </tbody>
            </table>
        </div>
    )
}