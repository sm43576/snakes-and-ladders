import "../css/ResultsPage.css";
import { Link } from "react-router-dom";
import bubblesBackground from "../assets/bubbles.png";
import comAvatar from "../assets/selectable_avatars/avatar_com.png"; //placeholder
import seaweed from "../assets/results_seaweed.gif";

import seaweedSound from "../music/whistle-down.mp3";
import bubbleSound from "../music/soap-bubbles-pop.mp3";
import resultSound from "../music/tadaa.mp3";
import { AppContext } from "../AppContextProvider";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

function ResultsPage() {
  const { players } = useContext(AppContext);

  var winner;
  for (let i = 0; i < players.length; i++) {
    if (players[i]["placement"] >= 100) {
      winner = players[i];
    }
  }

  return (
    <div className="results-page">
      <audio id="player" src={resultSound} autoPlay></audio>
      <img className="bubbles-animation" src={bubblesBackground} />

      <div className="results-content">
        <div className="winner-player-image-div">
          <img
            className="winner-player-image"
            src={`/src/assets/selectable_avatars/${winner["image"]}`}></img>
        </div>
        <img className="seaweed" src={seaweed} />
        <div className="podium">
          <h1 className="winner-tag">Winner</h1>
          <h2 className="winner-player-tag">{winner["name"]}</h2>
        </div>
      </div>

      <Link to="/">
        <button className="next-btn"></button>
      </Link>
    </div>
  );
}

export default ResultsPage;
