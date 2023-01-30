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
            <div className="row" key={uniqid()}>
                <p>
                    {el.name}
                </p>
                <p>
                </p>
                {el.time[0] < 10 ? "0" : null}{el.time[0]}:{el.time[1] < 10 ? "0" : null}{el.time[1]}:{el.time[2] < 10 ? "0" : null}{el.time[2]}
            </div>
        )
    })
    return (
        <div>
            <h1>Leader Board</h1>
            {leaderboard}
        </div>
    )
}