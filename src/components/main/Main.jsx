
import PlayerNba from './player'
import "./main.scss"
import data from './data'
import { useState } from 'react'


const Main = () => {
    const [inputValue, setInputValue] = useState(" ");
    const searchPlayer = data.filter((item, i) => {
        return item.name.toLowerCase().includes(inputValue.toLowerCase())
    });


    return(
        <div className="searchPlayer">
            <form action="">
                <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Search a player" />
            </form>
            
        <div className="input-player">

        { inputValue || inputValue === " " ? searchPlayer.map((item, i) => <PlayerNba key={i} item={item} />) : data.map((item, i) => <PlayerNba key={i} item={item} />)}      
        </div>   
        </div> 
    );
}

export default Main 