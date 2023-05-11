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
import "../css/RollDice.css";

function GamePage() {
  document.body.style.backgroundColor = "#A5ACCD";

  library.add(fas);

  const {
    currentID,
    nextID,
    players,
    setCurrentID,
    setNextID,
    movePlayer,
    seaweeds,
    bubbles,
  } = useContext(AppContext);

  const [tutorialButtonPopup, setTutorialButtonPopup] = useState(true);
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

  function roll(isHuman) {
    const s1 = Math.floor(Math.random() * sides.length);
    const s2 = Math.floor(Math.random() * sides.length);
    setDie1(sides[s1]);
    setDie2(sides[s2]);
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
      step(s1 + 1, s2 + 1, isHuman);
    }, 1000);
  }

  async function step(step1, step2, isHuman) {
    const step = step1 + step2;
    var id;
    var para;
    if (isHuman) {
      id = players[currentID]["_id"];
      para = players[currentID]["placement"] + step;
    } else {
      id = players[nextID]["_id"];
      para = players[nextID]["placement"] + step;
    }

    movePlayer(id, para);
  }

  async function checkCom() {
    if (!players[nextID]["isHuman"]) {
      console.log("current" + currentID);
      console.log("next" + nextID);
      // reRender();
      // setCurrentID((current) =>
      //   current + 1 >= players.length ? 0 : current + 1
      // );
      // setNextID((next) => (next + 1 >= players.length ? 0 : next + 1));
      console.log("checkCom2");
      reRender();
      console.log("________________");
      console.log("current" + currentID);
      console.log("next" + nextID);
      roll(false);
    }
  }

  async function checkSeaweedsBubbles() {
    for (let i = 0; i < seaweeds.length; i++) {
      if (players[currentID]["placement"] == seaweeds[i][0]) {
        movePlayer(players[currentID]["_id"], seaweeds[i][1]);
      }
    }

    for (let i = 0; i < bubbles.length; i++) {
      if (players[currentID]["placement"] == bubbles[i][0]) {
        movePlayer(players[currentID]["_id"], bubbles[i][1]);
      }
    }
  }

  async function checkWinner() {
    if (players[currentID]["placement"] >= 100) {
      <TODO>RESULTS</TODO>;
    }
  }

  async function reRender() {
    setRollCount(rollCount + 1); // Use functional form of setRollCount
    console.log("rollcount: " + rollCount);
  }

  const handleBtn = rolling ? "RollDice-rolling" : "";

  return (
    <div className="game-page">
      <div className="div-1">
        <div className="container white-bgr">
          <div className="RollDice">
            <button
              className={handleBtn}
              onClick={() => {
                roll(true);
                console.log("onClick");
                reRender();
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
          <button
            className="swim-btn"
            onClick={() => {
              console.log("onClick2");
              reRender();
              checkWinner();
              checkSeaweedsBubbles();
              checkCom();
              setCurrentID((current) =>
                current + 1 >= players.length ? 0 : current + 1
              );
              setNextID((next) => (next + 1 >= players.length ? 0 : next + 1));
            }}></button>
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
                alt="Current Player"
              />
            </div>
            <div className="next-player">
              <img
                className="next-player-image"
                src={`/src/assets/selectable_avatars/${players[nextID]["image"]}`}
                alt="Next Player"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="div-2">
        <GameBoard key={rollCount} />
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
