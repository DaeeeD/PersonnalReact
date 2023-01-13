
import { React } from "react";
import useFetch from "react-fetch-hook";
import '../styles/gamelist.css'

const url = 'https://opencritic-api.p.rapidapi.com/game/hall-of-fame/2018';
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'eff3ab7f85mshdddd2f3caa89659p1ea6d4jsn42ae928ee59f',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
  }
};

function GamesDetails (gameslist) {
  const list = gameslist.map(game => 
      <li key={game.id}>
          <p style={{
            backgroundColor: 'black',
            color: 'white'
            }}>
              <b> {game.name} </b>
              score de : 
              {' ' + game.topCriticScore + ' ' }
          </p>
      </li>
  );
  return <ul style={{width: '50%', color: 'red'}}>{list}</ul>;
}

function HailofFame() {
  const { isLoading, data, error } = useFetch(url, options);

  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    )
  }

  if (!isLoading) {
    console.log(data);
  }

  return (
    <>
      <div className="HailofFame">
        {isLoading && <p>Loading...</p>}
        {!isLoading && GamesDetails(data)}
      </div> 
      </>
  )
}


export default HailofFame