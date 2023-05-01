import "../css/ResultsPage.css"
import { Link } from "react-router-dom"

function ResultsPage() {

  return (
    <div className="game-page">
      <div class="div1">
        
        <h1 class="heading">Results</h1>
      </div>

      <div class="div2">
        <div class="first">
          <div class="rectangle1"></div>
          <div class="avatar1"></div>
        </div>
        <div class="second">
          <div class="rectangle2"></div>
          <div class="avatar2"></div>
        </div>
        <div class="third">
          <div class="rectangle3"></div>
          <div class="avatar3"></div>
        </div>
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