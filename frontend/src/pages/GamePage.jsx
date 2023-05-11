import "../css/GamePage.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../AppContextProvider";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Die from "../components/Die";
import GameBoard from "../components/GameBoard";
import TutorialPopUp from "./TutorialPopUp";
import BackToHomePopUp from "./BackToHomePopUp";
import bgm from "../music/baby-shark-bgm.mp3";


function GamePage() {
  library.add(fas);

  const { currentID, nextID, players, setCurrentID, setNextID, movePlayer } =
    useContext(AppContext);

  const [tutorialButtonPopup, setTutorialButtonPopup] = useState(true);
  const [backToHomeButtonPopUp, setBackToHomeButtonPopUp] = useState(false);
  const [rollCount, setRollCount] = useState(0); // New state variable

  const button = document.querySelector(".sound");
  const audioMute = () => {
    document.getElementById("player").muted = !document.getElementById("player").muted;
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
    var id, para;
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
      reRender();
      roll(false);
    }
  }

  async function checkSeaweedsBubbles() {
    console.log("checkSeaweedsBubbles: " + players[currentID]["placement"]);
    let seaweedsAndBubblesPositions = [
      [16, 6],
      [49, 11],
      [62, 19],
      [87, 24],
      [47, 26],
      [56, 53],
      [64, 60],
      [93, 73],
      [95, 75],
      [98, 78],
      [2, 38],
      [4, 14],
      [9, 31],
      [28, 76],
      [21, 42],
      [36, 44],
      [51, 67],
      [71, 91],
      [80, 82],
    ];

    for (let i = 0; i < seaweedsAndBubblesPositions.length; i++) {
      if (
        players[currentID]["placement"] == seaweedsAndBubblesPositions[i][0]
      ) {
        movePlayer(
          players[currentID]["_id"],
          seaweedsAndBubblesPositions[i][1]
        );
      }
    }
    reRender();
  }

  async function reRender() {
    setRollCount(rollCount + 1); // Use functional form of setRollCount
  }

  const handleBtn = rolling ? "roll-dice-rolling" : "";

  return (
    <div className="game-page">
      <div className="game-page-content">
        <div className="div-1">
          <div className="container white-bgr">
            <div className="roll-dice">
              <button
                className={handleBtn}
                onClick={() => {
                  roll(true);
                  console.log("onClick");
                  reRender();
                }}>
                {rolling ? "Rolling" : "Click to Roll!"}
              </button>

              <div className="roll-dice-container">
                <Die face={die1} rolling={rolling} />
                <Die face={die2} rolling={rolling} />
              </div>
            </div>
          </div>
          <div className="container">
            <button
              className="dice-btn"
              onClick={() => {
                console.log("onClick2");
                reRender();
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
    </div>
  );
}

export default GamePage;
