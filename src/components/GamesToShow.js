const gamesList = [
     'Soul Reaver',
     'Homeworld',
     'BloodBorne',
     'Celeste',
     'Control'
]

function GamesToShow() {
    return (
        <ul>
            {gamesList.map((game, index) => (
                 <li key={`${game}-${index}`}>{ game }</li>
            ))}
        </ul>
    )
}

export default GamesToShow