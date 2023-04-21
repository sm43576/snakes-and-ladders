import '../css/AvatarPage.css'
import { Link } from "react-router-dom"

function AvatarPage() {
  return (
    <div>
      <div>
        This is where you select your avatar
      </div>

      <Link to="/avatar">
        <button>
          SELECT NEXT AVATAR
        </button>
      </Link>

      <Link to="/game">
        <button>
          PLAY GAME
        </button>
      </Link>
    </div>
  )
}

export default AvatarPage