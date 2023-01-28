import { Link } from 'react-router-dom'
// HEADER STAYS THROUGHOUT THE WHOLE SESSION
export default function Header() {
    return (
        <div className="header" style={{
            flex: "0 1 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            border: "1px solid"
        }}>
            <h1>Where Is Waldo?</h1>
            <Menu />
        </div>
    )
}

function Menu() {
    return (
        <div id="menu" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
        }}>
            <Link to="/">Home</Link>
            <Link to='/user_space'>Your scores</Link>
            <Link to="/leader_board">Leader-board</Link>
        </div>
    )
}
            
