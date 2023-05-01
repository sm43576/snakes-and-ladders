import "../css/Homepage.css"
import { Link } from "react-router-dom"

function Homepage() {
  document.body.style.backgroundColor = "#4B5683";
  return (

    
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
    
    
    <img className= "waves-container" src="../src/assets/start_waves.png"></img>

    </div>

  )

}

export default Homepage