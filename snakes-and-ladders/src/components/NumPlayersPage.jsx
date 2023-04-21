import "../css/NumPlayersPage.css"
import { Link } from "react-router-dom"

function NumPlayersPage() {
  return (
    <div>
      <div>
          This is where you select the number of players
      </div>

      <Link to="/avatar">
        <button>
          GO TO SELECT AVATAR
        </button>
      </Link>
    </div>
  )
}

export default NumPlayersPage