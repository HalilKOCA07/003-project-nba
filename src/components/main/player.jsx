import { useState } from "react";
import data from "./data";
import "./main.scss";

const PlayerNba = () => {
  return (
    <div className="player-container">
      {data.map((player) => (
        <div key={player.name} className="imagePlayer">
          <img src={player.img} alt={player.name} />
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
};
export default PlayerNba;

export const PlayerNbaScore = () => {
  return (
    <div className="player-container">
      {data.map((player) => (
        <div key={player.name} className="playerScore">
          <p>{player.statistics}</p>
        </div>
      ))}
    </div>
  );
};

export const UseClickImage = () => {
  const [player, setPlayer] = useState({});

  const [toggle, setToggle] = useState(true);

  const handlePlayer = () => {
    setPlayer({ ...(player ? <PlayerNba /> : <PlayerNbaScore />) });
    setToggle(!toggle);
    console.log(player);
  };

  // let score = 0
  //   const handleClick = () => {

  //     if(score === 1){
  //       console.log("image")

  //     }else{
  //       console.log("Score")

  //     }
  //   }
  return (
    <div className="imageChange">
      <button onClick={() => setPlayer(handlePlayer)}>Click me</button>
    </div>
  );
};
