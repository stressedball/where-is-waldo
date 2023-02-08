import { Link } from 'react-router-dom'

export default function Header() {

    return (
        
        <div className="header">

            <div id='credits'
                style={{
                    flex: "0 1 auto",
                    width: "300px"
                }}>
                
                <p>Made by TS</p>
            </div>

            <h1 style={{
                flex: "1 0 auto",
                textAlign: "center"
            }} >Where Is "Waldo"?</h1>

            <Menu />
        </div>
    )
}

function Menu() {

    return (

        <div id="menu"
            style={{
            flex: "0 1 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
            width: "300px"
        }}>
            <Link to="/where-is-waldo">Home</Link>
            <Link to='/where-is-waldo/user_space'>Your scores</Link>
            <Link to="/where-is-waldo/leader_board">Leaderboard</Link>
        </div>
    )
}

