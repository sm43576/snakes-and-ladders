import "../css/AvatarPage.css";
import { Link, useParams, NavLink } from "react-router-dom";
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
  const { currentID, setCurrentID, maxPlayers, players, setPlayers } =
    useContext(AppContext);
  const nextID = currentID + 1;
  const previousID = currentID - 1;

  const [gameBtnState, setGameBtnState] = useState(false); // To control enablement/disablement of start game button
  const [activeAvatar, setActiveAvatar] = useState(""); // To control visual indicator for avatar selection
  const refNameInput = useRef(null);

  const { addPlayer } = useContext(AppContext);

  function handleNameChange(newName) {
    console.log(newName);
    const tempPlayersArray = [...players];
    tempPlayersArray[currentID] = {
      ...players[currentID],
      name: newName.length > 0 ? newName : "Player " + currentID + 1,
    };
    setPlayers(tempPlayersArray); // only updates next render tho so maybe database instead?
  }

  function handleAvatarBtnClick(avatarFileName) {
    setActiveAvatar(avatarFileName);
    const tempPlayersArray = [...players];
    tempPlayersArray[currentID] = {
      ...players[currentID],
      avatarFile: avatarFileName,
    };
    setPlayers(tempPlayersArray); // only updates next render tho so maybe database instead?
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

  // To check if avatar has already been selected by a previous player and disable the button if it has
  function checkAvatarAlreadySelected(file) {
    var hasAlreadySelected = false;
    var result = players.filter((player) => player.avatarFile === file);
    if (result.length > 0) {
      hasAlreadySelected = true;
    }
    return hasAlreadySelected;
  }

  async function handleOK() {
    const newPlayer = await addPlayer("hayoon", 100, "image");
    console.log(newPlayer);

    navigate(`/players/${newPlayer._id}`, { replace: true });
  }

  return (
    <div className="avatar-container">
      {/* ------ Back Button -----*/}
      <img className="bubble-corner-top" src={bubbleCornerTop} />
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
        {players[currentID].name.toUpperCase()}
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

      {/* ------ Next button & star game button -----*/}
      <img className="bubble-corner-btm" src={bubbleCornerBtm} />
      <NavLink
        to={"/avatar/" + nextID.toString() + "/" + maxPlayers.toString()}>
        <button
          className="next-btn"
          disabled={currentID + 1 >= maxPlayers}
          onClick={() => {
            handleOK();
            clearAvatarSelectionAndNameInput();
            setCurrentID(currentID + 1);
          }}>
          {">"}
        </button>{" "}
        {/**reset current avatar selection visual indicator when going forward  */}
      </NavLink>
      <Link to="/game">
        <button className="start-game-btn" disabled={!gameBtnState}>
          {"PLAY GAME"}
        </button>
      </Link>
    </div>
  );
}

export default AvatarPage;
