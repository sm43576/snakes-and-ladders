import "../css/NumPlayersPage.css";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";

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

  // TODO: remove if we think using app context is a better idea
  // const [maxPlayers,changePlayer] = useState(0);
  // const [maxCommies,changeCom] = useState(0);

  function handlePlayerCount(string) {
    if (string == ">" && maxPlayers != 6) setMaxPlayers(maxPlayers + 1);
    else if (string == "<" && maxPlayers != 1) setMaxPlayers(maxPlayers - 1);
    console.log(maxPlayers);
  }

  function handleComCount(string) {
    if (string == ">" && maxCommies != 5) changeCom(maxCommies + 1);
    else if (string == "<" && maxCommies != 0) changeCom(maxCommies - 1);
    console.log(maxCommies);
  }

  async function handleAddPlayer() {
    for (let i = 0; i < maxPlayers; i++) {
      const newPlayer = await addPlayer(`Player ${i + 1}`, 0, "", true);
      console.log(newPlayer);
    }
    for (let i = 0; i < maxCommies; i++) {
      const newPlayer = await addPlayer(`COM ${i + 1}`, 0, "", false);
      console.log(newPlayer);
    }
  }

  return (
    <div className="num-players-page">
      <img className="bubble-top" src={bubbleCornerTop} />
      <Link to="/">
        <button className="home-btn">{"<"}</button>
      </Link>

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
            onClick={() => handlePlayerCount(">")}>
            <img className="increase-img" src="../src/assets/increase.png" />
          </button>
        </div>
      </div>

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

      <img className="bubble-bot" src={bubbleCornerBtm} />
      <NavLink to={"/avatar/" + currentID + "/" + maxPlayers}>
        <button
          className="avatar-btn"
          disabled={maxPlayers + maxCommies < 2}
          onClick={() => {
            handleAddPlayer();
            setCurrentID(0);
          }}>
          {">"}
        </button>
      </NavLink>
    </div>
  );
}

export default NumPlayersPage;
