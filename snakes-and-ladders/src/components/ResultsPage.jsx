import "../css/ResultsPage.css"
import { Link } from "react-router-dom"

function ResultsPage() {

  return (
    <div className="game-page">
      <div class="div1">
        
        <h1 class="heading">Results</h1>
      </div>

      <div class="div2">
        <div class="rectangle1"></div>
        <div class="rectangle2"></div>
        <div class="rectangle3"></div>
        <div class="button-position">
          <Link to="/">
            <button class="home-button">
            </button>
          </Link>
        </div>
      </div>
      


    </div>    
  )
}

export default ResultsPage