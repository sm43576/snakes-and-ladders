import "../css/ResultsPage.css"
import { Link } from "react-router-dom"

function ResultsPage() {

  return (
    <div className="game-page">
      <div>
        <Link to="/">
          <button>
            BACK TO HOME
          </button>
        </Link>
      </div>
      <h1>Results</h1>
      <div class="rectangle"></div>


    </div>    
  )
}

export default ResultsPage