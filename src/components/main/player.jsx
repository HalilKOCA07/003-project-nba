import { useState } from "react";
import data from "./data";
import "./main.scss";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";


const PlayerNba = (props) => {
  const {img, name, statistics} = props.item;
  const [show, setShow] = useState(true)


  return (
    <div onClick={() => setShow(!show)} className="player-container">
      {show ? <div key={name} className="imagePlayer">
          <img src={img} alt={name} />
          
      </div> : <div className="scorePlayers">
        <ul>
          {statistics.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
       
        </div>}
        <p>{name}</p>
    </div>
  );
};
export default PlayerNba;