import "../css/GamePage.css"
import { Link } from "react-router-dom"

// import homeIcon from "../images/home.png"


function GamePage() {
  document.body.style.backgroundColor = "#A5ACCD";

  return (
    <div className="game-page">

      <div className="div-1">

        <div className="dice-square">
          <p className="roll-dice-msg">Click to Roll!</p>
        </div>

        <div className="div-players">
          <p className="current-player-tag">Current Player:</p>
          <div className="current-player">
          </div>
        </div>

        <div className="circle-80 white-bgr" />
        <div className="circle-80 white-bgr" />
        <div className="circle-80 white-bgr" />

      </div>



      <div className="div-2">
        DIV 2

        <div>
          This is the main game
        </div>

      </div>



      <div className="div-3">

        <div className="left">
          <Link to="/">
            <button className="circle-80 gold-dark-bgr home btn"/>
          </Link>
        </div>

        {/* POPOVER NOT IMPLEMENTED */}
        <div className="right">

          <button className="circle-80 purple-light-bgr settings btn"/>
        </div>

        {/* POPOVER NOT IMPLEMENTED */}
        <div className="left">

          <button className="circle-80 white-bgr tutorial btn"/>
        </div>
        <Link to="/results">
          <button className="circle-80 btn">
            R
          </button>
        </Link>


      </div>

    </div>
  )
}

export default GamePage