import {games} from './Data.js'; 

function GamesToShow() {
    const GameList = games.map(game => 
        <li key={game.id}>
            <p>
                <b> {game.name} </b>
                connu pour: 
                {' ' + game.fame + ' ' }
            </p>
        </li>
    );
    return <ul>{GameList}</ul>
}

export default GamesToShow