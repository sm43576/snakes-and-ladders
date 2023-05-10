import "../css/GamePage.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import TutorialPopUp from "./TutorialPopUp";
import SettingsPopUp from "./SettingsPopUp";
import BackToHomePopUp from "./BackToHomePopUp";

import RollDice from "../components/RollDice";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../AppContextProvider";

import board from "../assets/game-board.png";

// import homeIcon from "../assets/home.png"

function GamePage() {
  document.body.style.backgroundColor = "#A5ACCD";

  library.add(fas);

  const { currentID, nextID, players, getPlayerPlacement, getPlayerAvatar } =
    useContext(AppContext);

  const [tutorialButtonPopup, setTutorialButtonPopup] = useState(false);
  const [settingsButtonPopup, setSettingsButtonPopup] = useState(false);
  const [backToHomeButtonPopUp, setBackToHomeButtonPopUp] = useState(false);

  const renderBoard = (currentPlayerId, dice) => {
    const playerAvatar = getPlayerAvatar(currentPlayerId);
    const playerPlacement = getPlayerPlacement(currentPlayerId);

    const table = document.createElement("table");
    let num = 100;

    for (let i = 0; i < 10; i++) {
      const tr = document.createElement("tr");
      let newRow = true;

      if (i == 0) {
        newRow = false;
      }

      for (let j = 0; j < 10; j++) {
        const td = document.createElement("td");

        if (i % 2 == 0) {
          if (newRow) {
            num -= 11;
            newRow = false;
          }
          if (playerPlacement + dice == num) {
            td.style.backgroundImage =
              "url('/src/assets/selectable_avatars/avatar_dolphin.png')";
          }
          num--;
        } else {
          if (newRow) {
            num -= 9;
            newRow = false;
          }
          if (playerPlacement + dice == num) {
            td.style.backgroundImage =
              "url('/src/assets/selectable_avatars/avatar_dolphin.png')";
          }
          num++;
        }

        tr.appendChild(td);
      }

      table.appendChild(tr);
      newRow = false;
    }

    return table;
  };

  useEffect(() => {
    const renderBoardDiv = document.querySelector(".renderBoard");
    if (renderBoardDiv.children.length === 0) {
      const table = renderBoard();
      renderBoardDiv.appendChild(table);
    }
  }, []);

  return (
    <div className="game-page">
      <div className="div-1">
        <div className="container white-bgr">
          <RollDice />
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

      <div
        className="div-2"
        style={{
          backgroundImage: `url(${board})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          maxHeight: "100%",
          maxWidth: "100%",
        }}>
        <table className="renderBoard"></table>
      </div>

      <div className="div-3">
        <div className="justify-left">
          <button
            className=" pop-up-button gold-dark-bgr home btn"
            onClick={() => setBackToHomeButtonPopUp(true)}
          />
          <BackToHomePopUp
            trigger={backToHomeButtonPopUp}
            setTrigger={setBackToHomeButtonPopUp}
          />
        </div>

        <div className="justify-right">
          <button
            className="pop-up-button purple-light-bgr settings btn"
            onClick={() => setSettingsButtonPopup(true)}
          />
          <SettingsPopUp
            trigger={settingsButtonPopup}
            setTrigger={setSettingsButtonPopup}
          />
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
