import { getLoggedUser } from "./fetchAndSet"
import { useEffect, useState } from "react"
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
            <div style={{display:"flex", flexDirection:"row"}}>
                <p>{el.name}</p>
                <p>{el.time[0] < 10 ? "0" : null}{el.time[0]}:{el.time[1] < 10 ? "0" : null}{el.time[1]}:{el.time[2] < 10 ? "0" : null}{el.time[2]}</p>
            </div>
        )
    })
    return(
        <div>
            Your scores
            {userTimes}
        </div>
    )
}