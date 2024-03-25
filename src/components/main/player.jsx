import  data  from './data'
import "./main.scss"

const PlayerNba = () => {
    return(
       
         <div className="player-container">  
        { 
            data.map((player) => 
           
                        <div className="imagePlayer">        
                            <img src={player.img} alt={player.name} />
                            <p>{player.name}</p>
                        </div>  
            )
        }
        </div>
    )
}

export default PlayerNba 