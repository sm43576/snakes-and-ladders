import "../css/GamePage.css"
import { Link } from "react-router-dom"

function GamePage() {
  return (
    <div>
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
  )
}

export default GamePage