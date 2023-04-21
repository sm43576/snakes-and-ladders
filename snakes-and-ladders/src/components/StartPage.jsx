import "../css/StartPage.css"
import { Link } from "react-router-dom"

function StartPage() {
  return (
    <div className="start-page">
      <div>
        This is the start page
      </div>
      
      <Link to="/players">
        <button>
          PLAY
        </button>
      </Link>
    </div>
  )
}

export default StartPage