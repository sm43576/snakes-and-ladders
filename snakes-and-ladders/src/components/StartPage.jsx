import "../css/StartPage.css"
import { Link } from "react-router-dom"

function StartPage() {
  return (

    
  <body>
    <div className="body-container">
        <div className="title">
          Snakes and Ladders
        </div>
    
        <Link to="/players">
          <button className="button-start" 
          style={{height: '75px', width : '150px'}}>
            PLAY
          </button>
        </Link>
    </div>
    
    <img className= "waves-container" src="../src/assets/start_waves.png"></img>
  </body>


  )

}

export default StartPage