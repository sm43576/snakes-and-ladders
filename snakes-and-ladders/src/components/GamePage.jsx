import "../css/GamePage.css"
import { Link } from "react-router-dom"

function GamePage() {
  document.body.style.backgroundColor = "#7D87B8";

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

        <div className="other-players"/>
        <div className="other-players"/>
        <div className="other-players"/>


      </div>



      <div className="div-2">
        DIV 2

        <div>
          This is the main game
        </div>

        <Link to="/">
          <button>
            BACK TO HOME
          </button>
        </Link>

        {/* POPOVER NOT IMPLEMENTED */}
        <button>
          SETTINGS
        </button>

        {/* POPOVER NOT IMPLEMENTED */}
        <button>
          HOW TO PLAY
        </button>

        <Link to="/results">
          <button>
            RESULTS
          </button>
        </Link>
      </div>



      <div className="div-3">
        DIV 3
      </div>

    </div>
  )
}

export default GamePage