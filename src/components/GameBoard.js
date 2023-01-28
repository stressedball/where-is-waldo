import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

export default function GameBoard() {
    const [characters, setCharacters] = useState([]);
    const [picture, setPicture] = useState({ width: 0, height: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                await firebase.firestore().collection('areas').get().then((doc) => {
                    let characters =[]
                    doc.forEach(character =>{
                        characters.push(character.data());
                    })
                    setCharacters(characters)
                });
                await firebase.firestore().collection("picture").get().then((data) => {
                    const playground = data.docs[0].data();
                    setPicture({ width: playground.width, height: playground.height });
                });
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    while (loading) {
        return <div>Loading...</div>
    }
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
            <a href="https://www.deviantart.com/sandikarakhim/art/Game-Heroes-251052898">Amazing Photo : Sandikarakhim</a>
        </div>
    )
}
