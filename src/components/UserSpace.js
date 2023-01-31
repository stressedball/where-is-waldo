import { getLoggedUser } from "./fetchAndSet"
import { useEffect, useState } from "react"
import uniqid from "uniqid"
export default function UserSpace() {
    const [user, setUser] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getLoggedUser()
                setUser(data)
            } catch (error) {
                console.log('Error while retrieving user id', error)
            }
        }
        fetchData()
    }, [])
    const userTimes = user.map(el => {
        return (
            <tr key={uniqid()}>
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
        <div >
            <h3 style={{
                textAlign: "center"
            }}>Your times</h3>
            <table style={{
                margin: "auto"
            }}>
                <thead>
                    <tr>
                        <th>Registered as</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {userTimes}
                </tbody>
            </table>
        </div>
    )
}