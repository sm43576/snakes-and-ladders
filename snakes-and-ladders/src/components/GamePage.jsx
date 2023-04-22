import "../css/GamePage.css"
import { Link } from "react-router-dom"

function GamePage() {
  return (
    <div className="game-page">

      <div className="div-1">
        DIV 1

        <div className="dice-sqaure">
          
        </div>

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