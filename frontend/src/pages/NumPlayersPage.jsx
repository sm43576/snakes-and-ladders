import "../css/NumPlayersPage.css";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";
import backButton from "../assets/back_button.png";
import nextButton from "../assets/next_button.png";

function NumPlayersPage() {
  const {
    currentID,
    setCurrentID,
    maxPlayers,
    setMaxPlayers,
    maxCommies,
    changeCom,
    addPlayer,
  } = useContext(AppContext);

  var nextBtnDisabled = 'next-btn-disabled-img';
  
  // Increases/decrease number of players accordingly - ensures total number of players (including COM) is max 6
  function handlePlayerCount(string) {
    if (string == ">" && maxPlayers + maxCommies != 6) setMaxPlayers(maxPlayers + 1);
    else if (string == "<" && maxPlayers != 1) setMaxPlayers(maxPlayers - 1);
    console.log(maxPlayers);

    (maxPlayers + maxCommies < 2) ? nextBtnDisabled = 'next-btn-disabled-img' : nextBtnDisabled = 'next-btn-img'
  }

  // Increases/decrease number of COM players accordingly - ensures total number of players (including human players) is max 6
  function handleComCount(string) {
    if (string == ">" && maxPlayers + maxCommies != 6) changeCom(maxCommies + 1);
    else if (string == "<" && maxCommies != 0) changeCom(maxCommies - 1);
    console.log(maxCommies);

    (maxPlayers + maxCommies < 2) ? nextBtnDisabled = 'next-btn-disabled-img' : nextBtnDisabled = 'next-btn-img'
  }

  // Adds players (including COM) to database with default name, placement and image
  async function handleAddPlayer() {
    for (let i = 0; i < maxPlayers; i++) {
      const newPlayer = await addPlayer(`Player ${i + 1}`, 0, "", true);
      console.log(newPlayer);
    }
    for (let i = 0; i < maxCommies; i++) {
      const newPlayer = await addPlayer(`COM ${i + 1}`, 0, "avatar_com.png", false);
      console.log(newPlayer);
    }
  }


  return (
    <div className="num-players-page">
      {/* ------ Back Button ------ */}
      <img className="bubble-top" src={bubbleCornerTop} />
      <Link to="/">
        <button className="back-btn">
        </button>
      </Link>

      <div className="bubbles-div">
        {/* ------ Players Bubble ------ */}
        <div className="bubble-p">
          <div className="player-type">
            <p> PLAYERS </p>
          </div>
          <div className="bubble-flex">
            <button
              className="decrease-btn"
              onClick={() => handlePlayerCount("<")}>
              <img className="decrease-img" src="../src/assets/decrease.png" />
            </button>
            <p className="player-count">{maxPlayers}</p>
            <button
              className="increase-btn"
              aria-label="increase-btn1"
              onClick={() => handlePlayerCount(">")}>
              <img className="increase-img" src="../src/assets/increase.png" />
            </button>
          </div>
        </div>
        {/* ------ Com Players Bubble ------ */}
        <div className="bubble-c">
          <div className="player-type">
            <p> COM PLAYERS </p>
          </div>
          <div className="bubble-flex">
            <button className="decrease-btn" onClick={() => handleComCount("<")}>
              <img className="decrease-img" src="../src/assets/decrease.png" />
            </button>
            <p className="player-count">{maxCommies}</p>
            <button className="increase-btn" onClick={() => handleComCount(">")}>
              <img className="increase-img" src="../src/assets/increase.png" />
            </button>
          </div>
        </div>
      </div>

      {/* ------ Next Button ------ */}
      <img className="bubble-bot" src={bubbleCornerBtm} />
      <NavLink to={"/avatar/" + currentID + "/" + maxPlayers}>
        <button
          className="next-btn"
          disabled={maxPlayers + maxCommies < 2}
          onClick={() => {
            handleAddPlayer();
            setCurrentID(0);
          }}>
        </button>
      </NavLink>
    </div>
  );
}

export default NumPlayersPage;
