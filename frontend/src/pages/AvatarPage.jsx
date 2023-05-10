import "../css/AvatarPage.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";
import { AppContext } from "../AppContextProvider";

const avatarImageFiles = [
  "avatar_pufferfish.png",
  "avatar_dolphin.png",
  "avatar_otter.png",
  "avatar_squid.png",
  "avatar_seal.png",
  "avatar_octopus.png",
  "avatar_shark.png",
  "avatar_tropic_fish.png",
];

function AvatarPage() {
  const {
    currentID,
    setCurrentID,
    maxPlayers,
    players,
    editPlayer,
  } = useContext(AppContext);
  const nextID = currentID + 1;
  const previousID = currentID - 1;

  const [gameBtnState, setGameBtnState] = useState(false); // To control enablement/disablement of start game button
  const [activeAvatar, setActiveAvatar] = useState(""); // To control visual indicator for avatar selection
  const refNameInput = useRef(null);

  let inputName = "Player " + (currentID + 1);

  function handleNameChange(newName) {
    newName.length > 0
      ? (inputName = newName)
      : (inputName = "Player " + currentID + 1);
  }

  function handleAvatarBtnClick(avatarFileName) {
    setActiveAvatar(avatarFileName);
    canPlayersStartGame(true); // Checks if last player has chosen avatar in order to play game
  }

  // Enables "Start game" button if last player has chosen an avatar
  function canPlayersStartGame(hasChosen) {
    if (hasChosen && currentID + 1 == maxPlayers) {
      setGameBtnState(true);
    } else {
      setGameBtnState(false);
    }
  }

  function clearAvatarSelectionAndNameInput() {
    refNameInput.current.value = "";
    if (activeAvatar.length > 0) {
      setActiveAvatar("");
    }
  }

  async function editAvatar(currentID, inputName, activeAvatar) {
    const id = players[currentID]["_id"];
    editPlayer(id, inputName, 0, activeAvatar);
  }

  // To check if avatar has already been selected by a previous player and disable the button if it has
  function checkAvatarAlreadySelected(file) {
    var hasAlreadySelected = false;

    for (let i = 0; i < currentID; i++) {
      if (players[i]["image"] == file) {
        hasAlreadySelected = true;
      }
    }
    return hasAlreadySelected;
  }

  return (
    <div className="avatar-page">
      <img className="bubble-top" src={bubbleCornerTop} />
      <Link
        to={
          currentID == 0
            ? "/players"
            : "/avatar/" + previousID.toString() + "/" + maxPlayers.toString()
        }>
        <button
          className="back-btn"
          onClick={() => {
            clearAvatarSelectionAndNameInput();
            setCurrentID(currentID - 1);
          }}>
          {"<"}
        </button>{" "}
        {/**reset current avatar selection visual indicator when going back  */}
      </Link>
      {/* ------ Headings -----*/}
      <h1 className="heading-title">SELECT AVATAR</h1>
      <h2 className="heading-subtitle">
        {/* {players[currentID].name.toUpperCase()} */}
      </h2>
      <input
        className="nickname-input"
        type="text"
        ref={refNameInput}
        placeholder="Enter a nickname..."
        onChange={(e) => handleNameChange(e.target.value)}
      />
      {/* ------ Avatar Selection -----*/}
      <div className="avatar-content">
        {avatarImageFiles.map((file) => (
          <div className="avatar-circles" key={"avatar-circle" + file}>
            <button
              className={
                activeAvatar == file
                  ? "selected-avatar-img-btn"
                  : "default-avatar-img-btn"
              }
              key={"button" + file}
              onClick={() => handleAvatarBtnClick(file)}
              disabled={checkAvatarAlreadySelected(file)}>
              <img
                className="avatar-images"
                key={file}
                src={`/src/assets/selectable_avatars/${file}`}
              />
            </button>
          </div>
        ))}
      </div>
      {/* ------ Next button & start game button -----*/}
      <img className="bubble-bot" src={bubbleCornerBtm} />
      <NavLink
        to={"/avatar/" + nextID.toString() + "/" + maxPlayers.toString()}>
        <button
          className="next-btn"
          disabled={currentID + 1 >= maxPlayers}
          onClick={() => {
            editAvatar(currentID, inputName, activeAvatar);
            clearAvatarSelectionAndNameInput();
            setCurrentID(currentID + 1);
          }}>
          {">"}
        </button>
      </NavLink>
      <Link to="/game">
        <button
          className="start-game-btn"
          disabled={!gameBtnState}
          onClick={() => {
            editAvatar(currentID, inputName, activeAvatar);
            setCurrentID(0);
          }}>
          {"PLAY GAME"}
        </button>
      </Link>
    </div>
  );
}

export default AvatarPage;
