import  data  from './data'
import "./main.scss"

const PlayerNba = () => {
    return(
       
         <div className="player-container">  
        { 
            data.map((player) => 
                        <div key={player.name} className="imagePlayer">        
                            <img src={player.img} alt={player.name} />
                            <p>{player.name}</p>
                            <div className="playerScore">
                                <ul >
                                    <li>{player.statistics[0]}</li>
                                    <li>{player.statistics[1]}</li>
                                    <li>{player.statistics[2]}</li>
                                    <li>{player.statistics[3]}</li>
                                </ul>
                            </div>
                        </div>  
            )
        }
        </div>
    )
}
export default PlayerNba 

export const ClickImage = () => {
let imagePlayer = document.getElementsByTagName("img")
let playerInfo = document.querySelector(".playerScore")
  let playerImage = 1
  let PlayerScore = 0
    const handleClick = () => {
     
      if(playerImage === 1 && PlayerScore === 0){
        console.log("image")

        playerImage = 0;
        PlayerScore = 1;
      }else{
        console.log("Score")
        playerImage = 1;
        PlayerScore = 0;
      }
    }
    return(
      <div className="imageChange">
  
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }

