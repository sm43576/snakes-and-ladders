import "../css/ResultsPage.css"
import { Link } from "react-router-dom"

function ResultsPage() {

  return (
    <div className="results-page">
      <h1 className="heading">Results</h1>

      <div className="div2">
        <div className="first">
          <div className="rectangle1">
            <p className="first-text">1st</p>
          </div>
          <div className="avatar1"></div>
        </div>
        <div className="second">
          <div className="rectangle2">
            <p className="second-third-text">2nd</p>
          </div>
          <div className="avatar2"></div>
        </div>
        <div className="third">
          <div className="rectangle3">
            <p className="second-third-text">3rd</p>
          </div>
          <div className="avatar3"></div>
        </div>
        <div className="button-position">

          <Link to="/" >
            <button className="home-button">{'>'}</button>
          </Link>

        </div>
      </div>



    </div>
  )
}

export default ResultsPage