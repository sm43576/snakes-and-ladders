import "../css/HomePage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

function HomePage() {

  const {
    players,
    removePlayer,
  } = useContext(AppContext);

  // Removes all existing players from the database
  async function clearDatabase() {
    for (let i = 0; i < players.length; i++) {
      const id = players[i]["_id"];
      removePlayer(id);
    }
  }

  return (
    <div className="home-page">
      <h1 className="title">Snakes and Ladders</h1>
      <Link to="/players">
        <button
          className="button-start"
          aria-label="button-start"
          onClick={() => clearDatabase()}
        >PLAY</button>
      </Link>
    </div>
  );
}

export default HomePage;
