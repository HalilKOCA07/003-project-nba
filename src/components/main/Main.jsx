
import PlayerNba from './player'
import "./main.scss"

const Main = () => {
    return(
         <div className="container">
        {
        <div className="input-player">
                 {PlayerNba()}
        </div>    
        }
        </div>
    )
}

export default Main 