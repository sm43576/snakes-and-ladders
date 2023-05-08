import "../css/GamePage.css"
import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from 'react';
import TutorialPopUp from "./TutorialPopUp";
import SettingsPopUp from "./SettingsPopUp";

import RollDice from "../components/RollDice";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../AppContextProvider";

// import homeIcon from "../assets/home.png"


function GamePage() {
  document.body.style.backgroundColor = "#A5ACCD";

  library.add(fas);

  const { currentID, setCurrentID, maxPlayers, maxCommies, players, setPlayers } = useContext(AppContext);

  setCurrentID(0);
  const [previousID, setPreviousID] = useState(maxPlayers + maxCommies - 1); // To control enablement/disablement of start game button
  const [nextID, setNextID] = useState(1); // To control enablement/disablement of start game button

  console.log(players[previousID].avatarFile);
  console.log(players[currentID].avatarFile);
  console.log(players[nextID].avatarFile);

  const [tutorialButtonPopup, setTutorialButtonPopup] = useState(false);
  const [settingsButtonPopup, setSettingsButtonPopup] = useState(false);

  
  const renderBoard = () => { // eventually would need to pass through snakes & ladder placements, and player placements
    const table = document.createElement('table');

    let num = 100;

    // add 10 rows and 10 columns to the table
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr');
      let newRow = true;
      if (i == 0) {
        newRow = false;
      }
      for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');

        if (i % 2 == 0) { // even rows
          if (newRow) {
            num -= 11;
            newRow = false;
          }
          td.textContent = num;
          num--;
        } else {
          if (newRow) {
            num -= 9;
            newRow = false;
          }
          td.textContent = num;
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
    const renderBoardDiv = document.querySelector('.renderBoard');
    if (renderBoardDiv.children.length === 0) {
      const table = renderBoard();
      renderBoardDiv.appendChild(table);
    }
    // setCurrentID(0);
  }, []);

  // function updatePrevNextPlayers() {
  //   this.nextID = currentID + 1;
  //   this.previousID = currentID - 1;

  // }

  return (
    <div className="game-page">

      <div className="div-1">

        <div className="container white-bgr">
          <RollDice />
        </div>

        <div className="container">
          <p className="current-player-tag">Current Player: {players[currentID].name.toUpperCase()}</p>
          <div className="div-players">
            <div className="prev-player">
              <img className='prev-player-image' src={`/src/assets/selectable_avatars/${players[previousID].avatarFile}`} />
            </div>
            <div className="current-player">
              <img className='current-player-image' src={`/src/assets/selectable_avatars/${players[currentID].avatarFile}`} />
            </div>
            <div className="next-player">
              <img className='next-player-image' src={`/src/assets/selectable_avatars/${players[nextID].avatarFile}`} />
            </div>
          </div>
          {/* <div className="next-players" />
          <div className="next-players" /> */}
        </div>
      </div>

      <div className="div-2">
        <table className="renderBoard"></table>
      </div>



      <div className="div-3">

        <div className="justify-left">
          <Link to="/">
            <button className="gold-dark-bgr home btn" />
          </Link>
        </div>

        <div className="justify-right">
          <button className="purple-light-bgr settings btn" onClick={() => setSettingsButtonPopup(true)} />
          <SettingsPopUp
            trigger={settingsButtonPopup}
            setTrigger={setSettingsButtonPopup}
          ></SettingsPopUp>

        </div>

        <div className="justify-left">
          <button className="white-bgr tutorial btn" onClick={() => setTutorialButtonPopup(true)} />
          <TutorialPopUp
            trigger={tutorialButtonPopup}
            setTrigger={setTutorialButtonPopup}
          />

        </div>

        <Link to="/results">
          <button className="btn">
            R
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GamePage;
