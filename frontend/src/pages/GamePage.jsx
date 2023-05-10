import "../css/GamePage.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import TutorialPopUp from "./TutorialPopUp";
import BackToHomePopUp from "./BackToHomePopUp";
import GameBoard from "../components/GameBoard";
import bgm from "../music/baby-shark-bgm.mp3";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../AppContextProvider";

import Die from "../components/Die";
import "../css/GameBoard.css";

function GamePage() {
  document.body.style.backgroundColor = "#A5ACCD";

  library.add(fas);

  const { currentID, nextID, players, setCurrentID, setNextID, movePlayer } =
    useContext(AppContext);

  const [tutorialButtonPopup, setTutorialButtonPopup] = useState(false);
  const [settingsButtonPopup, setSettingsButtonPopup] = useState(false);
  const [backToHomeButtonPopUp, setBackToHomeButtonPopUp] = useState(false);
  const [rollCount, setRollCount] = useState(0); // New state variable

  const button = document.querySelector(".sound");
  const audioMute = () => {
    console.log("button clicked");
    document.getElementById("player").muted =
      !document.getElementById("player").muted;
    button.classList.toggle("active");
  };

  // Face numbers passes as default props
  const sides = ["one", "two", "three", "four", "five", "six"];

  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("two");
  const [rolling, setRolling] = useState(false);

  function roll() {
    const s1 = Math.floor(Math.random() * sides.length);
    const s2 = Math.floor(Math.random() * sides.length);
    setDie1(sides[s1]);
    setDie2(sides[s2]);
    setRolling(true);

    // Start timer of one sec when rolling start
    // Set rolling to false again when time over
    setTimeout(() => {
      setRolling(false);
      // setCurrentID(currentID + 1);
      // setNextID(nextID + 1);
      checkValidIDs(currentID + 1, nextID + 1);
    }, 1000);

    step(s1 + 1, s2 + 1);
    setRollCount(rollCount + 1); // Increment rollCount
  }

  function checkValidIDs(current, next) {
    if (current >= players.length) {
      setCurrentID(0);
      setNextID(1);
    } else if (next >= players.length) {
      setCurrentID(current);
      setNextID(0);
    } else {
      setCurrentID(current);
      setNextID(next);
    }
  }

  const handleBtn = rolling ? "RollDice-rolling" : "";

  function step(step1, step2) {
    var step = step1 + step2;
    const id = players[currentID]["_id"];
    const para = players[currentID]["placement"] + step;
    movePlayer(id, para);
  }

  return (
    <div className="game-page">
      <div className="div-1">
        <div className="container white-bgr">
          <div className="RollDice">
            <button
              className={handleBtn}
              onClick={() => {
                roll();
              }}>
              {rolling ? "Rolling" : "Click to Roll!"}
            </button>

            <div className="RollDice-container">
              <Die face={die1} rolling={rolling} />
              <Die face={die2} rolling={rolling} />
            </div>
          </div>
        </div>
        <div className="container">
          <p className="current-player-tag">
            Current Player: {players[currentID]["name"]}
          </p>
          <div className="div-players">
            <div className="current-player">
              <img
                className="current-player-image"
                src={`/src/assets/selectable_avatars/${players[currentID]["image"]}`}
              />
            </div>
            <div className="next-player">
              <img
                className="next-player-image"
                src={`/src/assets/selectable_avatars/${players[nextID]["image"]}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="div-2">
        <GameBoard key={rollCount} /> {/* Pass rollCount as key */}
      </div>

      <div className="div-3">
        <div className="justify-left">
          <button
            className="pop-up-button gold-dark-bgr home btn"
            onClick={() => setBackToHomeButtonPopUp(true)}
          />
          <BackToHomePopUp
            trigger={backToHomeButtonPopUp}
            setTrigger={setBackToHomeButtonPopUp}
          />
        </div>

        <div className="justify-right">
          <audio id="player" src={bgm} autoPlay loop></audio>
          <div>
            <button
              id="sound-button"
              className="pop-up-button purple-light-bgr sound btn"
              onClick={audioMute}></button>
          </div>
        </div>

        <div className="justify-left">
          <button
            className="pop-up-button white-bgr tutorial btn"
            onClick={() => setTutorialButtonPopup(true)}
          />
          <TutorialPopUp
            trigger={tutorialButtonPopup}
            setTrigger={setTutorialButtonPopup}
          />
        </div>

        <Link to="/results">
          <button className="btn">R</button>
        </Link>
      </div>
    </div>
  );
}

export default GamePage;
