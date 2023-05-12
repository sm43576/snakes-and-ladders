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
import seaweedSound from "../music/whistle-down.mp3";
import bubbleSound from "../music/soap-bubbles-pop.mp3";

import bubblesBackground from "../assets/bubbles.png";
import seaweedBackground from "../assets/seaweed_popup.png";

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
  const [backToHomeButtonPopUp, setBackToHomeButtonPopUp] = useState(false);
  const [rollCount, setRollCount] = useState(0); // New state variable

  const button = document.querySelector(".sound");
  const audioMute = () => {
    document.getElementById("player").muted =
      !document.getElementById("player").muted;
    button.classList.toggle("active");
  };

  // Face numbers passes as default props
  const sides = ["one", "two", "three", "four", "five", "six"];

  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("two");


  function roll(isHuman) {
    const s1 = Math.floor(Math.random() * sides.length);
    const s2 = Math.floor(Math.random() * sides.length);
    setDie1(sides[s1]);
    setDie2(sides[s2]);

    setTimeout(() => {
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

    for (let i = 0; i < seaweeds.length; i++) {
      if (players[currentID]["placement"] == seaweeds[i][0]) {
        movePlayer(players[currentID]["_id"], seaweeds[i][1]);
        new Audio(seaweedSound).play();
        document.getElementById("game-page-content").style.opacity = "50%";
        document.getElementById("seaweed-pop-up").style.display = "block";
        document.getElementById("seaweed-animation").style.display = "block";
      }
    }

    for (let i = 0; i < bubbles.length; i++) {
      if (players[currentID]["placement"] == bubbles[i][0]) {
        movePlayer(players[currentID]["_id"], bubbles[i][1]);
        new Audio(bubbleSound).play();
        document.getElementById("game-page-content").style.opacity = "50%";
        document.getElementById("bubbles-pop-up").style.display = "block";
        document.getElementById("bubbles-animation").style.display = "block";
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
  }

  function closePopUps() {
    document.getElementById("game-page-content").style.opacity = "100%";
    document.getElementById("seaweed-pop-up").style.display = "none";
    document.getElementById("bubbles-pop-up").style.display = "none";
    document.getElementById("seaweed-animation").style.display = "none";
    document.getElementById("bubbles-animation").style.display = "none";
  }

  return (
    <div className="game-page">
      <img
        id="bubbles-animation"
        className="bubbles-popup-animation"
        src={bubblesBackground}
      />
      <img
        id="seaweed-animation"
        className="seaweed-popup-animation"
        src={seaweedBackground}
      />
      <div id="game-page-content" className="game-page-content">
        <div className="div-1">
          <div className="container roll-dice">
            <button
              onClick={() => {
                document.querySelector(".roll-dice button").disabled = true;
                document.querySelector(".swim-btn").disabled = false;
                roll(true);
                console.log("onClick");
                reRender();
              }}>
              {"Click to Roll!"}
            </button>
          </div>
          <div className="container white-bgr">
            {/* <div className="roll-dice"> */}
              <div className="roll-dice-container">
                <Die face={die1} />
                <Die face={die2} />
              </div>
            {/* </div> */}
          </div>
          <div className="container">
            <button
              className="swim-btn"
              onClick={() => {
                console.log("onClick2");
                document.querySelector(".roll-dice button").disabled = false;
                document.querySelector(".swim-btn").disabled = true;
                reRender();
                checkWinner();
                checkSeaweedsBubbles();
                checkCom();
                setCurrentID((current) =>
                  current + 1 >= players.length ? 0 : current + 1
                );
                setNextID((next) =>
                  next + 1 >= players.length ? 0 : next + 1
                );
              }}>
              Swim!
            </button>
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
              aria-label="home-btn"
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

      {/* Seaweed Pop Up */}
      <div id="seaweed-pop-up" className="seaweed-bubbles-pop-up">
        <div className="seaweed-bubbles-pop-up-inner">
          <p>{`Slide down to ${players[nextID]["placement"]} :(`}</p>
          <button
            className="continue-button"
            onClick={() => {
              closePopUps();
              reRender();
            }}>
            {" "}
            CONTINUE{" "}
          </button>
        </div>
      </div>

      {/* Bubbles Pop Up */}
      <div id="bubbles-pop-up" className="seaweed-bubbles-pop-up">
        <div className="seaweed-bubbles-pop-up-inner">
          <p>{`Float up to ${players[nextID]["placement"]} !`}</p>
          <button
            className="continue-button"
            onClick={() => {
              closePopUps();
              reRender();
            }}>
            {" "}
            CONTINUE{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
