export default function GameBoard({ characters }) {
    // const totalHeight = document.querySelector('body').scrollHeight
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
        <div id="game-container">
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
const picture = {
    height: 2795,
    width: 1600
}