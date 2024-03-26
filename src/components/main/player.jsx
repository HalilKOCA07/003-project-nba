import { useState } from "react";
import data from "./data";
import "./main.scss";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';


const PlayerNba = () => {
  return (
    <div className="player-container">
      {data.map((player) => (
        <>
      <div key={player.name} className="imagePlayer">
          <img src={player.img} alt={player.name} />
          <p>{player.name}</p>
        <div className="scorePlayers">
          <ul>
            <li><FontAwesomeIcon icon={faBasketball} /> {player.statistics[0]}</li>
            <li><FontAwesomeIcon icon={faBasketball} /> {player.statistics[1]}</li>
            <li><FontAwesomeIcon icon={faBasketball} /> {player.statistics[2]}</li>
            <li><FontAwesomeIcon icon={faBasketball} /> {player.statistics[3]}</li>
          </ul>
        </div>
      </div>

        </>
      ))}
    </div>
  );
};
export default PlayerNba;



// export const PlayerNbaScore = () => {
//   return (
//     <div className="player-container">
//       {data.map((player) => (
//         <div key={player.name} className="playerScore">
//           <p>{player.statistics}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const UseClickImage = () => {
//   const [player, setPlayer] = useState({});

//   const [toggle, setToggle] = useState(true);

//   const handlePlayer = () => {
    
//     setPlayer({ ...(player ? <PlayerNba /> : <PlayerNbaScore />) });
//     setToggle(!toggle);

   
  

//   };


//   // let score = 0
//   //   const handleClick = () => {

//   //     if(score === 1){
//   //       console.log("image")

//   //     }else{
//   //       console.log("Score")

//   //     }
//   //   }

