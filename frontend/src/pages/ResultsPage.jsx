import "../css/ResultsPage.css"
import { Link } from "react-router-dom"
import bubblesImg from "../assets/bubbles.png"
import comAvatar from "../assets/selectable_avatars/avatar_com.png"
import seaweed from "../assets/results_seaweed.gif"

function ResultsPage() {

  return (
    <div className="results-page">
      <img className="bubbles-animation" src={bubblesImg}></img>
      <div className="results-content">

          

          <div className="winner-player-image-div">
            <img className="winner-player-image" src = {comAvatar}>
            </img>
          </div>

          <img className="seaweed" src={seaweed}/>

        <div className="podium">
          <h1 className="winner-tag">Winner</h1>
          <h2 className="winner-player-tag">Player</h2>

        </div>
        <div className="avatar1"></div>

      </div>


      <Link to="/" >
        <button className="next-btn"></button>
      </Link>
    </div>
  )
}

export default ResultsPage